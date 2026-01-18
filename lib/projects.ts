export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  liveUrl: string
  githubUrl?: string
  image: string
  year: string
}

export const projects: Project[] = [
  {
    id: "test-app",
    title: "Plataforma de tests",
    description: "Plataforma de tests para evaluar el conocimiento de los usuarios",
    longDescription: `Empecé esta app porque quería tener una plataforma en la que pudiera subir 
    fácilmente tests para poder evaluar mis conocimientos cuando me preparaba para exámenes.[br]

    [br]Usé Claude para diseñar la interfaz y a partir de ahí fui iterando poco a poco. Era un proyecto 
    rápido y sencillo así que para guardar los tests me bastó con crear una carpeta donde iría guardando 
    los json de mis cuestionarios dentro de otras subcarpetas para organizarlos por temática o materia.[br]
    
    [br]Al final acabé añadiendo una funcionalidad para poder agregar tus propios tests como usuario de la app,
    aunque el almacenamiento no sea persistente. Aún así, estoy abierto a aceptar cualquier PR al repositorio 
    de GitHub que añada tests y materias.[br]
    
    [br]Para paliar un poco la poca eficiencia de mi sistema implementé paginación buscando que no 
    tardara demasiado en cargar.`,
    technologies: ["React", "Vite", "JavaScript"],
    liveUrl: "https://test-app.peruvianking.com",
    githubUrl: "https://github.com/PeruvianKING/test-app",
    image: "/test-app.png",
    year: "2026",
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
