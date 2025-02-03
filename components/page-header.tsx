import Link from "next/link"
import { ChevronRight } from "lucide-react"
import React from "react"

interface PageHeaderProps {
  title: string
  breadcrumbs: { label: string; href: string }[]
  backgroundImage: string
}

export function PageHeader({ title, breadcrumbs, backgroundImage }: PageHeaderProps) {
  return (
    <div
      className="relative h-[40vh] min-h-[300px] flex items-end justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-white text-center pb-12">
        <h1 className="font-playfair text-4xl md:text-5xl mb-4">{title}</h1>
        <nav className="flex justify-center items-center space-x-2 font-cormorant">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.href}>
              <ChevronRight className="h-4 w-4" />
              {index === breadcrumbs.length - 1 ? (
                <span>{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className="hover:text-primary transition-colors">
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  )
}

