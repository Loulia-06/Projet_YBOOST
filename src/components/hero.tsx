import Link from "next/link";

export default function Hero() {
  return (
   
    <section className="bg-gray-50 py-20">
      
      <div className="container mx-auto px-4 text-center">
        
      
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
          Découvrez les meilleures <span className="text-bleu-600">Recettes</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Apprenez à cuisiner comme un chef avec nos guides simples et nos ingrédients frais. 
          De l'entrée au dessert, tout est là.
        </p>

      
        <div className="flex justify-center space-x-4">
          <Link 
            href="/recettes" 
            className="bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition"
          >
            Voir les recettes
          </Link>
          
          <button className="bg-white text-orange-600 border border-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
            En savoir plus
          </button>
        </div>

      </div>
    </section>
  );
}