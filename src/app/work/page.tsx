import ProjectCard from "@/src/components/cards/project-card";
import { projects } from "@/src/data/projects"; 

export default function WorksPage() {  // Check the data here

  return (
    <section id="works" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-semibold text-[var(--text)]">Featured Works</h2>
        <p className="mt-3 text-[var(--muted)]">Explore my motion design work below.</p>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
            <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                description={project.description}
                thumbnailUrl={project.thumbnailUrl}
                videoUrl={project.videoUrl}
            />
        ))}
    </div>
</div>
</section>
  );
}