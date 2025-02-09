"use client"

import * as React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PageHeader } from "@/components/page-header"
import { fetchFAQs, FAQ } from "../../lib/api"
import { FAQSkeleton } from "@/components/skeletons/faqs-skeleton"

export default function FAQPage() {
  const [faqs, setFaqs] = React.useState<FAQ[]>([])
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)

  React.useEffect(() => {
    async function getFAQs() {
      try {
        const faqsData = await fetchFAQs()
        setFaqs(faqsData)
      } catch (error) {
        setError('Failed to fetch FAQs. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    getFAQs()
  }, [])

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
        backgroundImage="/banner-bg.webp?height=800&width=1200"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max_w_3xl mx-auto">
          {loading ? (
            <FAQSkeleton />
          ) : error ? (
            <div>{error}</div>
          ) : (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                  <AccordionTrigger className="font-playfair text-lg px-4 py-2 hover:bg-gray-50 hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-cormorant text-lg px-4 py-2">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </>
  )
}