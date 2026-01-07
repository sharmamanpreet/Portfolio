import React, {useState, useEffect} from 'react'
import useArtworks from '../data/useArtworks'

export default function Gallery(){
  const artworks = useArtworks()
  const [lightbox, setLightbox] = useState(null)

  useEffect(()=>{
    function onKey(e){
      if(e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keyup', onKey)
    return ()=> window.removeEventListener('keyup', onKey)
  },[])

  if(!artworks) return <p>Loading...</p>

  return (
    <section className="gallery">
      {artworks.map(a => (
        <button key={a.slug} className="thumb" onClick={() => setLightbox(a)}>
          <img src={a.image} alt={a.title} style={{transition:'transform .6s ease',transform: 'scale(1)'}} />
          <div className="caption">{a.title}</div>
        </button>
      ))}

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.image} alt={lightbox.title} />
            <div className="meta">
              <h2>{lightbox.title}</h2>
              <p>{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
