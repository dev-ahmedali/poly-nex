"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[var(--surface)] py-10 text-[var(--text)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Logo and About */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--royal-blue)]">PolyNex</h2>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Discover cutting-edge motion design with Blender Geometry Nodes. Explore procedural animations and dynamic visual effects.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--royal-blue)]">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li>
                <Link href="/#about" className="hover:text-[var(--bright-blue)]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#works" className="hover:text-[var(--bright-blue)]">
                  Works
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[var(--bright-blue)]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[var(--bright-blue)]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-[var(--bright-blue)]">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--royal-blue)]">Follow Us</h3>
            <div className="mt-4 flex gap-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--bright-blue)]">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--bright-blue)]">
                Instagram
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--bright-blue)]">
                GitHub
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--royal-blue)]">Contact</h3>
            <p className="mt-4 text-sm text-[var(--muted)]">
              Email us at: <a href="mailto:contact@polynex.com" className="text-[var(--bright-blue)] hover:underline">contact@polynex.com</a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm text-[var(--muted)]"
          >
            © 2026 PolyNex. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}