"use client";

import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or store in a database)
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="py-20 bg-(--surface)">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-3xl font-bold text-[var(--text)]">Get in Touch</h2>
            <p className="text-lg text-[var(--muted)]">
              Have a question or want to discuss a project? I’d love to hear from you. Please fill out the form below or get in touch directly via the information provided.
            </p>

            <div className="space-y-4">
              <div>
                <strong className="text-lg text-[var(--text)]">Email:</strong>
                <p className="text-[var(--muted)]">contact@poly-nex.com</p>
              </div>
              <div>
                <strong className="text-lg text-[var(--text)]">Phone:</strong>
                <p className="text-[var(--muted)]">+1 (234) 567-8901</p>
              </div>
              <div>
                <strong className="text-lg text-[var(--text)]">Address:</strong>
                <p className="text-[var(--muted)]">123 PolyNex St., Suite 100, City, Country</p>
              </div>
              <div>
                <strong className="text-lg text-[var(--text)]">Follow Us:</strong>
                <div className="flex space-x-4 mt-2 ">
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="text-(--royal-blue) hover:text-(--bright-blue)"><FaFacebookF className="text-[var(--royal-blue)] hover:text-[var(--sky-blue)] text-2xl" />
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="text-[var(--royal-blue)] hover:text-[var(--bright-blue)]"><FaTwitter className="text-[var(--royal-blue)] hover:text-[var(--sky-blue)] text-2xl" />
                  </Link>
                  <Link href="#"  target="_blank" rel="noopener noreferrer" className="text-(--royal-blue) hover:text-(--bright-blue)"><FaInstagram className="text-[var(--royal-blue)] hover:text-[var(--sky-blue)] text-2xl" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-(--surface)] p-8 rounded-xl shadow-2xl border border-white/10 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-(--text)] mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--muted)]">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 bg-[var(--surface)] focus:ring-2 focus:ring-[var(--royal-blue)]"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--muted)]">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 bg-[var(--surface)] focus:ring-2 focus:ring-[var(--royal-blue)]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--muted)]">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 bg-[var(--surface)] focus:ring-2 focus:ring-[var(--royal-blue)]"
                  required
                />
              </div>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-[var(--royal-blue)] via-[var(--bright-blue)] to-[var(--sky-blue)] text-[var(--bg)] rounded-xl hover:scale-105 transition duration-300"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}