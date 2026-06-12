// scripts/generate-projects.mjs
// Run: node scripts/generate-projects.mjs
//
// Scans public/projects/ and writes the typed manifest src/data/projects.ts.
//
// Expected layout: one SUBFOLDER per job, each containing photos and optional
// short .mp4 clips, plus an optional info.txt:
//     line 1 = title
//     line 2 = category
//     line 3+ = description
// A cover.* file (if present) is used as the cover, otherwise the first image.
//
// Fallback: any loose media sitting directly in public/projects/ (no subfolder)
// is grouped into a single "Recent Work" project so the site still works.
//
// Paths are stored RAW (with literal spaces). next/image encodes them once on
// its own; for plain <video src>/poster attributes, encode with encodeURI().

import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PROJECTS_DIR = join(ROOT, "public", "projects");
const OUT = join(ROOT, "src", "data", "projects.ts");

const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);
const VIDEO_EXT = new Set([".mp4", ".webm", ".mov", ".m4v"]);

const isImage = (f) => IMAGE_EXT.has(extname(f).toLowerCase());
const isVideo = (f) => VIDEO_EXT.has(extname(f).toLowerCase());
const isCover = (f) => /^cover\.[^.]+$/i.test(f);

function humanize(name) {
  return name
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "project";
}

const publicPath = (...parts) => "/" + ["projects", ...parts].join("/");

// Build a project record from a list of file names that live in `baseUrlParts`
// (relative to public/) and on disk under `absDir`.
function buildProject({ slug, files, absDir, baseUrlParts, info }) {
  const images = files.filter(isImage).sort((a, b) => a.localeCompare(b));
  const videos = files.filter(isVideo).sort((a, b) => a.localeCompare(b));

  let coverFile = images.find(isCover) || videos.find(isCover) || null;
  if (coverFile && !isImage(coverFile)) coverFile = null; // cover must be an image
  if (!coverFile) coverFile = images[0] || null;

  // Recency = newest file mtime within the project.
  let mtime = 0;
  for (const f of [...images, ...videos]) {
    const m = statSync(join(absDir, f)).mtimeMs;
    if (m > mtime) mtime = m;
  }

  return {
    slug,
    title: info.title,
    category: info.category,
    description: info.description,
    cover: coverFile ? publicPath(...baseUrlParts, coverFile) : "",
    images: images.map((f) => publicPath(...baseUrlParts, f)),
    videos: videos.map((f) => publicPath(...baseUrlParts, f)),
    _mtime: mtime,
  };
}

function parseInfo(absDir, files, folderName) {
  const infoFile = files.find((f) => /^info\.txt$/i.test(f));
  let title = "";
  let category = "";
  let description = "";
  if (infoFile) {
    const lines = readFileSync(join(absDir, infoFile), "utf8").split(/\r?\n/);
    title = (lines[0] || "").trim();
    category = (lines[1] || "").trim();
    description = lines.slice(2).join("\n").trim();
  }
  const usedHumanTitle = !title;
  const usedDefaultCategory = !category;
  return {
    info: {
      title: title || humanize(folderName),
      category: category || "General",
      description,
    },
    usedHumanTitle,
    usedDefaultCategory,
  };
}

function main() {
  let entries = [];
  try {
    entries = readdirSync(PROJECTS_DIR, { withFileTypes: true });
  } catch {
    console.error(`No public/projects directory found at ${PROJECTS_DIR}`);
  }

  const projects = [];
  const gaps = [];

  // 1. One project per subfolder.
  const dirs = entries.filter((e) => e.isDirectory());
  for (const d of dirs) {
    const absDir = join(PROJECTS_DIR, d.name);
    const files = readdirSync(absDir).filter((f) => isImage(f) || isVideo(f) || /^(info\.txt|cover\.[^.]+)$/i.test(f));
    const mediaCount = files.filter((f) => isImage(f) || isVideo(f)).length;
    if (mediaCount === 0) {
      gaps.push(`"${d.name}" — folder has no images or videos (skipped)`);
      continue;
    }
    const { info, usedHumanTitle, usedDefaultCategory } = parseInfo(absDir, files, d.name);
    if (usedHumanTitle || usedDefaultCategory) {
      const missing = [usedHumanTitle && "title", usedDefaultCategory && "category"].filter(Boolean).join(" + ");
      gaps.push(`"${d.name}" — missing ${missing} (using ${usedHumanTitle ? `humanized "${info.title}"` : `"${info.title}"`}${usedDefaultCategory ? `, category "General"` : ""}). Add an info.txt.`);
    }
    projects.push(buildProject({ slug: slugify(d.name), files, absDir, baseUrlParts: [d.name], info }));
  }

  // 2. Fallback: loose media directly in public/projects/.
  const looseFiles = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((f) => isImage(f) || isVideo(f));
  if (looseFiles.length > 0) {
    projects.push(
      buildProject({
        slug: "recent-work",
        files: looseFiles,
        absDir: PROJECTS_DIR,
        baseUrlParts: [],
        info: { title: "Recent Work", category: "General", description: "" },
      })
    );
    gaps.push(
      `${looseFiles.length} media file(s) are loose in public/projects/ (no subfolder) — grouped into a single "Recent Work" / "General" project. Move them into per-job subfolders (with an optional info.txt) for distinct projects, then re-run this script.`
    );
  }

  // Most-recent first.
  projects.sort((a, b) => b._mtime - a._mtime);
  projects.forEach((p) => delete p._mtime);

  const banner = `// AUTO-GENERATED by scripts/generate-projects.mjs — do not edit by hand.\n// Re-run after changing public/projects/:  node scripts/generate-projects.mjs\n`;

  const body = `${banner}
export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  images: string[];
  videos: string[];
};

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};

/** Unique categories present in the data, with "All" first (for filter chips). */
export const categories: string[] = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
`;

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, body);

  console.log(`Wrote ${OUT}`);
  console.log(`Projects: ${projects.length}`);
  projects.forEach((p) =>
    console.log(`  - ${p.slug}: "${p.title}" [${p.category}] ${p.images.length} img / ${p.videos.length} vid`)
  );
  if (gaps.length) {
    console.log(`\nNeeds attention (${gaps.length}):`);
    gaps.forEach((g) => console.log(`  ! ${g}`));
  }
}

main();
