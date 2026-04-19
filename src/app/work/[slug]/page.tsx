"use client"; // Mark as client-side component

import { useParams } from "next/navigation"; // To get slug from the URL
import { projects } from "@/src/data/projects"; // Import project data
import Link from "next/link";
import Navbar from "@/src/components/layout/navbar";

export default function WorkDetails() {
  const { slug } = useParams(); // Get slug from the URL

  // Find the project based on the slug
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <p>Project not found!</p>; // Handle case if project is not found
  }

  const { title, subTitle, longDescription, thumbnailUrl, videoUrl, youtubeTrailer, externalLink, galleryImages } = project;

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Navbar Section */}
      <Navbar/>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Two-Column Layout: Video and Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Video Section */}
          <div className="relative bg-gray-100 rounded-lg overflow-hidden">
            <video className="w-full h-auto" controls autoPlay muted loop preload="metadata">
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Title and Description Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-[var(--text)]">{title}</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">{subTitle}</p>

            {/* Link Button */}
            {externalLink && (
              <div className="mt-8">
                <Link
                  href={externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--royal-blue)] via-[var(--bright-blue)] to-[var(--sky-blue)] text-[var(--bg)] rounded-xl hover:bg-[var(--muted)]"
                >
                  Visit Product
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-[var(--text)]">About This Project</h3>
          <p className="mt-4 text-lg text-[var(--muted)]">{longDescription}</p>
        </div>

        {/* Trailer Section (YouTube Embed) */}
        {youtubeTrailer && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[var(--text)]">Watch the Trailer</h3>
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeTrailer}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mt-6 rounded-lg"
            ></iframe>
          </div>
        )}

        {/* Gallery Section */}
        {galleryImages && galleryImages.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-[var(--text)]">Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative group">
                  <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-full rounded-lg shadow-lg object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-90" />
                  <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/#works" className="text-[var(--muted)] hover:text-[var(--text)]">
            ← Back to Works
          </Link>
        </div>
      </div>
    </main>
  );
}