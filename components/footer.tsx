import Link from "next/link"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Analytics } from "@vercel/analytics/react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo/Paul Jr - Word Mark (White).webp" alt="Paul Jr" className="mb-4 w-[180px] h-auto max-w-full max-h-full" />
            <p className="font-cormorant">Professional photography services in Listowel, Ontario</p>
          </div>
          <div>
            <h4 className="font-playfair text-lg mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <div className="flex flex-row gap-20 justify-normal">
              <div className="m-0 p-0">
              <Link href="/" className="block font-cormorant hover:text-white">
                Home
              </Link>
              <Link href="/about" className="block font-cormorant hover:text-white">
                About
              </Link>
              <Link href="/faq" className="block font-cormorant hover:text-white">
                FAQ
              </Link>
              </div>

              <div className="m-0 P-0">
              <Link href="/gallery" className="block font-cormorant hover:text-white">
                Gallery
              </Link>
              <Link href="/investment" className="block font-cormorant hover:text-white">
                Investment
              </Link>
              <Link href="/contact" className="block font-cormorant hover:text-white">
                Contact
              </Link>
              </div>
              </div>
            </nav>
          </div>
          <div>
            <h4 className="font-playfair text-lg mb-4">Contact</h4>
            <div className="space-y-2 font-cormorant">
              <a href="mailto:info@pauljrphotography.com" className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4" />
                info@pauljrphotography.com
              </a>
              <a href="tel:+12269785369" className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" />
                +1 226-978-5369
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-playfair text-lg mb-4">Newsletter</h4>
            <form className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800 flex items-center justify-between">
          <p className="font-cormorant text-sm">
            © {new Date().getFullYear()} Paul Jr Photography. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Analytics/>
    </footer>
  )
}
