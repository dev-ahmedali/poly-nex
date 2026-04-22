"use client";

import { useState } from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export default function ProjectCard({ title, description, slug, thumbnailUrl, videoUrl }:ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div
      className="relative group overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105"

      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

      
    >
      <Link href={`/work/${slug}`}>
        <div className="relative">
          {/* Container for both Thumbnail and Video */}
          <div className="w-full h-full flex justify-center items-center bg-gray-200">
            {/* Static Thumbnail Image */}
            <img
              src={thumbnailUrl}
              alt={title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-50" : "opacity-100"}`}
            />
            
            {/* Video Element: Plays on hover, hidden by default */}
            <video
              className={`absolute w-full h-full object-cover transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="mt-4 p-4 bg-(--surface) text-(--text) z-10">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-sm text-(--muted)">{description}</p>
        </div>
      </Link>
    </div>
  );
}