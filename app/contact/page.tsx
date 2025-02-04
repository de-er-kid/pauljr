"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { PageHeader } from "@/components/page-header"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
        backgroundImage="/banner-bg.webp?height=800&width=1200"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max_w_5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-playfair text-2xl mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:info@pauljrphotography.com" className="font-cormorant hover:text-primary">
                    info@pauljrphotography.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5" />
                  <a href="tel:+12269785369" className="font-cormorant hover:text-primary">
                    +1 226-978-5369
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5" />
                  <span className="font-cormorant">Listowel, Ontario</span>
                </div>
              </div>

              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.123456789!2d-80.123456!3d43.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzM0LjQiTiA4MMKwMDcnMzQuNCJX!5e0!3m2!1sen!2sca!4v1234567890"
                  width="100%"
                  height="340px"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center align-middle">
            <h2 className="font-playfair text-2xl mb-6">Send Your Message</h2>
            <p className="font-cormorant text-lg mb-6">
                if you have any enquiries feel free to keep in touch with me.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

