"use client";

import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from "next/link";
import emailjs from "emailjs-com";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; 

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");;
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    
     setStatusMessage("Sending your message...");
    setStatus("sending");
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    
     const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

 try {
      const res = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (res.status === 200) {
        setStatus("success");
        setStatusMessage("Thanks for reaching out. I’ll get back to you soon.");
      } else {
       setStatus("error");
        setStatusMessage("Something went wrong, please try again later.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Error sending message, please try again.");
    }
    setIsSubmitting(false);
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section id="contact" className="py-20 bg-(--surface)">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <h2 className="text-3xl font-bold text-(--text)">Get in Touch</h2>
            <p className="text-lg text-(--muted)">
              Have a question or want to discuss a project? I’d love to hear from you. Please fill out the form below or get in touch directly via the information provided.
            </p>

            <div className="space-y-4">
              <div>
                <strong className="text-lg text-(--text)">Email:</strong>
                <p className="text-(--muted)">contact@poly-nex.com</p>
              </div>
              <div>
                <strong className="text-lg text-(--text)">Phone:</strong>
                <p className="text-(--muted)">+1 (234) 567-8901</p>
              </div>
              <div>
                <strong className="text-lg text-(--text)">Address:</strong>
                <p className="text-(--muted)">123 PolyNex St., Suite 100, City, Country</p>
              </div>
              <div>
                <strong className="text-lg text-(--text)">Follow Us:</strong>
                <div className="flex space-x-4 mt-2 ">
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="text-(--royal-blue) hover:text-(--bright-blue)"><FaFacebookF className="text-(--royal-blue) hover:text-(--sky-blue) text-2xl" />
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="text-(--royal-blue) hover:text-(--bright-blue)"><FaTwitter className="text-(--royal-blue) hover:text-(--sky-blue) text-2xl" />
                  </Link>
                  <Link href="#"  target="_blank" rel="noopener noreferrer" className="text-(--royal-blue) hover:text-(--bright-blue)"><FaInstagram className="text-(--royal-blue) hover:text-(--sky-blue) text-2xl" />
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
                <label htmlFor="name" className="block text-sm font-medium text-(--muted)">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 bg-(--surface) focus:ring-2 focus:ring-(--royal-blue)"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-(--muted)">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 bg-(--surface) focus:ring-2 focus:ring-(--royal-blue)"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-(--muted)">Your Message</label>
                <textarea
                name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="mt-2 block w-full px-4 py-3 rounded-lg border border-gray-300 bg-(--surface) focus:ring-2 focus:ring-(--royal-blue)"
                  required
                />
              </div>

             <AnimatePresence>
        {status !== "idle" && (
          <motion.div
            className={`mt-6 flex items-start gap-3 rounded-2xl border px-4 py-4 text-sm shadow-lg transition-all duration-300
              ${status === "sending"
                ? "border-white/10 bg-(--surface) text-(--text)"
                : status === "success"
                ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-300"
                : "border-red-500/20 bg-red-500/10 text-red-300"
              }`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mt-0.5 shrink-0">
              {status === "sending" && <Loader2 className="h-5 w-5 animate-spin text-(--brigth-blue)"/>}
              {status === "success" && <CheckCircle2 className="h-5 w-5 text-emerald-400" />}
              {status === "error" && <AlertCircle className="h-5 w-5 text-red-400" />}
            </div>

            <div>
              <p className="font-semibold">
                {status === "sending" && "Sending message..."}
                {status === "success" && "Message sent successfully!"}
                {status === "error" && "Failed to send message"}
              </p>
              <p className="mt-1 opacity-90">{statusMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

              <div className="mt-6 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-block px-8 py-3 bg-linear-to-r from-(--royal-blue) via-(--bright-blue) to-(--sky-blue) text-(--bg) rounded-xl hover:scale-105 transition duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}