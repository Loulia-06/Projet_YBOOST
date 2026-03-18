
'use client'

import React, { useState } from 'react'

export default function CreerRecettePage() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage(null)

    if (!name.trim() || !description.trim()) {
      setMessage('Le nom et la description sont obligatoires.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/recettes', { // Attention à la route ici, elle doit correspondre à celle de votre API 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, category }),
      })

      if (res.ok) {
        setMessage('Recette créée avec succès.')
        setName('')
        setDescription('')
       
        setCategory('')
      } else {
        const data = await res.json()
        setMessage(data?.error || 'Erreur côté serveur.')
      }
    } catch (err) {
      setMessage('Erreur réseau.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ maxWidth: 700, margin: '0 auto', padding: 20 }}>
      <h1>Créer une recette</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom</label><br />
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Nom de la recette" />
        </div>

        <div>
          <label>Description</label><br />
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Décris la recette" />
        </div>

      
        <div>
          <label>Catégorie</label><br />
          <input value={category} onChange={e => setCategory(e.target.value)} placeholder="Entrée, Plat, Dessert..." />
        </div>

        <button type="submit" disabled={loading}>{loading ? 'Envoi...' : 'Créer'}</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  )
}
