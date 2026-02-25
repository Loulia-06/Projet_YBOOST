// c'est la structure de la page le layout
import type { Metadata } from "next";
import "./globals.css";


import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Mon Site Cuisine",
  description: "Les meilleures recettes",
};

export default function RootLayout({
  // ici children est entre guillemets (le header et le footer)
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased flex flex-col min-h-screen">
       
        <Navbar />

        
        <main className="flex-grow">
          {children}
        </main>

        
        <Footer />
      </body>
    </html>
  );
}