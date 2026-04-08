import mongoose from "mongoose";

const recetteSchema = new mongoose.Schema({
    //je créer mon model qu'on veut selon la recette / 
    name: { type: String, required: true },
    image: { type: String, required: false }, 
    description: { type: String, required: true },
    category: { type: String, required: true },
    

});

export const Recette = mongoose.models.Recette || mongoose.model("Recette", recetteSchema);

