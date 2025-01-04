import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-01',
  useCdn: process.env.NODE_ENV === 'production',
});

export async function getPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      content,
      mainImage,
      "slug": slug.current,
      publishedAt
    }`,
    { slug }
  );
}

export async function getPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      title,
      excerpt,
      mainImage,
      "slug": slug.current,
      publishedAt
    }`
  );
} 