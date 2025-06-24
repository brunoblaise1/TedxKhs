"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function SponsorshipSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const sponsorshipPackages = [
    {
      name: "Platinum",
      price: "$2,000",
      features: [
        "Logo on all event materials",
        "VIP seating for 5 guests",
        "Speaking opportunity",
        "Exhibition space",
        "Social media promotion",
        "Logo on event website",
      ],
    },
    {
      name: "Gold",
      price: "$1,000",
      features: [
        "Logo on all event materials",
        "VIP seating for 3 guests",
        "Exhibition space",
        "Social media promotion",
        "Logo on event website",
      ],
    },
    {
      name: "Silver",
      price: "$500",
      features: [
        "Logo on event materials",
        "VIP seating for 2 guests",
        "Social media mention",
        "Logo on event website",
      ],
    },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ted-red to-transparent opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Sponsorship <span className="text-ted-red">Package</span>
            </h2>
            <div className="w-20 h-1 bg-ted-red mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Support the next generation of thinkers and leaders. Your sponsorship helps make TEDx Kigali High School
              Youth possible while connecting your brand with innovation and education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sponsorshipPackages.map((pkg, index) => (
              <Card
                key={index}
                className={`bg-black/40 backdrop-blur-sm border border-white overflow-hidden transition-all duration-500 hover:border-ted-red/50 hover:shadow-[0_0_15px_rgba(230,43,30,0.15)] ${index === 0 ? "md:transform md:-translate-y-4" : ""}`}
              >
                <div className="p-6 border-b border-white">
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold text-ted-red">{pkg.price}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-ted-red flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button
                      className={
                        index === 0
                          ? "w-full bg-ted-red hover:bg-ted-red/90 text-white"
                          : "w-full bg-transparent border border-ted-red text-ted-red hover:bg-ted-red/10"
                      }
                    >
                      Become a Sponsor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">
              Custom sponsorship packages are also available. Contact us to discuss your specific needs.
            </p>
            <Button variant="outline" className="border-ted-red text-ted-red hover:bg-ted-red/10">
              Contact for Custom Package
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
