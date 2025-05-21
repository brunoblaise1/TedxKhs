"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useInView } from "framer-motion"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-ted-red/10 rounded-full" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ted-red/10 rounded-full" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/logo.png"
                  alt="TEDx ALURwanda"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gray-900">
              <span className="text-ted-red">ABOUT</span> US
            </h2>
            <h3 className="text-xl md:text-2xl font-medium mb-6 text-gray-800">Student-Led University TEDx Event</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                TEDxALURwanda is a dynamic, student-led organization that embodies the spirit of TED's mission to spread
                ideas that can change the world. We believe that by fostering a culture of curiosity, open-mindedness,
                and collaboration, we can create truly unique and impactful experiences.
              </p>
              <p>
                In 2019, we launched our inaugural event, themed 'Dare to Disrupt', which brought together an
                electrifying mix of voices from the African Leadership University community and beyond. Our goal is to
                inspire and empower our attendees to think differently, share their ideas, and make a meaningful impact
                in their communities.
              </p>
            </div>
            <div className="mt-8">
              <Button className="bg-ted-red hover:bg-ted-red/90 text-white rounded-full px-8">Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
