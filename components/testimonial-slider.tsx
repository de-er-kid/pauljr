"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    image: "/placeholder.svg?height=100&width=100",
    text: "Paul Jr captured our wedding day beautifully. The photos are stunning and truly reflect the joy of our special day.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    image: "/placeholder.svg?height=100&width=100",
    text: "I'm so glad we chose Paul Jr for our family portraits. He made everyone feel comfortable and the results are amazing!",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    image: "/placeholder.svg?height=100&width=100",
    text: "Paul's attention to detail and creativity really shine through in our engagement photos. We couldn't be happier!",
    rating: 5,
  },
  {
    name: "Sarah Williams",
    image: "/placeholder.svg?height=100&width=100",
    text: "The newborn photos Paul took of our little one are absolutely precious. He was so patient and gentle throughout the session.",
    rating: 5,
  },
]

export function TestimonialSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-playfair text-lg">{testimonial.name}</h3>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-cormorant text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <CarouselPrevious className="relative mr-2" />
        <CarouselNext className="relative ml-2" />
      </div>
    </Carousel>
  )
}

