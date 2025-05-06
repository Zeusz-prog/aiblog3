import Head from 'next/head'

export default function Sablonok() {
  return (
    <>
      <Head>
        <title>Sablonok – AI Hustle Lab</title>
      </Head>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Letölthető AI-sablonok</h1>
        <ul className="space-y-6">
          <li className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Instagram poszt AI prompt sablon</h2>
            <p className="text-sm text-gray-600 mb-2">Töltsd le sablonként és generálj AI segítségével napi posztokat.</p>
            <a href="#" className="text-indigo-600 underline">Letöltés</a>
          </li>
          <li className="bg-white p-6 shadow rounded">
            <h2 className="text-xl font-semibold mb-2">Blogcikk vázlat sablon ChatGPT-hez</h2>
            <p className="text-sm text-gray-600 mb-2">Használható niche blogok gyors generálásához.</p>
            <a href="#" className="text-indigo-600 underline">Letöltés</a>
          </li>
        </ul>
      </div>
    </>
  )
}
