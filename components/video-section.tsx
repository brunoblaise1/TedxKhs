"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-ted-dark" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Experience <span className="text-ted-red">TEDx</span>
          </h2>
          <p className="text-gray-300">
            Watch highlights from our previous events and get a taste of the TEDx experience.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ${isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="TEDx ALURwanda"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
