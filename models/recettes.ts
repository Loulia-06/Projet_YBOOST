import mongoose from "mongoose";

const recetteSchema = new mongoose.Schema({
    // champs de type string 
    name: { type: String, required: true },
    country: { type: String},
    type: {type: String, required: true},
    diet: {type: String, required: true},
    description: { type: String, required: true },
    image: { type: String, required: false },
   
    // champs de type tableau texte
    ingredients: {type: [String], required: true},
    steps: {type: [String], required: true},

    // champs en numbre 
    time: { type: Number, required: true },
    difficulty: { type: Number, required: true },
    
    // champ en date auto
    createdAt: {type: Date, default: Date.now}

});

// si le modèle Recette existe déjà en mémoire, réutilise-le, sinon crée-le
export const Recette = mongoose.models.Recette || mongoose.model("Recette", recetteSchema);

