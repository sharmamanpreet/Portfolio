import { useState, useEffect } from 'react'
import matter from 'gray-matter'

export default function useArtworks(){
  const [items, setItems] = useState(null)

  useEffect(()=>{
    async function load(){
      const modules = import.meta.glob('/content/artworks/*.md?raw', {eager: true})
      const parsed = Object.entries(modules).map(([path, raw])=>{
        const {data, content} = matter(raw)
        const slug = path.split('/').pop().replace('.md?raw','').replace('.md','')
        return {
          slug,
          title: data.title || slug,
          image: data.image || '',
          description: data.description || '',
          content
        }
      })
      setItems(parsed)
    }
    load()
  },[])

  return items
}
