import Hero from "../components/hero"; 
import Recettes from "../components/recettes";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Recettes /> 
    </main>
  );
}