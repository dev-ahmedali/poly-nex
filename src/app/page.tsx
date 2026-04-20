import Navbar from "../components/layout/navbar";
import ContactPage from "../components/sections/contact";
import Hero from "../components/sections/hero";
import WorksPage from "./work/workpage";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-(--bg) text-(--text)">
      <Navbar />
      <Hero />
        {/* Works Section */}
      <WorksPage />
      <ContactPage/>

      {/* <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-(--text)">About</h2>
        </div>
      </section> */}

      
    </main>
  );
}









