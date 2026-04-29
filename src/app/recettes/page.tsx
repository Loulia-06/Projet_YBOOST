import Link from "next/link";

export default async function RecettesPage() {
  // On récupère les recettes depuis notre API
  const res = await fetch('http://localhost:3000/api/recettes', {
    cache: 'no-store' // Pour toujours avoir les données les plus récentes
  });
  const recettes = await res.json();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Toutes nos recettes 
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recettes.map((recette: { _id: string; name: string }) => (
          <div key={recette._id} 
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition bg-white"
          >
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {recette.name}
            </h3>
            <Link 
              href={`/recettes/${recette._id}`} 
              className="text-green-600 font-semibold hover:underline inline-block mt-2"
            >
              Voir la recette →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}