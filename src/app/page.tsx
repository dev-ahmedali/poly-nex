import Navbar from "../components/layout/navbar";
import ContactPage from "../components/sections/contact";
import Hero from "../components/sections/hero";

import WorksPage from "./work/workpage";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-(--bg) text-(--text)">
      <Navbar />
      <Hero />
      <WorksPage />
      <ContactPage/>
   </main>
  );
}









