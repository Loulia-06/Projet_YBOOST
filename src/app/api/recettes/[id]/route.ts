// etape 1 : importer toutes les outils
import { NextResponse } from "next/server" // import l'outil qui permet de repondre en .json
import { Recette } from "@/models/recettes" // import le modèle qu'on a crée dans recettes.ts
import mongoose from "mongoose" // import mongoose pour la connexion avec la BDD

// etape 2 : connexion avec la BDD (mongodb)

const connectDB = async () => { 
    if (mongoose.connection.readyState === 0) { // vérifie si déjà connecté(0=pas connecté et 1=connecté)
        await mongoose.connect(process.env.MONGODB_URI!) // on se connecte si = à 0)
    }
}

// etape 3 : lire UNE seule recette

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // params est une Promise en Next.js 16
) {
  try {
    await connectDB() // on vérifie la connexion MongoDB

    // params est une Promise dans Next.js 16 → on doit l'attendre avant d'utiliser l'id
    const { id } = await params

    // on cherche la recette qui a cet id précis dans MongoDB
    const recette = await Recette.findById(id).lean()

    if (!recette) {
      return NextResponse.json(
        { error: "Recette introuvable" },
        { status: 404 }  // status 404 = je n'ai pas trouvé 
      )
    }

    // on convertit le _id en string lisible
    // même logique que dans le GET de l'autre fichier
    const recetteFormatee = {
      ...(recette as any), // copie tous les champs
      _id: (recette as any)._id.toString() // convertit le _id en string
    }

    // on renvoie la recette trouvée
    return NextResponse.json(recetteFormatee, { status: 200 })

  } catch (error) {
    console.error("Erreur GET recette par id:", error)
    return NextResponse.json(
      { error: "Erreur lors de la récupération" },
      { status: 500 }
    )
  }
}

// etape 4 : modifier UNE recette

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // params est une Promise en Next.js 16
) {
  try {
    await connectDB() // on vérifie la connexion MongoDB

    // params est une Promise dans Next.js 16 → on doit l'attendre avant d'utiliser l'id
    const { id } = await params

    // on lit les nouvelles données envoyées par le client
    // c'est ce que le client veut modifier
    const body = await request.json()

    // on cherche la recette par son id ET on la modifie
    const recetteMiseAJour = await Recette.findByIdAndUpdate(
      id,               // l'id de la recette à modifier
      { $set: body },   // les champs à modifier
      { new: true }     // renvoie la nouvelle version
    )

    // si aucune recette trouvée avec cet id → 404
    if (!recetteMiseAJour) {
      return NextResponse.json(
        { error: "Recette introuvable" },
        { status: 404 }
      )
    }

    // on renvoie la recette modifiée
    return NextResponse.json(recetteMiseAJour, { status: 200 })

  } catch (error) {
    console.error("Erreur PUT recette:", error)
    return NextResponse.json(
      { error: "Erreur lors de la modification" },
      { status: 500 }
    )
  }
}

// etape 5 : supprimer UNE recette

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // params est une Promise en Next.js 16
) {
  try {
    await connectDB() // on vérifie la connexion MongoDB

    // params est une Promise dans Next.js 16 → on doit l'attendre avant d'utiliser l'id
    const { id } = await params

    const recetteSupprimee = await Recette.findByIdAndDelete(id) // findByIdAndDelete = cherche + supprime directement

    if (!recetteSupprimee) {
      return NextResponse.json(
        { error: "Recette introuvable" },
        { status: 404 }
      )
    }

    // on confirme la suppression avec un message
    return NextResponse.json(
      { message: "Recette supprimée avec succès" },
      { status: 200 }
    )

  } catch (error) {
    console.error("Erreur DELETE recette:", error)
    return NextResponse.json(
      { error: "Erreur lors de la suppression" },
      { status: 500 }
    )
  }
}