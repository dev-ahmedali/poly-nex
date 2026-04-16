import Navbar from "../components/layout/navbar";
import Hero from "../components/sections/hero";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Navbar />
      <Hero />

      <section id="works" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-[var(--text)]">Featured Works</h2>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">
            Your motion cards will go here next.
          </p>
        </div>
      </section>

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









