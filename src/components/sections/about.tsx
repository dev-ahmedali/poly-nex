"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-[var(--text)] sm:text-5xl lg:text-6xl"
        >
          About Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-7 text-[var(--muted)] sm:text-xl mx-auto"
        >
          We are a team of creative designers and animators working together to bring cinematic, abstract, and technical motion studies to life. Our goal is to provide procedural motion assets and visual work using the power of Blender and Geometry Nodes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {/* Team Card 1 */}
          <div className="flex flex-col items-center bg-(--surface) p-6 rounded-xl shadow-xl transition transform hover:scale-105 border rounded-xl border-white/10">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--royal-blue)] mb-4">
              <img
                src="./images/team3.webp" // Replace with real images
                alt="Team Member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[var(--text)]">Ali</h3>
            <p className="text-sm text-[var(--muted)]">3D Artist & Developer</p>
          </div>

          {/* Team Card 2 */}
          <div className="flex flex-col items-center bg-[var(--surface)] p-6 rounded-xl shadow-xl transition transform hover:scale-105 border rounded-xl border-white/10">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--royal-blue)] mb-4">
              <img
                src="/images/team1.webp" // Replace with real images
                alt="Team Member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[var(--text)]">Miraz</h3>
            <p className="text-sm text-[var(--muted)]">Art Director</p>
          </div>

          {/* Team Card 3 */}
          <div className="flex flex-col items-center bg-[var(--surface)] p-6 rounded-xl shadow-xl transition transform hover:scale-105 border rounded-xl border-white/10">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--royal-blue)] mb-4">
              <img
                src="/images/team2.webp" // Replace with real images
                alt="Team Member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[var(--text)]">Kowshik</h3>
            <p className="text-sm text-[var(--muted)]">3D Artist</p>
          </div>

          {/* Team Card 4 */}
          <div className="flex flex-col items-center bg-[var(--surface)] p-6 rounded-xl shadow-xl transition transform bg-linear-100 hover:scale-105 border-4s border rounded-xl border-white/10">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--royal-blue)] mb-4">
              <img
                src="/images/team4.webp" // Replace with real images
                alt="Team Member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[var(--text)]">Bappy</h3>
            <p className="text-sm text-[var(--muted)]">3D Artist</p>
          </div>

          {/* Team Card 5 */}
           <div className="flex flex-col items-center bg-[var(--surface)] p-6 rounded-xl shadow-xl transition transform hover:scale-105 border rounded-xl border-white/10">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[var(--royal-blue)] mb-4">
              <img
                src="/images/team5.jpg" // Replace with real images
                alt="Team Member"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-[var(--text)]">Mim</h3>
            <p className="text-sm text-[var(--muted)]">Marketing Expert</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}