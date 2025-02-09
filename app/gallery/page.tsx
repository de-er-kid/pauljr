"use client"
import * as React from "react"
import { Suspense } from "react"
import Image from "next/image"
import { useSearchParams, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { fetchGalleryCategories, fetchGalleryItems, GalleryItem } from "../../lib/api"
import { GallerySkeleton } from "@/components/skeletons/gallery-skeleton"

interface LightboxProps {
  image: GalleryItem
  images: GalleryItem[]
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  currentIndex: number
}

interface SlideVariants {
  [key: string]: {
    x: number
    opacity: number
    zIndex?: number
  }
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
                {/* <h3 className="text-xl font-playfair">{image.title}</h3> */}
                {image.description && (
                  <p className="text-sm mt-1 hidden">{image.description}</p>
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

function GalleryContent(): JSX.Element {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')
  
  const [categories, setCategories] = React.useState<string[]>([]);
  const [galleryItems, setGalleryItems] = React.useState<GalleryItem[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    async function getCategoriesAndItems() {
      try {
        const [categoriesData, galleryItemsData] = await Promise.all([
          fetchGalleryCategories(),
          fetchGalleryItems()
        ]);
        setCategories(categoriesData);
        setGalleryItems(galleryItemsData);
      } catch (error) {
        setError('Failed to fetch gallery data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    getCategoriesAndItems();
  }, []);

  const selectedCategory = categories.includes(categoryParam || "") 
    ? categoryParam || "All"
    : "All"
  
  const [selectedImageIndex, setSelectedImageIndex] = React.useState<number | null>(null)
  
  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === "All" || item.category === selectedCategory
  )

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams)
    if (category !== "All") {
      params.set('category', category)
    } else {
      params.delete('category')
    }
    router.push(`/gallery${params.toString() ? `?${params.toString()}` : ''}`)
  }

  return (
    <>
      <PageHeader
        title="Gallery"
        breadcrumbs={[
          { label: "Gallery", href: "/gallery" },
          ...(selectedCategory !== "All" ? [{ 
            label: selectedCategory,
            href: `/gallery?category=${selectedCategory}` 
          }] : [])
        ]}
        backgroundImage="/banner-bg-gallery.webp?height=800&width=1200"
      />
      <div className="container mx-auto px-4 py-16">
        {loading ? (
          <GallerySkeleton />
        ) : (
          <>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
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
            {error ? (
              <div>{error}</div>
            ) : (
              <AnimatePresence initial={false}>
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                  layout
                >
                  {filteredItems.map((item, index) => (
                    <motion.div
                      key={item.src}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center justify-center h-full">
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
          </>
        )}

        <AnimatePresence>
          {selectedImageIndex !== null && (
            <Lightbox
              image={filteredItems[selectedImageIndex]}
              images={filteredItems}
              currentIndex={selectedImageIndex}
              onClose={() => setSelectedImageIndex(null)}
              onNext={() => setSelectedImageIndex(prev => 
                prev !== null && prev < filteredItems.length - 1 ? prev + 1 : prev
              )}
              onPrevious={() => setSelectedImageIndex(prev => 
                prev !== null && prev > 0 ? prev - 1 : prev
              )}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

// Main component with Suspense boundary
export default function GalleryPage(): JSX.Element {
  return (
    <Suspense fallback={<GallerySkeleton />}>
      <GalleryContent />
    </Suspense>
  )
}