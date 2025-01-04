import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Post {
  title: string;
  content: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
}

// 模拟数据获取函数
async function getPost(slug: string): Promise<Post | null> {
  // 这里可以替换为实际的数据获取逻辑
  const posts: Record<string, Post> = {
    'first-post': {
      title: 'First Blog Post',
      content: '<p>This is our first blog post content.</p>',
      mainImage: {
        asset: {
          url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d'
        }
      },
      publishedAt: '2024-01-04'
    }
  };
  
  return posts[slug] || null;
}

export default async function BlogPost({
  params
}: {
  params: { slug: string }
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
      {post.mainImage && (
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={post.mainImage.asset.url}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}
      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
} 