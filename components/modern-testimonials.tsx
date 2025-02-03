"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "John Doe",
    role: "Newlywed",
    image: "/placeholder.svg?height=200&width=200",
    text: "Paul Jr captured our wedding day beautifully. The photos are stunning and truly reflect the joy of our special day.",
  },
  {
    name: "Jane Smith",
    role: "Mother of Two",
    image: "/placeholder.svg?height=200&width=200",
    text: "I'm so glad we chose Paul Jr for our family portraits. He made everyone feel comfortable and the results are amazing!",
  },
  {
    name: "Mike Johnson",
    role: "Engaged Couple",
    image: "/placeholder.svg?height=200&width=200",
    text: "Paul's attention to detail and creativity really shine through in our engagement photos. We couldn't be happier!",
  },
  {
    name: "Sarah Williams",
    role: "New Parent",
    image: "/placeholder.svg?height=200&width=200",
    text: "The newborn photos Paul took of our little one are absolutely precious. He was so patient and gentle throughout the session.",
  },
]

export function ModernTestimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative overflow-hidden bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 transform">
        <Quote className="h-24 w-24 text-gray-200" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="relative h-32 w-32 mx-auto mb-8">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-xl font-medium italic text-gray-900 sm:text-2xl">"{testimonials[currentIndex].text}"</p>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
              <p className="text-base text-gray-600">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-10 flex justify-center space-x-4">
        <button
          onClick={prevTestimonial}
          className="rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextTestimonial}
          className="rounded-full bg-white p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}

