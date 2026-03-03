// sanity/lib/client.ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-01-01',
  useCdn: false, // false = always fresh data
})

// Helper function — pages mein import karke use karein
// Note: Next.js revalidation is handled at the route level (export const revalidate = 60)
// Do NOT pass a third argument to client.fetch — it breaks param serialization in next-sanity v12
export async function sanityFetch<T>(
  query: string,
  params?: Record<string, any>
): Promise<T> {
  return client.fetch<T>(query, params ?? {})
}