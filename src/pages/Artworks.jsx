import React from 'react'
import useArtworks from '../data/useArtworks'

export default function Artworks(){
  const artworks = useArtworks()
  if(!artworks) return <p>Loading...</p>
  return (
    <section className="page artworks">
      <h2>Artworks</h2>
      <ul>
        {artworks.map(a=> (
          <li key={a.slug}>
            <strong>{a.title}</strong> — {a.description}
          </li>
        ))}
      </ul>
    </section>
  )
}
