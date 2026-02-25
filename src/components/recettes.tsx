"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function RecettesSection() {
  const [recettes, setRecettes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Appel vers notre API de recettes
    fetch('/api/recettes')
      .then(res => res.json())
      .then(data => {
        setRecettes(data)
        setLoading(false)
      })
      .catch(error => {
        console.error("Erreur lors du chargement des recettes:", error)
        setLoading(false)
      })
  }, []) // [] = exécuté 1 seule fois au chargement

  if (loading) return <p className="text-center py-16">Chargement des recettes...</p>

  return (
    <section className="py-16 bg-white" id="recettes">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Nos dernières recettes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {recettes.map((recette: { id: number; name: string }) => (
            <div key={recette.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              
              {/* Image placeholder */}
              <div className="h-48 w-full bg-orange-100"></div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{recette.name}</h3>
                <Link href={`/recettes/${recette.id}`} className="text-orange-600 font-semibold hover:underline">
                  Voir la recette →
                </Link>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}