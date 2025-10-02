"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Instagram, MessageCircle, Heart } from "lucide-react"
import Image from "next/image"

export default function AmigurumiPortfolio() {
  const [activeSection, setActiveSection] = useState("inicio")

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const galleryItems = [
    {
      id: 1,
      title: "Conejito Primavera",
      description: "Amigurumi de conejo con detalles florales",
      image: "/cute-crochet-bunny-amigurumi-pastel-colors.jpg",
    },
    {
      id: 2,
      title: "Osito Dormilón",
      description: "Tierno osito tejido a mano",
      image: "/cute-crochet-bear-amigurumi-sleeping.jpg",
    },
    {
      id: 3,
      title: "Gatito Juguetón",
      description: "Gato amigurumi con accesorios",
      image: "/cute-crochet-cat-amigurumi-playful.jpg",
    },
    {
      id: 4,
      title: "Pulpo Arcoíris",
      description: "Pulpo multicolor tejido",
      image: "/cute-crochet-octopus-amigurumi-rainbow.jpg",
    },
    {
      id: 5,
      title: "Dinosaurio Bebé",
      description: "Pequeño dinosaurio adorable",
      image: "/cute-crochet-dinosaur-amigurumi-baby.jpg",
    },
    {
      id: 6,
      title: "Unicornio Mágico",
      description: "Unicornio con detalles brillantes",
      image: "/cute-crochet-unicorn-amigurumi-magical.jpg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary fill-current" />
            </div>
            <span className="text-xl font-semibold text-primary">Gerals Amigurumis</span>
          </div>

          <div className="hidden md:flex gap-2">
            <Button
              variant={activeSection === "inicio" ? "default" : "ghost"}
              onClick={() => scrollToSection("inicio")}
              className="rounded-full"
            >
              Inicio
            </Button>
            <Button
              variant={activeSection === "galeria" ? "default" : "ghost"}
              onClick={() => scrollToSection("galeria")}
              className="rounded-full"
            >
              Mira nuestro trabajo
            </Button>
            <Button variant="secondary" onClick={() => scrollToSection("contacto")} className="rounded-full">
              Contáctame
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <div className="w-32 h-32 mx-auto rounded-full bg-secondary/20 flex items-center justify-center mb-6">
                <Image
                  src="/Logo.png"
                  alt="Logo Gerals Amigurumis"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-secondary text-balance leading-tight">
              Dale vida aquí a el amigo de tus sueños
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-pretty">
              Creaciones únicas tejidas a mano con amor y dedicación. Cada amigurumi cuenta su propia historia.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection("galeria")} className="rounded-full">
                Ver Galería
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contacto")}
                className="rounded-full border-2 border-secondary text-primary hover:bg-secondary hover:text-primary"
              >
                Hacer un Pedido
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Nuestro Trabajo</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Explora nuestra colección de amigurumis únicos, cada uno tejido con cariño
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden rounded-3xl border-2 border-border hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-card"
              >
                <div className="aspect-square relative overflow-hidden bg-muted">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-secondary">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="rounded-3xl border-2 border-secondary/30 bg-card p-8 md:p-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Sobre Mis Creaciones</h2>
              <p className="text-lg text-foreground leading-relaxed">
                Cada amigurumi es una pieza única tejida a mano. Me especializo en crear
                personajes adorables que traen alegría y compañía. Desde animales tiernos hasta personajes fantásticos,
                cada creación está hecha con amor y atención a los detalles.
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <div className="bg-secondary/30 rounded-full px-6 py-3">
                  <span className="text-primary font-semibold">100% Hecho a Mano</span>
                </div>
                <div className="bg-secondary/30 rounded-full px-6 py-3">
                  <span className="text-primary font-semibold">Atencion al detalle</span>
                </div>
                <div className="bg-secondary/30 rounded-full px-6 py-3">
                  <span className="text-primary font-semibold">Diseños Únicos</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">Contáctame</h2>
            <p className="text-lg text-foreground/70">
              ¿Tienes alguna pregunta o quieres hacer un pedido personalizado? ¡Escríbeme!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="rounded-3xl border-2 border-border hover:border-secondary hover:shadow-xl transition-all duration-300 p-8 text-center bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Email</h3>
              <p className="text-foreground/70 mb-4">Envíame un correo</p>
              <a href="mailto:gerals@amigurumis.com" className="text-primary hover:text-primary/80 font-medium">
                gerals@amigurumis.com
              </a>
            </Card>

            <Card className="rounded-3xl border-2 border-border hover:border-secondary hover:shadow-xl transition-all duration-300 p-8 text-center bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">Instagram</h3>
              <p className="text-foreground/70 mb-4">Sígueme en Instagram</p>
              <a
                href="https://instagram.com/gerals.amigurumis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium"
              >
                @gerals.amigurumis
              </a>
            </Card>

            <Card className="rounded-3xl border-2 border-border hover:border-secondary hover:shadow-xl transition-all duration-300 p-8 text-center bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">WhatsApp</h3>
              <p className="text-foreground/70 mb-4">Chatea conmigo</p>
              <a
                href="https://wa.me/3059053260"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-medium"
              >
                +57 3059053260
              </a>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="rounded-3xl border-2 border-secondary bg-secondary/5 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-secondary mb-4">Sugerencias y Pedidos Personalizados</h3>
              <p className="text-foreground mb-6 leading-relaxed">
                ¿Tienes una idea especial en mente? Me encanta crear amigurumis personalizados. Cuéntame sobre tu
                personaje soñado y lo haré realidad con mis manos.
              </p>
              <Button size="lg" variant="secondary" className="rounded-full">
                Hacer una Sugerencia
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary fill-current" />
              </div>
              <span className="text-lg font-semibold text-primary">Gerals Amigurumis</span>
            </div>

            <p className="text-foreground/60 text-center">© 2025 Gerals Amigurumis. Tejido con amor y dedicación.</p>

            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary/30 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-secondary" />
              </a>
              <a
                href="mailto:gerals@amigurumis.com"
                className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary/30 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-secondary" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary/30 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-secondary" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
