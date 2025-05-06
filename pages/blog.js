import Head from 'next/head'
import Link from 'next/link'

export default function Blog() {
  const posts = [
    { title: '5 AI-ötlet passzív jövedelemhez', slug: 'ai-passziv-jovedelem' },
    { title: 'ChatGPT promptok pénzkereséshez', slug: 'chatgpt-promptok-penz' },
    { title: 'Hogyan építs niche oldalt AI-vel?', slug: 'niche-oldal-ai-val' },
  ]

  return (
    <>
      <Head>
        <title>Blog – AI Hustle Lab</title>
      </Head>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Blogcikkek</h1>
        <ul className="space-y-4">
          {posts.map(post => (
            <li key={post.slug} className="border-b pb-4">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-600">Kattints a részletekért…</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
