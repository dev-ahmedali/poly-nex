"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  // Handle the toggling of questions
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (expanded === index) {
      setExpanded(null); // Close if clicked again
    } else {
      setExpanded(index); // Open if clicked
    }
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-(--text) sm:text-4xl lg:text-5xl"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-(--muted) text-lg sm:text-xl"
        >
          Find answers to some common questions about our services and products.
        </motion.p>

        {/* FAQ List */}
        <div className="mt-10 space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className="bg-(--surface) rounded-lg shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div
                onClick={() => handleToggle(index)}
                className="cursor-pointer px-6 py-4 flex justify-between items-center text-(--text)"
              >
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <span className={`transform ${expanded === index ? 'rotate-180' : ''} transition-transform`}>
                  &#9660; {/* Down Arrow */}
                </span>
              </div>

              {expanded === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-(--surface)/80 text-(--muted)"
                >
                  {item.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "What is PolyNex?",
    answer: "PolyNex is a portfolio showcasing abstract, technical, and cinematic motion studies using Blender and Geometry Nodes. It focuses on procedural motion design and animation.",
  },
  {
    question: "How do I purchase the motions?",
    answer: "You can purchase our motion presets via platforms like Gumroad and Superhive. Links are available on the product pages.",
  },
  {
    question: "How can I contact support?",
    answer: "You can reach our support team by sending an email to support@polynex.com. We'll get back to you within 24 hours.",
  },
  {
    question: "Can I use these motions for commercial purposes?",
    answer: "Yes, all motions are licensed for both personal and commercial use. However, redistribution or reselling of the product itself is prohibited.",
  },
];

export default FAQ;