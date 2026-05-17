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

// etape 3 : les requetes 

// a) lire les recettes
export async function GET(request: Request) {
  try {
    await connectDB() // appelle la fonction connectDB pour voir si on est déjà connecté ou non
    const { searchParams } = new URL(request.url) // on récupère les filtres dans l'url (l'url du front)
    // décomposition de l'url dans des boites
    const nom  = searchParams.get("nom")
    const pays = searchParams.get("pays")
    const diet = searchParams.get("diet")
    const type = searchParams.get("type")

    const filtre: any = {} // on crée le filtre vide = tout récupérer
    // pour chaque boite si elle n'est pas vide, on l'ajoute au filtre
    if (nom)  filtre.name    = { $regex: nom,  $options: "i" } //$regex = contient ce mot et $options = insensible à la casse
    if (pays) filtre.country = { $regex: pays, $options: "i" }
    if (diet) filtre.diet    = { $regex: diet, $options: "i" }
    if (type) filtre.type    = { $regex: type, $options: "i" }
    // intérroge la BDD et convertie l'id sur un format lisible
    const recettes = (await Recette.find(filtre).lean()).map((r: any) => ({ // .lean() = renvoie en JS simple, ...r = copie tout et .map() = pour chaque recette
      ...r,
      _id: r._id.toString()
    }))

    return NextResponse.json(recettes, { status: 200 })  
     
  } catch (error) {
    console.error("Erreur GET recettes:", error) // erreur sur le terminal
    return NextResponse.json(
      { error: "Erreur lors de la récupération des recettes" }, // erreur au client
      { status: 500 }
    )
  }
}

// b) créer les recettes
export async function POST(request: Request) {
    try {
        await connectDB()
        const body = await request.json() // lire ce que le client nous envoie
        
        const nouvelleRecette = await Recette.create({ // crée la recette dans mongodb
            name:        body.name,
            country:     body.country,
            type:        body.type,
            diet:        body.diet,
            description: body.description,
            image:       body.image,
            ingredients: body.ingredients,  // tableau ["tomate", "mozza"...]
            steps:       body.steps,        // tableau ["Préchauffer"...]
            time:        body.time,
            difficulty:  body.difficulty,
        })
        
      return NextResponse.json(nouvelleRecette, { status: 201 }) // 201 pour dire que c'est créé

    } catch (error) {
        console.error("Erreur:", error)
        return NextResponse.json(
            { error: "Erreur lors de la création" },
            { status: 500 }
        )
    }
}
