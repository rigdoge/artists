import React from 'react';
import { getPost } from '@/lib/sanity';
import { notFound } from 'next/navigation';

interface Post {
  title: string;
  content: any;
  mainImage: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      {post.mainImage && (
        <img
          src={post.mainImage.asset.url}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
      )}
      <div className="prose prose-lg max-w-none">
        {/* Add your content rendering logic here */}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
} 