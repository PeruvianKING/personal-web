import Image from "next/image"
import { NavigationMenu } from "@/components/ui/navigation-menu"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { projects, getProjectById } from "@/lib/projects"
import { Button } from "@/components/ui/button"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-4xl mx-auto pt-12">
          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al inicio</span>
          </Link>

          {/* Project Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span>{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>Proyecto</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground mt-4">{project.description}</p>
          </header>

          {/* Project Image Placeholder */}
          <div className="aspect-video bg-card border border-border rounded-xl overflow-hidden mb-12">
            {project.image ? (
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <div className="text-6xl font-bold opacity-10">{project.title.charAt(0)}</div>
                  <p className="text-sm mt-2">Vista previa del proyecto</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Ver sitio web
              </a>
            </Button>
            {project.githubUrl && (
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Ver código fuente
                </a>
              </Button>
            )}
          </div>

          {/* Project Details */}
          <section className="mb-12">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Sobre el Proyecto
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              {project.longDescription.split('[br]').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < project.longDescription.split('[br]').length - 1 && <br />}
                </span>
              ))}
            </p>
          </section>

          {/* Technologies */}
          <section className="mb-12">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
              Tecnologías Utilizadas
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Navigation to Other Projects */}
          <section className="border-t border-border pt-12">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">
              Otros Proyectos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 2)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/project/${p.id}`}
                    className="group p-4 rounded-lg bg-card border border-border hover:border-muted-foreground/50 transition-colors"
                  >
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.description}</p>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
