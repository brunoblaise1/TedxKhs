"use client"

import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import { useInView } from "framer-motion"

export function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 text-gray-900">
            Upcoming <span className="text-ted-red">Events</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Join us for our upcoming events and be part of the TEDx experience. Get inspired, connect with like-minded
            individuals, and explore new ideas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card
            className={`overflow-hidden shadow-lg transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div className="relative h-60">
              <Image src="/images/event-image.png" alt="TEDx Event" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-bold">Theme: What Next?</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-ted-red" />
                  <span className="text-base">November 30th, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ted-red" />
                  <span className="text-base">Canal Olympia, Rebero</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join us for an inspiring day of talks exploring the theme "What Next?" as we contemplate the future and
                the possibilities that lie ahead.
              </p>
              <Button className="w-full bg-ted-red hover:bg-ted-red/90 text-white text-base px-6 py-2 rounded-full">Register Now</Button>
            </CardContent>
          </Card>

          <Card
            className={`overflow-hidden shadow-lg transition-all duration-1000 delay-300 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
          >
            <div className="relative h-60">
              <Image src="/images/mobile-design.png" alt="TEDx Event" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-lg font-bold">Theme: Dare to Dream</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4 text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-ted-red" />
                  <span className="text-base">August 25, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-ted-red" />
                  <span className="text-base">Kigali High School</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A special TEDx Youth event at Kigali High School, exploring the theme "Dare to Dream" with inspiring
                young speakers and thought leaders.
              </p>
              <Button className="w-full bg-ted-red hover:bg-ted-red/90 text-white text-base px-6 py-2 rounded-full">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
