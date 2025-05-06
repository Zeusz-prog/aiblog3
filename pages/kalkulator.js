import { useState } from 'react'
import Head from 'next/head'

export default function Kalkulator() {
  const [videos, setVideos] = useState(5)
  const [views, setViews] = useState(1000)
  const cpm = 2 // $2 CPM

  const earnings = ((videos * views) / 1000) * cpm

  return (
    <>
      <Head>
        <title>Kalkulátor – AI Hustle Lab</title>
      </Head>
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">AI YouTube bevétel kalkulátor</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Heti videók száma:</label>
            <input type="number" value={videos} onChange={(e) => setVideos(e.target.value)} className="mt-1 p-2 border w-full rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">Átlagos nézettség / videó:</label>
            <input type="number" value={views} onChange={(e) => setViews(e.target.value)} className="mt-1 p-2 border w-full rounded" />
          </div>
          <div className="mt-4 text-lg font-semibold">
            Becsült heti bevétel: <span className="text-indigo-600">${earnings.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  )
}
