"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/src/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-[var(--surface)]/75 px-4 py-3 text-[var(--text)] shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5 lg:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl ring-1 ring-white/10 sm:h-11 sm:w-11">
              <Image
                src="/images/logo.png"
                alt="Polynex logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-none">
              <p className="text-base font-semibold tracking-wide text-[var(--text)] sm:text-lg">
                Poly<span className="text-[var(--bright-blue)]">nex</span>
              </p>
              <p className="mt-1 hidden text-xs uppercase tracking-[0.22em] text-[var(--muted)] sm:block">
                Motion Portfolio
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="#works"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-[var(--royal-blue)] via-[var(--bright-blue)] to-[var(--sky-blue)] px-5 py-2.5 text-sm font-semibold text-[var(--bg)] transition hover:scale-[1.02]"
            >
              View Reel
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[var(--text)] transition hover:bg-white/10 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute left-0 right-0 top-[calc(100%+12px)] md:hidden"
              >
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-[color:var(--surface)]/95 p-3 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                  <div className="flex flex-col gap-1">
                    {NAV_LINKS.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="rounded-xl px-4 py-3 text-sm font-medium text-[var(--text)] transition hover:bg-white/5 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="#works"
                    onClick={() => setIsOpen(false)}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[var(--royal-blue)] via-[var(--bright-blue)] to-[var(--sky-blue)] px-5 py-3 text-sm font-semibold text-[var(--bg)]"
                  >
                    View Reel
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}