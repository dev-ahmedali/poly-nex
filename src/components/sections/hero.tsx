"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-[var(--bg)]" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(47,141,245,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(247,197,58,0.12),transparent_20%),radial-gradient(circle_at_bottom,rgba(21,101,216,0.2),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[var(--gold)]"
          >
            Geometry Nodes Motion Design
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl lg:text-7xl"
          >
            Procedural motion crafted with
            <span className="bg-gradient-to-r from-[var(--sky-blue)] via-[var(--bright-blue)] to-[var(--royal-blue)] bg-clip-text text-transparent">
              {" "}Blender Geometry Nodes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)] sm:text-lg"
          >
            We create abstract, technical, and cinematic motion studies using Blender and Geometry Nodes.
            This portfolio showcases rendered video loops, procedural experiments, and motion-focused visual work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="#works"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--royal-blue)] via-[var(--bright-blue)] to-[var(--sky-blue)] px-6 py-3 text-sm font-semibold text-[var(--bg)] transition hover:scale-[1.02]"
            >
              Explore Works
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-[var(--text)] transition hover:bg-white/10"
            >
              Let’s Connect
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[color:var(--royal-blue)]/20 via-[color:var(--bright-blue)]/10 to-[color:var(--gold)]/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[var(--surface)] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[var(--bg)]">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/hero-poster.jpg"
              >
                <source
                  src="https://res.cloudinary.com/drcthgf8u/video/upload/v1776493078/video_1_gbxtmi.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}