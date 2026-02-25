//ici c'est la page d'accueil ( le home )
import Hero from "../components/hero";
import Recettes from "../components/recettes";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
  
      <Hero />
      <Recettes />
      
    </div>
  );
} 