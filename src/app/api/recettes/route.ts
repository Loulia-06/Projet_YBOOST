import { NextResponse } from "next/server"
import { Recette } from "@/models/recettes"
import mongoose from "mongoose"

// ici c'est pour les recettes, c'est une api qui retourne une liste de recettes

const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI!)
    }
}

// fonction pour lire les recettes
export async function GET() {
    try {
        await connectDB()
        const recettes = await Recette.find({}) //  Plus de données en dur !
        return NextResponse.json(recettes, { status: 200 })
    } catch (error) {
        console.error("Erreur:", error)
        return NextResponse.json(
            { error: "Erreur lors de la récupération des recettes" },
            { status: 500 }
        )
    }
}

// fonction pour créer une recette
export async function POST(request: Request) {
    try {
        await connectDB()
        const body = await request.json()
        
        const nouvelleRecette = await Recette.create({
            name: body.name,
            description: body.description,
            image: body.image,
            category: body.category,
        })
        
        return NextResponse.json(nouvelleRecette, { status: 201 })
    } catch (error) {
        console.error("Erreur:", error)
        return NextResponse.json(
            { error: "Erreur lors de la création" },
            { status: 500 }
        )
    }
}
