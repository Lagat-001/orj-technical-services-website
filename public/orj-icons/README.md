# ORJ Emblem Icon Set

Isolated ORJ emblem (wordmark **"ORJ TECHNICAL SERVICES" removed**), exported to all standard
favicon and app-icon sizes. Source: high-res ORJ logo. Brand green `#155536`.

## Files

| File | Size | Background | Purpose |
|------|------|-----------|---------|
| `favicon.ico` | 16/32/48 | transparent | Classic browser favicon (multi-resolution) |
| `favicon-16x16.png` | 16² | transparent | Browser tab |
| `favicon-32x32.png` | 32² | transparent | Browser tab / taskbar |
| `favicon-48x48.png` | 48² | transparent | Windows / high-DPI tab |
| `favicon-96x96.png` | 96² | transparent | Android legacy / shortcuts |
| `apple-touch-icon.png` | 180² | white | iOS home-screen (Apple flattens transparency) |
| `icon-192x192.png` | 192² | transparent | PWA / Android manifest |
| `icon-256x256.png` | 256² | transparent | PWA (optional) |
| `icon-512x512.png` | 512² | transparent | PWA splash / high-res |
| `maskable-icon-512x512.png` | 512² | white | Android **adaptive** icon (safe-zone padded) |
| `mstile-150x150.png` | 150² | white | Windows tiles (optional) |
| `emblem.png` | 1024² | transparent | Master source (regenerate any size from this) |

## Where to put them
Drop everything into the project's **`public/`** root (or `public/icons/` if you prefer — then
prefix the paths below). `emblem.png` can replace your existing `public/emblem.png` master.

## Next.js App Router integration

**Option A — manifest + `<head>` links (matches your current `manifest.ts` setup):**

`app/manifest.ts` icons array:
```ts
icons: [
  { src: '/icon-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
  { src: '/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
  { src: '/maskable-icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
],
```

`app/layout.tsx` metadata (Next injects the `<link>` tags):
```ts
export const metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};
```

**Option B — file-convention (simplest, Next auto-generates tags):**
Rename and move into the **`app/`** directory:
- `favicon.ico`  → `app/favicon.ico`
- `icon-512x512.png` → `app/icon.png`
- `apple-touch-icon.png` → `app/apple-icon.png`

Next.js detects these automatically — no `<link>` tags needed.

## Note on tiny favicons
At 16–32px the emblem's fine detail (recycling arrows, two figures, the R) compresses into a
mark. That's normal and unavoidable at those sizes. If you want razor-sharp legibility on the
browser tab, consider a **simplified 16/32 glyph** (e.g. just the ring + R). Ask and I'll cut one.
