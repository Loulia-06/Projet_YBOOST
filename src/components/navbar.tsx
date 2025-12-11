export default function Navbar() {
    return (
             <header className="w-full flex justify-center py-4 bg-white">
    
 <ul className="absolute left-8 gap-8 text-black dark:text-black font-medium text-lg">
      Logo 
      </ul> 
    <ul className="flex gap-8 text-black dark:text-black font-medium text-lg">
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Recettes</a></li>
      <li><a href="#">Pays</a></li>
      <li><a href="#">Contact</a></li>
    </ul> 
  

    </header>
    );
}