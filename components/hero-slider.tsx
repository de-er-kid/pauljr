"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fetchSlides, Slide } from "../lib/api"
import { HeroSkeleton } from "@/components/HeroSkeleton"

export function HeroSlider() {
  const [slides, setSlides] = React.useState<Slide[]>([])
  const [current, setCurrent] = React.useState(0)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    async function getSlides() {
      try {
        const slidesData = await fetchSlides()
        setSlides(slidesData)
      } catch (error) {
        setError('Failed to fetch slides. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    getSlides()
  }, [])

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  if (loading) {
    return <HeroSkeleton />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="text-center text-white max-w-3xl mx-auto px-4">
              <h1 className="font-playfair text-5xl md:text-7xl font-light mb-6">{slide.title}</h1>
              <p className="font-cormorant text-xl md:text-2xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10 hover:bg-white/20 transition duration-300 ease"
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10 hover:bg-white/20 transition duration-300 ease"
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  )
}