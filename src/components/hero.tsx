import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[500px] w-full bg-slate-900 flex flex-col items-center justify-center text-white px-4">
    
      <div className="absolute inset-0 bg-bleu/500 z-0"></div>
      
    
      <div className="relative z-10 w-full max-w-4xl text-center space-y-8">
        
       
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Besoin d’inspiration pour cuisiner ?
        </h1>

     
        <div className="bg-white rounded-lg p-2 flex flex-col md:flex-row items-center shadow-lg text-gray-700">
          
         
          <div className="flex items-center flex-1 w-full px-4 border-b md:border-b-0 md:border-r border-gray-200 py-3 md:py-0">
            <span className="text-red-50 text-xl mr-3">🍽️</span>
            <input 
              type="text" 
              placeholder="pâtes, végétarien, Japon…" 
              className="w-full outline-none text-gray-600 placeholder-gray-400"
            />
          </div>

         
          <div className="w-full md:w-48 px-4 py-3 md:py-0">
            <select className="w-full outline-none bg-transparent text-gray-600 cursor-pointer">
              <option>Categorie</option>
              <option>Déjeuner</option>
              <option>Dîner</option>
              <option>Dessert</option>
            </select>
          </div>

          
          <button className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-md transition-colors w-full md:w-auto flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

        </div>
        
      
        <p className="text-gray-300 text-sm">
         Trouvez la recette parfaite parmi les cuisines du monde.
        </p>
      </div>
    </section>
  );
};

export default Hero;