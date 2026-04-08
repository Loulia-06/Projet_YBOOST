"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function RecettesSection() {
  const [recettes, setRecettes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/recettes')
      .then(res => res.json())
      .then(data => {
        console.log("API /api/recettes response:", data) // check la forme des données
        const normalized = (data || []).map((r: any) => {
          const rawId = r._id ?? r.id
          const id =
            typeof rawId === "string"
              ? rawId
              : rawId?.$oid
              ? rawId.$oid
              : rawId?.toString?.() || "" // fallback
          return { ...r, _id: id }
        })
        setRecettes(normalized)
        setLoading(false)
      })
      .catch(error => {
        console.error("Erreur lors du chargement des recettes:", error)
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="text-center py-16">Chargement des recettes...</p>

  return (
    <section className="py-16 bg-white" id="recettes">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Nos dernières recettes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recettes.map((recette: any) => {
            if (!recette._id) return null // skip si pas d'id
            return (
              <div key={recette._id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="h-48 w-full bg-orange-100">
                  {recette.image && <img src={recette.image} alt={recette.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{recette.name}</h3>
                  <Link href={`/recettes/${recette._id}`} className="text-green-600 font-semibold hover:underline">
                    Voir la recette →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}