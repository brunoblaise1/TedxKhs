"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"

export function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const partners = [
    { name: "Kigali High School", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Ministry of Education", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Rwanda ICT Chamber", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Bank of Kigali", logo: "/placeholder.svg?height=100&width=200" },
    { name: "MTN Rwanda", logo: "/placeholder.svg?height=100&width=200" },
    { name: "RwandAir", logo: "/placeholder.svg?height=100&width=200" },
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ted-red to-transparent opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Our <span className="text-ted-red">Partners</span>
            </h2>
            <div className="w-20 h-1 bg-ted-red mx-auto mb-6"></div>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're grateful to our partners who help make TEDx Kigali High School Youth possible. Their support enables
              us to create an impactful event for our community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-4 flex items-center justify-center hover:border-ted-red/50 transition-all duration-300"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={150}
                  height={75}
                  className="max-h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              Interested in becoming a partner? Contact us at{" "}
              <a href="mailto:partners@tedxkigalihighschool.org" className="text-ted-red hover:underline">
                partners@tedxkigalihighschool.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
