import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PageHeader } from "@/components/page-header"

const faqs = [
  {
    "question": "I am unable to make this date work for me anymore due to personal issues. Can I request a refund?",
    "answer": "Please note that deposits are non-refundable regardless of any live circumstances you may encounter. I incur expenses for advertisement, studio rental for two days, round-trip flights, car rental, and accommodations."
  },
  {
    "question": "Do you travel out from Listowel for sessions?",
    "answer": "Yes, I do! My sessions include GTA, KWC, Hamilton, London, and Listowel. If you want to shoot further than that, my travel fees are totally reasonable."
  },
  {
    "question": "How long do I have to wait for edited photos?",
    "answer": "You will get a link for downloading the gallery within 10 working days."
  },
  {
    "question": "May I reschedule a booking?",
    "answer": "Yes, depending on the availability of my schedule, we can work on that."
  },
  {
    "question": "Will you help us with posing?",
    "answer": "I will fully guide you with posing, no worries at all!"
  },
  {
    "question": "Do You Give Original Images (RAW)?",
    "answer": "I don't give original images (RAW). The way I color my images is part of the magic and I consider the pictures only half-way done without being edited."
  },
  {
    "question": "Do you include studio's rent in price?",
    "answer": "I get payment only for my work. Shooting price doesn’t include studio rent. Studio rent is paid by the client."
  },
  {
    "question": "Do you help with outfits?",
    "answer": "Undoubtedly, clothing helps correctly convey the frame’s atmosphere, so before shooting, if you have no ideas about your future look, I will help you with choosing an outfit. My shooting focuses on the individuality of the characters, the delicacy of the image... So I prefer you wearing minimalistic clothes, without any patterns, please keep this in mind before choosing your look. But this is not the case with floral dresses or other dresses with patterns."
  },
  {
    "question": "Do we have the printing rights to our photos?",
    "answer": "Of course! We take these photos for you and we want you to enjoy them on your walls or to use as thank you cards after the wedding."
  },
  {
    "question": "How will we receive our photos?",
    "answer": "Your photos will be returned through an online gallery. Here you will be able to download the web and print sized images to use however you wish."
  }
]

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
        backgroundImage="/banner-bg.webp?height=800&width=1200"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max_w_3xl mx-auto">
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
        </div>
      </div>
    </>
  )
}

