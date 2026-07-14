import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { PhotoIcon, VideoIcon, DoubleRule } from "@/components/ui/Icons";

export default function FeaturedWork() {
  // Manifest is ordered most-recent first.
  const featured = projects.slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section className="sect tinted" id="portfolio">
      <div className="wrap">
        <div className="s-head center">
          <span className="s-eyebrow">Recent work</span>
          <h2 className="s-title">Projects across Dubai</h2>
          <DoubleRule center />
          <p className="s-sub">A sample of recent installations and maintenance works.</p>
        </div>

        <div className="pf-grid">
          {featured.map((p) => (
            <Link className="pf" href="/portfolio" key={p.slug} aria-label={`${p.title} — view in portfolio`}>
              <div className="thumb">
                {p.cover && (
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  />
                )}
                <span className="cat">{p.category}</span>
                <span className="count">
                  <span>
                    <PhotoIcon />
                    {p.images.length}
                  </span>
                  {p.videos.length > 0 && (
                    <span>
                      <VideoIcon />
                      {p.videos.length}
                    </span>
                  )}
                </span>
              </div>
              <div className="body">
                <h3>{p.title}</h3>
                {p.description && <p>{p.description}</p>}
              </div>
            </Link>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
          <Link className="btn btn-call" href="/portfolio">
            View all projects
          </Link>
        </div>
      </div>
    </section>
  );
}
