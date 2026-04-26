import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{png,jpg,jpeg,webp,svg,avif,gif}',
  { eager: true },
);

const byFilename = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(modules)) {
  const filename = path.split('/').pop();
  if (filename) byFilename.set(filename, mod.default);
}

export function getAsset(filename: string | undefined): ImageMetadata | undefined {
  if (!filename) return undefined;
  const asset = byFilename.get(filename);
  if (!asset) {
    throw new Error(
      `Asset "${filename}" not found in src/assets/. ` +
        `Available: ${[...byFilename.keys()].join(', ')}`,
    );
  }
  return asset;
}
