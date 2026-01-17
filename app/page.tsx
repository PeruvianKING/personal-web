import Image from "next/image"
import { Github } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { CopyEmailButton } from "@/components/copy-email-button"
import { projects } from "@/lib/projects"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner with Gradient */}
      <header className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/50 to-accent/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative px-6 md:px-12 lg:px-20 pt-20 pb-24">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Picture */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-4 ring-border/50 ring-offset-4 ring-offset-background">
                <Image
                  src="/riku.webp"
                  alt="Profile picture"
                  width={176}
                  height={176}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-accent/20 -z-10" />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
                PeruvianKING
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-xl leading-relaxed">
                <span className="italic text-foreground/80">Trasteando con tecnologías.</span>{" "}
                Esta es mi página personal para subir los distintos proyectos que vaya haciendo.
              </p>
              <div className="flex gap-4 mt-6 justify-center md:justify-start">
                <a
                  href="https://github.com/PeruvianKING"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-secondary hover:bg-secondary/80 text-foreground rounded-md transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <CopyEmailButton email="peruvianking@proton.me" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </header>

      <main className="px-6 md:px-12 lg:px-20 py-12">

        {/* Projects Section */}
        <section id="projects" className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
              Mis Proyectos
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} PeruvianKING. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="mailto:peruvianking@proton.me"
                className="hover:text-foreground transition-colors"
              >
                Email
              </a>
              <a
                href="https://github.com/PeruvianKING"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
