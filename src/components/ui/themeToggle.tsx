"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Check the initial theme preference from localStorage or use system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDark(storedTheme === "dark");
    } else {
      // Default to system preference if no theme is stored
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Store the theme preference in localStorage
      document.documentElement.setAttribute("data-theme", newTheme); // Apply the theme
      return !prev;
    });
  };

  // Set initial theme when the component is mounted
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-xl text-(--muted) bg-(--surface) hover:bg-(--royal-blue) transition"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <span role="img" aria-label="Light Mode">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="Dark Mode">
          🌙
        </span>
      )}
    </button>
  );
}