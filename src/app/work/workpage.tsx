"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/src/components/cards/project-card"; 
import { projects } from "@/src/data/projects"; 
import Pagination from "@/src/components/ui/pagination";
import { motion } from "framer-motion";


export default function WorksPage() {
   // Set initial state for the current page
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  
  const currentProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return projects.slice(startIndex, endIndex);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if(page < 1 || page > totalPages) return;
    setCurrentPage(page);

    const worksSection = document.getElementById("works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section id="works" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-(--text)">Featured Works</h2>
        <p className="mt-3 text-(--muted)">Explore my motion design work below.</p>

        <motion.div
          key={currentPage}
          initial={{opacity: 0, y:12}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug} // Pass the slug here
              title={project.title}
              description={project.description}
              thumbnailUrl={project.thumbnailUrl}
              videoUrl={project.videoUrl}
            />
          ))}
        </motion.div>
        
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
       
      </div>
    </section>
  );
}