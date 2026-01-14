import React from 'react';

const Recettes = () => {
  // J'ai traduit les catégories dans les données aussi
  const recipes = [
    {
      id: 1,
      title: "Schnitzel de porc avec pommes de terre écrasées",
      category: "VIANDES",
      time: "60 min",
      color: "bg-orange-100"
    },
    {
      id: 2,
      title: "Cou de porc au vin et houmous de haricots",
      category: "VIANDES",
      time: "60-90 min",
      color: "bg-red-100"
    },
    {
      id: 3,
      title: "Poitrine de canard sur lit de lentilles",
      category: "VIANDES",
      time: "45 min",
      color: "bg-amber-100"
    },
    {
      id: 4,
      title: "Boulettes de viande sauce paprika",
      category: "VIANDES",
      time: "30-60 min",
      color: "bg-yellow-100"
    },
    {
      id: 5,
      title: "Steak de pointe de bœuf, réduction au vin",
      category: "VIANDES",
      time: "45 min",
      color: "bg-stone-200"
    },
    {
      id: 6,
      title: "Spaghetti alla puttanesca de Gennaro",
      category: "PÂTES",
      time: "60 min",
      color: "bg-lime-100"
    },
    {
      id: 7,
      title: "Soupe crémeuse au potiron",
      category: "SOUPES",
      time: "30 min",
      color: "bg-green-100"
    },
    {
      id: 8,
      title: "Salade de chou rouge croustillante",
      category: "SALADES",
      time: "15 min",
      color: "bg-emerald-100"
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* --- EN-TÊTE --- */}
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-4xl font-bold text-gray-800 tracking-wide uppercase">
            Recettes du Monde
          </h2>
          <p className="text-red-500 font-semibold uppercase text-sm tracking-widest">
            Voyagez à travers nos meilleures assiettes
          </p>
          
          {/* Les Filtres (Boutons ovales traduits) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button className="px-6 py-2 rounded-full bg-red-500 text-white font-medium text-sm shadow-md hover:bg-red-600 transition">
              Les plus récents
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-medium text-sm hover:bg-gray-200 transition">
              Populaires
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-medium text-sm hover:bg-gray-200 transition">
              Poulet
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-medium text-sm hover:bg-gray-200 transition">
              Fruits
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-medium text-sm hover:bg-gray-200 transition">
              Vegan
            </button>
            <button className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 font-medium text-sm hover:bg-gray-200 transition">
              Salades
            </button>
          </div>
        </div>

        {/* --- LA GRILLE DE RECETTES --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="group cursor-pointer flex flex-col">
              
              {/* Image (Placeholder coloré) */}
              <div className={`h-64 w-full rounded-xl ${recipe.color} mb-4 relative overflow-hidden shadow-sm group-hover:shadow-md transition-all`}>
                {/* Effet au survol */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              {/* Infos */}
              <div className="space-y-2">
                {/* Catégorie en ROUGE */}
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">
                  {recipe.category}
                </span>
                
                {/* Titre */}
                <h3 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-red-500 transition-colors line-clamp-2">
                  {recipe.title}
                </h3>
                
                {/* Icônes du bas (Temps, etc) */}
                <div className="flex items-center text-gray-400 text-xs font-medium gap-4 pt-1">
                  <div className="flex items-center gap-1">
                    {/* Icône Coeur vide */}
                    <span>♡</span>
                    <span>J'aime</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {/* Icône Horloge */}
                    <span>🕒</span>
                    <span>{recipe.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- BOUTON "VOIR PLUS" --- */}
        <div className="text-center mt-16">
          <button className="border border-gray-200 text-gray-500 px-10 py-3 text-sm font-semibold rounded hover:border-gray-800 hover:text-gray-900 transition-colors uppercase tracking-wide">
            Voir plus
          </button>
        </div>

      </div>
    </section>
  );
};

export default Recettes;