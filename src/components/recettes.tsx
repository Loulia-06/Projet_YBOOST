import Link from "next/link";

export default function Recettes() {
 
  const recettes = [
    { id: 1, titre: "Pâtes Carbonara", desc: "Unerecette italienne sans crème.", color: "bg-yellow-100" },
    { id: 2, titre: "Avocado Toast", desc: "Un petit-déjeuner sain et rapide.", color: "bg-green-100" },
    { id: 3, titre: "Gâteau au Chocolat", desc: "Fondant et irrésistible.", color: "bg-stone-200" }, 
  ];

  return (
    <section className="py-16 bg-white" id="recettes">
      <div className="container mx-auto px-4">
        
        
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Nos dernières recettes
        </h2>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
         
          {recettes.map((recette) => (
            <div key={recette.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              
              <div className={`h-48 w-full ${recette.color}`}></div>

              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{recette.titre}</h3>
                <p className="text-gray-600 mb-4">{recette.desc}</p>
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