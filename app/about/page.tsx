import Image from "next/image";
import { PageHeader } from "@/components/page-header";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Me"
        breadcrumbs={[{ label: "About", href: "/about" }]}
        backgroundImage="/banner-bg.webp?height=800&width=1200"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl mb-6 capitalize">
              Hi, I’m Amal Basil Paul—your visual storyteller.
            </h2>
            <div className="space-y-6 font-cormorant text-lg">
              <p>
                Based in Listowel, Ontario, but available to travel throughout
                Canada, I’m here to capture the moments that matter most to you.
              </p>
              <p>
                Every session with me is more than just taking pictures—it’s
                about creating a visual narrative where each frame feels
                authentic, timeless, and true to you. From helping you choose
                the perfect location and wardrobe to offering gentle guidance on
                posing, I’ll ensure you feel comfortable and confident, with
                each shot reflecting your unique essence.
              </p>
              <p>
                My goal? To blend into the background and let your story unfold
                naturally while I capture it with an artistic touch.
              </p>
              <p>
                Let’s create something unforgettable—a memorable collection of
                photos that captures both the grand and intimate moments that
                make your story uniquely yours.
              </p>
            </div>
          </div>
          <div>
            <div className="relative aspect-[5/4] rounded-lg overflow-hidden">
              <Image
                src="/about/Amal Basil Paul - pauljrphotography.webp"
                alt="Amal Basil Paul"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
