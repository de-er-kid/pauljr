"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden" // Import VisuallyHidden
import { DialogTitle } from "@radix-ui/react-dialog"  // Import DialogTitle

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/investment", label: "Investment" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false) // State to control the Sheet visibility

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsOpen(false) // Close the menu when a link is clicked
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <div className="relative w-[134px] h-[42px] transition-all duration-300">
              <Image
                src={isScrolled ? "/logo/Paul Jr - Word Mark (Black).png" : "/logo/Paul Jr - Word Mark (White).png"}
                alt="Paul Jr Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-8 ml-auto">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-lg font-cormorant tracking-wide transition-colors hover:text-primary uppercase",
                  isScrolled ? "text-gray-900" : "text-white",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <DialogTitle>Mobile Navigation Menu</DialogTitle> {/* Add DialogTitle for accessibility */}
              <nav className="flex flex-col space-y-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="text-lg font-cormorant uppercase"
                    onClick={handleLinkClick} // Close menu on link click
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
