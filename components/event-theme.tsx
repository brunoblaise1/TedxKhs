"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function EventTheme() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-gradient-to-b from-black to-black/95 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ted-red to-transparent opacity-30"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Event Theme: <span className="text-ted-red">Dare to Dream</span>
            </h2>
            <div className="w-20 h-1 bg-ted-red mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-ted-red/30 rounded-xl"></div>
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/hero-background.png"
                  alt="TEDx Kigali High School"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                A TEDx event is a local gathering where live TED-like talks and performances are shared with the
                community. TEDx events are fully planned and coordinated independently, on a community-by-community
                basis. The content and design of each TEDx event is unique and developed by each organizing team, but
                all events share common features.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                Our theme "Dare to Dream" encourages speakers and attendees to explore the power of imagination,
                ambition, and courage in pursuing one's aspirations. We believe that dreams are the foundation of
                innovation and progress.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-ted-red hover:bg-ted-red/90 text-white">Register Now</Button>
                <Button variant="outline" className="border-ted-red text-ted-red hover:bg-ted-red/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
