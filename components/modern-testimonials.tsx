// filepath: /components/ModernTestimonials.tsx
"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { fetchTestimonials, Testimonial } from '../lib/api'
import { TestimonialSkeleton } from './ui/testimonial-skeleton'

export function ModernTestimonials() {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function getTestimonials() {
      try {
        const data = await fetchTestimonials();
        setTestimonials(data);
      } catch (error) {
        setError('Failed to fetch testimonials. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    getTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <TestimonialSkeleton />;
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
  );
}