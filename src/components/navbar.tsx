import Link from "next/link"; 

export default function Navbar() {
  return (
  
    <nav className="bg-white shadow-md">
      
      
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
      
        <Link href="/" className="text-2xl font-bold text-orange-600">
          RecetteDuMonde
        </Link>

     
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-orange-100 transition">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/recettes" className="hover:text-orange-600 transition">
              Recettes
            </Link>
          </li>
          <li>
            <Link href="/a-propos" className="hover:text-orange-600 transition">
              À propos
            </Link>
          </li>
        </ul>

        
        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
          S'abonner
        </button>

      </div>
    </nav>
  );
}
