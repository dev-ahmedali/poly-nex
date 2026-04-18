import Navbar from "../components/layout/navbar";
import Hero from "../components/sections/hero";
import WorksPage from "./work/page";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <Hero />
        {/* Works Section */}
      <WorksPage />  {/* Make sure WorksPage is rendering the projects correctly */}

      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-[var(--text)]">About</h2>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-[var(--text)]">Contact</h2>
        </div>
      </section>
    </main>
  );
}









