import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Datos de ejemplo extendidos para la galería completa
const fullGalleryItems = [
  { id: 1, title: "Baymax", description: "Amigurumi de Big Hero 6", image: "/foto1.jpg" },
  { id: 2, title: "Snoopy", description: "Tierno muñeco de SNOOPY", image: "/foto2.jpg" },
  { id: 3, title: "Pajarito", description: "Pajarito tierno y regordete", image: "/foto3.jpg" },
  { id: 4, title: "Bluey", description: "Muñeco basado en Bluey", image: "/foto12.jpg" },
  { id: 5, title: "Korn", description: "Muñeco basado en álbum de KORN", image: "/foto5.jpg" },
  { id: 6, title: "Flor Spiderman", description: "Rosa con detalle de Spiderman", image: "/foto6.jpg" },
  // Aquí puedes agregar más fotos (asegúrate de tener las imágenes en la carpeta public)
  { id: 7, title: "Abejita", description: "Hermosa abejita regordete", image: "/abejita.jpg" },
  { id: 8, title: "Hello Kitty", description: "Muñequito mediando de Hello kitty", image: "/HelloKitty.jpg" },
  { id: 9, title: "Bonnie", description: "Chibi Bonnie de FNAF", image: "/bonniebolita.jpg" },
  { id: 10, title: "Dino Bebé", description: "Dinosaurio azul amigable", image: "/dinosaurio2.jpg" },
  { id: 11, title: "Onepice cat", description: "Tierno gato luffy de one piece", image: "/gatitoonepice.jpg" },
  { id: 12, title: "Batman", description: "Figura mediana de batman", image: "/batman.jpg" },
]

export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header simple para la galería */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border p-4">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" passHref>
            <Button variant="ghost" className="gap-2 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver al Inicio
            </Button>
          </Link>
          <div className="flex items-center gap-2 font-semibold text-secondary">
            <Heart className="w-5 h-5 fill-current" />
            <span>Galería Completa</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl py-12 px-4">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary">
            Todas Nuestras Creaciones
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Aquí puedes ver con detalle cada uno de los proyectos que hemos realizado con amor y dedicación.
          </p>
        </div>

        {/* Grid de la galería */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fullGalleryItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden rounded-2xl border-2 border-border/50 hover:border-secondary/50 hover:shadow-xl transition-all duration-300 bg-card"
            >
              <div className="aspect-square relative overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-secondary mb-1">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}