import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { PageHeader } from "@/components/page-header"

const photoPackages = [
  {
    title: "Concert/Festival",
    price: "$300",
    duration: "up to 3hr",
    features: ["50-100 edited photos", "Delivery within 7 days", "Online delivery"],
  },
  {
    title: "Wedding Package 1",
    price: "$1,099",
    duration: "5hr to 6hr",
    features: [
      "200-250 edited photos",
      "Delivery within 10 days",
      "Online delivery",
      "Complimentary engagement/pre-wedding session up to 2hr",
    ],
  },
  {
    title: "Wedding Package 2",
    price: "$1,599",
    duration: "8hr to 10hr",
    features: [
      "400-500 edited photos",
      "Delivery within 10 days",
      "Online delivery",
      "Complimentary engagement/pre-wedding session up to 2hr",
    ],
  },
  {
    title: "Engagement/Pre-wedding",
    price: "$200",
    duration: "up to 2hr",
    features: ["20-30 edited photos", "Delivery within 7 days", "Online delivery"],
  },
  {
    title: "Family Package",
    price: "$150",
    duration: "30min",
    features: ["10-20 edited photos", "Delivery within 7 days", "Online delivery"],
  },
  {
    title: "Maternity",
    price: "$200",
    duration: "up to 2hr",
    features: ["20-30 edited photos", "Delivery within 7 days", "Online delivery"],
  },
  {
    title: "Newborn Package 1",
    price: "$300",
    duration: "up to 3hr",
    features: ["15-20 edited photos", "Delivery within 7 days", "Online delivery"],
  },
  {
    title: "Newborn Package 2",
    price: "$450",
    duration: "up to 3hr",
    features: ["15-20 edited photos", "With props", "Delivery within 7 days", "Online delivery"],
  },
]

const hybridPackages = [
  {
    title: "Concert/Festival Hybrid",
    price: "$600",
    duration: "up to 3hr",
    features: [
      "50-100 edited photos",
      "One 30sec reel",
      "Photo Delivery within 7 days",
      "Video Delivery within 14 days",
      "Online delivery",
      "Optional: Aftermovie 3-5 mins ($500)",
    ],
  },
  {
    title: "Wedding Hybrid Package 1",
    price: "$1,599",
    duration: "5hr to 6hr",
    features: [
      "200-250 edited photos",
      "3-5min highlight film",
      "Photo Delivery within 10 days",
      "Video Delivery within 20 days",
      "Online delivery",
      "Complimentary engagement/pre-wedding session up to 2hr",
    ],
  },
  {
    title: "Wedding Hybrid Package 2",
    price: "$2,499",
    duration: "8hr to 10hr",
    features: [
      "400-500 edited photos",
      "One 30sec reel",
      "3-5min highlight film",
      "Photo Delivery within 10 days",
      "Video Delivery within 20 days",
      "Online delivery",
      "Complimentary engagement/pre-wedding session up to 2hr",
    ],
  },
  {
    title: "Engagement/Pre-wedding Hybrid",
    price: "$350",
    duration: "up to 2hr",
    features: ["20-30 edited photos", "One 30sec reel", "Delivery within 7 days", "Online delivery"],
  },
  {
    title: "Family Hybrid",
    price: "$250",
    duration: "30min",
    features: ["10-20 edited photos", "One 30sec reel", "Delivery within 7 days", "Online delivery"],
  },
  {
    title: "Maternity Hybrid",
    price: "$350",
    duration: "up to 2hr",
    features: ["20-30 edited photos", "One 30sec reel", "Delivery within 7 days", "Online delivery"],
  },
]

export default function InvestmentPage() {
  return (
    <>
      <PageHeader
        title="Investment"
        breadcrumbs={[{ label: "Investment", href: "/investment" }]}
        backgroundImage="/banner-bg.jpg?height=800&width=1200"
      />
      <div className="container mx-auto px-4 py-16">
        <div className="space-y-16">
          <section>
            <h2 className="font-playfair text-3xl text-center mb-8">Photo Packages</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoPackages.map((pkg, index) => (
                <Card key={index} className="relative overflow-hidden border-none shadow-package cursor-pointer hover:scale-95 hover:shadow-packageHover transition-all duration-300 ease">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl">{pkg.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-4xl font-playfair">{pkg.price}</span>
                      <span className="font-cormorant text-muted-foreground"> / {pkg.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-amber-950 flex-shrink-0" />
                          <span className="font-cormorant">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-playfair text-3xl text-center mb-8">Hybrid Packages (Photo + Video)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hybridPackages.map((pkg, index) => (
                <Card key={index} className="relative overflow-hidden border-none shadow-package cursor-pointer hover:scale-95 hover:shadow-packageHover transition-all duration-300 ease">
                  <CardHeader>
                    <CardTitle className="font-playfair text-xl">{pkg.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-4xl font-playfair">{pkg.price}</span>
                      <span className="font-cormorant text-muted-foreground"> / {pkg.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-amber-950 flex-shrink-0" />
                          <span className="font-cormorant">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

