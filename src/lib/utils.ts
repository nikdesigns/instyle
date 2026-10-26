export { cn } from "cn"

// Next.js only auto-prefixes basePath for next/link, next/image, and
// next/navigation. Raw HTML attributes (e.g. a <video> element's src/poster)
// need it applied manually so demo deploys under a sub-path still resolve.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export function withBasePath(path: string) {
  return `${basePath}${path}`
}
