import Image from "next/image"
import { PageHeader } from "@/components/page-header"

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Me"
        breadcrumbs={[{ label: "About", href: "/about" }]}
        backgroundImage="/banner-bg.jpg?height=800&width=1200"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl mb-6">I'm Amal Basil Paul, Your Storyteller</h2>
            <div className="space-y-6 font-cormorant text-lg">
              <p>
                Based in Listowel, Ontario, and willing to travel throughout Canada, I'm here to capture your most
                precious moments.
              </p>
              <p>
                Embark on a visual journey with me, where every moment is an exquisite frame in the story of your life.
              </p>
              <p>
                With a keen eye for detail, I offer comprehensive guidance on posing, ensuring that each shot reflects
                your unique essence. As your visual storyteller, I strive to be invisible, letting your narrative unfold
                naturally while I craft each frame with an artist's touch.
              </p>
              <p>
                Let's create a cinematic masterpiece together, where your story unfolds in frames that resonate with the
                magic of a timeless film.
              </p>
            </div>
          </div>
          <div>
            <div className="relative aspect-[5/4] rounded-lg overflow-hidden">
              <Image src="/about/Amal Basil Paul - pauljrphotography.webp" alt="Amal Basil Paul" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

