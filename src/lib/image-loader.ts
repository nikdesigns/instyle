// Static export has no image optimization server, so this loader just
// returns the original path — but with basePath applied, since Next only
// does that automatically for the built-in loader (which requires a server).
export default function imageLoader({ src }: { src: string }) {
  if (/^https?:\/\//.test(src)) return src;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${src}`;
}
