import React, {useState, useEffect} from 'react'
import matter from 'gray-matter'

export default function Profile(){
  const [profile, setProfile] = useState(null)

  useEffect(()=>{
    async function load(){
      const mod = await import('/content/profile/main.md?raw')
      const raw = mod && (mod.default || mod)
      const {data} = matter(raw)
      setProfile(data)
    }
    load()
  },[])

  if(!profile) return <p>Loading profile...</p>

  return (
    <section className="page profile">
      <h2>Profile</h2>
      <div className="profile-card">
        <img src={profile.avatar || '/images/profile-avatar.svg'} alt="Profile avatar" style={{width:160,height:160,borderRadius:12}}/>
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.bio}</p>
        </div>
      </div>
    </section>
  )
}
