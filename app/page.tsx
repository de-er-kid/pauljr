import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSlider } from "@/components/hero-slider"
import { InstagramFeed } from "@/components/instagram-feed"
import { ModernTestimonials } from "@/components/modern-testimonials"

const services = [
  { title: "Weddings", image: "/gallery/listing/Weddings/wedding (10).webp?height=600&width=800" },
  { title: "Engagement", image: "/gallery/listing/Family/family (5).webp?height=600&width=800" },
  { title: "Concert/Festival", image: "/gallery/listing/Concert-Festival/event (61).webp?height=600&width=800" },
  { title: "Family", image: "/gallery/listing/Engagement/engagement (2).webp?height=600&width=800" },
  { title: "Maternity", image: "/gallery/listing/Maternity/maternity (3).webp?height=600&width=800" },
  { title: "Newborn", image: "/gallery/listing/Newborn/newborn (4).webp?height=600&width=800" },
]

export default function Home() {
  return (
    <>
      <HeroSlider />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="relative aspect-[3/4] group overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-800 ease">
                  <h3 className="text-white font-playfair text-2xl">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/gallery/listing/Newborn/newborn (2).webp"
                alt="Capturing moments"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">Capturing Life's Precious Moments</h2>
              <p className="font-cormorant text-lg mb-6">
                Discover the secret behind capturing life's precious moments with Paul Jr photography. From weddings to
                newborns and everything in between, our one-stop photography and videography services will leave you
                breathless. Let us surprise you with our unrivaled expertise in family portraits, maternity shoots, and
                unforgettable events. Get ready to embrace surprises, laughter, and pure magic - it's time to unveil
                your story like never before! 💫✨
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">Cinematic Moments</h2>
              <p className="font-cormorant text-lg mb-6">
                Imagine your moments transformed into cinematic scenes, reminiscent of a captivating movie. From the
                subtle glances to the heartfelt exchanges, every nuance is artfully captured. Your gallery will be a
                collection of memories that transcend the ordinary – a visual symphony of emotions, meticulously
                composed for you to relive and cherish.
              </p>
            </div>
            <div className="order-1 md:order-2 relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/gallery/listing/Concert-Festival/event (38).webp?height=800&width=800"
                alt="Cinematic moments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/gallery/listing/Newborn/newborn (6).webp?height=800&width=800"
                alt="Professional photography"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl mb-6">Professional Touch</h2>
              <p className="font-cormorant text-lg mb-6">
                Capture life's beautiful moments effortlessly with a skilled lens artist who delivers unrivaled comfort
                and lightning-fast turnaround for both stunning photos and captivating videos. Elevate your visual
                narrative to new heights, backed by a professional touch that guarantees satisfaction every time. 📸✨
              </p>
            </div>
          </div>
        </div>
      </section>

      <ModernTestimonials />

      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6">Ready to Capture Your Story?</h2>
          <p className="font-cormorant text-xl mb-8">Let's create timeless memories together. Book your session now!</p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-primary border-none hover:scale-95 transition-all duration-300 ease"
          >
            <Link href="/contact">Book Your Session</Link>
          </Button>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Latest from Instagram</h2>
          <InstagramFeed username="pauljrstudios" />
        </div>
      </section>
    </>
  )
}

