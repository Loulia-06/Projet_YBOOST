import React from "react"
import mongoose from "mongoose"
import { Recette } from "@/models/recettes"

const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI!)
  }
}

type Props = { params: Promise<{ id: string }> }

export default async function RecettePage({ params }: Props) {
  // On attend que les paramètres soient résolus
  const { id } = await params; 

  await connectDB()

  // On utilise directement l'id qu'on vient de récupérer
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return <main style={{ padding: 20 }}>ID invalide</main>
  }

  const recette = await Recette.findById(id).lean()
  if (!recette) return <main style={{ padding: 20 }}>Recette non trouvée</main>

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 20 }}>
      <h1 style={{ fontSize: 28, marginBottom: 12 }}>{recette.name}</h1>
      {recette.image ? (
        <img src={recette.image} alt={recette.name} style={{ maxWidth: "100%", borderRadius: 8, marginBottom: 12 }} />
      ) : (
        <div style={{ width: "100%", height: 240, background: "#fde68a", borderRadius: 8, marginBottom: 12 }} />
      )}
      <p style={{ whiteSpace: "pre-wrap", marginBottom: 12 }}>{recette.description}</p>
      <p><strong>Catégorie :</strong> {recette.category}</p>
      <div style={{ marginTop: 16 }}>
        <a href="/#recettes" style={{ color: "#f97316", textDecoration: "underline" }}>← Retour aux recettes</a>
      </div>
    </main>
  )
}