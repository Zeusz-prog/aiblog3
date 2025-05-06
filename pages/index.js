import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Hustle Lab</title>
        <meta name="description" content="Keress pénzt AI-val – ötletek, sablonok, kalkulátor." />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI Hustle Lab</h1>
          <nav className="space-x-4">
            <Link href="/" className="hover:text-indigo-600">Főoldal</Link>
            <Link href="/blog" className="hover:text-indigo-600">Blog</Link>
            <Link href="/sablonok" className="hover:text-indigo-600">Sablonok</Link>
            <Link href="/kalkulator" className="hover:text-indigo-600">Kalkulátor</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-12 px-4">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Keress pénzt AI-val</h2>
          <p className="text-lg text-gray-600">
            Sablonok, ötletek és gyakorlati példák, hogyan indíts online bevételi forrást AI segítségével.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="bg-white rounded shadow p-4 hover:shadow-lg">
              <img src={`https://source.unsplash.com/400x250/?technology,ai,${n}`} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-lg font-semibold mb-2">AI ötlet #{n}</h3>
              <p className="text-sm text-gray-600">Fedezd fel, hogyan használhatod a mesterséges intelligenciát online pénzkeresésre.</p>
              <Link href="/blog" className="text-indigo-600 mt-3 inline-block">Tovább olvasom →</Link>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white py-6 text-center text-sm text-gray-500">
        © 2025 AI Hustle Lab. Minden jog fenntartva.
      </footer>
    </div>
  )
}
