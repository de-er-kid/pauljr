"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const services = [
  {
    title: "Weddings",
    description: "Capturing your special day with elegance and style",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Portraits",
    description: "Professional portraits that tell your story",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Events",
    description: "Documenting your celebrations and special moments",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Family",
    description: "Beautiful family portraits to cherish forever",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function ServiceSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {services.map((service, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 cursor-pointer">
            <Card className="border-none shadow-none">
              <CardContent className="p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="font-playfair text-xl mt-4 mb-2">{service.title}</h3>
                <p className="font-cormorant text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

