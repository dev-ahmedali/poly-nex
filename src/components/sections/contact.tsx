"use client"; // Client-side component

import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"; // Social icons
import Link from "next/link"; // For navigation

export default function ContactPage() {
  return (
    <main className="min-h-screen text-(--bg) flex items-center justify-center py-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7x1">
        {/* Contact Form Card */}
        <div className="bg-(--surface) p-10 rounded-xl shadow-2xl">
          <h1 className="text-4xl font-bold text-center text-(--text) mb-6">Get in Touch</h1>
          <p className="text-lg text-center text-(--muted) mb-8">
            We’d love to hear from you! Please fill out the form below to reach out.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-(--muted)">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 bg-(--surface) focus:ring-2 focus:ring-(--royal-blue)"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-(--muted)">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 bg-(--surface) focus:ring-2 focus:ring-(--royal-blue)"
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-(--muted)">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 bg-(--surface) focus:ring-2 focus:ring-(--royal-blue)"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="inline-block px-8 py-3 bg-linear-to-r from-(--royal-blue) via-(--bright-blue) to-(--sky-blue) text-(--bg) rounded-xl hover:scale-105 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Social Media Links */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-(--text)">Connect with Me</h3>
            <div className="mt-6 flex justify-center space-x-6">
              <Link href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-(--royal-blue) hover:text-(--sky-blue) text-2xl" />
              </Link>
              <Link href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-(--royal-blue) hover:text-(--sky-blue) text-2xl" />
              </Link>
              <Link href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-(--royal-blue) hover:text-(--sky-blue) text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}