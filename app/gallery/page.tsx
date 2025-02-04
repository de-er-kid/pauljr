"use client"
import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryItem {
  src: string
  category: string
  title: string
  description?: string
}

interface LightboxProps {
  image: GalleryItem
  images: GalleryItem[]
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  currentIndex: number
}

interface SlideVariants {
  enter: (direction: number) => {
    x: number
    opacity: number
  }
  center: {
    zIndex: number
    x: number
    opacity: number
  }
  exit: (direction: number) => {
    zIndex: number
    x: number
    opacity: number
  }
}

const categories: string[] = ["All", "Family", "Concert/Festival", "Weddings", "Engagement", "Maternity", "Newborn"]

const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/listing/Concert-Festival/event (6).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (1).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (2).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (3).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (4).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (5).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (8).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (9).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (10).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (11).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  // generate 12 - 25 images object for Concert/Festival
  {
    src: "/gallery/listing/Concert-Festival/event (12).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (13).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (14).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (15).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (16).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (17).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (18).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (19).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (20).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  
  {
    src: "/gallery/listing/Concert-Festival/event (21).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Concert-Festival/event (22).webp",
    category: "Concert/Festival",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  
    {
      src: "/gallery/listing/Concert-Festival/event (23).webp",
      category: "Concert/Festival",
      title: "Lorum Ipsum Dolor Sit Amet",
      description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
    },
  
    {
      src: "/gallery/listing/Concert-Festival/event (24).webp",
      category: "Concert/Festival",
      title: "Lorum Ipsum Dolor Sit Amet",
      description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
    },
  
    {
      src: "/gallery/listing/Concert-Festival/event (25).webp",
      category: "Concert/Festival",
      title: "Lorum Ipsum Dolor Sit Amet",
      description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
    },


  // generate 13 wedding image objects
  {
    src: "/gallery/listing/Weddings/wedding (1).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Weddings/wedding (2).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Weddings/wedding (3).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Weddings/wedding (4).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Weddings/wedding (5).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Weddings/wedding (6).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Weddings/wedding (7).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Weddings/wedding (8).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Weddings/wedding (9).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Weddings/wedding (10).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },

  {
    src: "/gallery/listing/Weddings/wedding (11).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Weddings/wedding (12).webp",
    category: "Weddings",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  
    {
      src: "/gallery/listing/Weddings/wedding (13).webp",
      category: "Weddings",
      title: "Lorum Ipsum Dolor Sit Amet",
      description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
    },


  // family generate 8 images object
  {
    src: "/gallery/listing/Family/family (1).webp",
    category: "Family",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Family/family (2).webp",
    category: "Family",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Family/family (3).webp",
    category: "Family",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Family/family (4).webp",
    category: "Family",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Family/family (5).webp",
    category: "Family",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Family/family (6).webp",
    category: "Family",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Family/family (7).webp",
    category: "Family",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Family/family (8).webp",
    category: "Family",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  // 6 newborn images object
  {
    src: "/gallery/listing/Newborn/newborn (1).webp",
    category: "Newborn",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Newborn/newborn (2).webp",
    category: "Newborn",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Newborn/newborn (3).webp",
    category: "Newborn",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Newborn/newborn (4).webp",
    category: "Newborn",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Newborn/newborn (5).webp",
    category: "Newborn",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Newborn/newborn (6).webp",
    category: "Newborn",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  // 12 maternity images object
  {
    src: "/gallery/listing/Maternity/maternity (1).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (2).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (3).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (4).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (5).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (6).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (7).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (8).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (9).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (10).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (11).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Maternity/maternity (12).webp",
    category: "Maternity",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  // 2 engagement images object
  {
    src: "/gallery/listing/Engagement/engagement (1).webp",
    category: "Engagement",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    src: "/gallery/listing/Engagement/engagement (2).webp",
    category: "Engagement",
    title: "Lorum Ipsum Dolor Sit Amet",
    description: "Lorum ipsum dolor sit amet, consectetur adipiscing elit."
  },
  // Add more items for each category
]

const slideVariants: SlideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

const Lightbox: React.FC<LightboxProps> = ({ image, images, onClose, onNext, onPrevious, currentIndex }) => {
  const [direction, setDirection] = React.useState<number>(0)
  const hasNext = currentIndex < images.length - 1
  const hasPrevious = currentIndex > 0

  React.useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && hasNext) {
        setDirection(1)
        onNext()
      }
      if (e.key === 'ArrowLeft' && hasPrevious) {
        setDirection(-1)
        onPrevious()
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious])

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (hasNext) {
      setDirection(1)
      onNext()
    }
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (hasPrevious) {
      setDirection(-1)
      onPrevious()
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      
      {hasPrevious && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50"
          onClick={handlePrevious}
        >
          <ChevronLeft size={40} />
        </button>
      )}

      {hasNext && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 p-2 z-50"
          onClick={handleNext}
        >
          <ChevronRight size={40} />
        </button>
      )}

      <div className="relative max-w-6xl max-h-[90vh] w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                <h3 className="text-xl font-playfair">{image.title}</h3>
                {image.description && (
                  <p className="text-sm mt-1">{image.description}</p>
                )}
                <p className="text-sm mt-2 text-gray-300">
                  {currentIndex + 1} of {images.length}
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default function GalleryPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All")
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null)
  
  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  )

  const handlePrevious = () => {
    setSelectedImageIndex((current) => 
      current !== null && current > 0 ? current - 1 : current
    )
  }

  const handleNext = () => {
    setSelectedImageIndex((current) => 
      current !== null && current < filteredItems.length - 1 ? current + 1 : current
    )
  }

  return (
    <>
      <PageHeader
        title="Gallery"
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
        backgroundImage="/banner-bg.webp?height=800&width=1200"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full font-cormorant transition-colors duration-300 ease",
                selectedCategory === category
                  ? "bg-primary text-white hover:bg-primary hover:text-white active:bg-primary active:text-white"
                  : "bg-secondary text-primary hover:bg-primary hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-white font-playfair text-xl">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {selectedImageIndex !== null && (
            <Lightbox
              image={filteredItems[selectedImageIndex]}
              images={filteredItems}
              currentIndex={selectedImageIndex}
              onClose={() => setSelectedImageIndex(null)}
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}