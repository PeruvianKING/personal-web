import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`} className="group block">
      <article className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
        {/* Image Placeholder */}
        <div className="aspect-video bg-secondary relative overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <div className="text-4xl font-bold opacity-20">{project.title.charAt(0)}</div>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-lg text-card-foreground group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" />
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <div className="mt-4 text-xs text-muted-foreground">{project.year}</div>
        </div>
      </article>
    </Link>
  )
}
