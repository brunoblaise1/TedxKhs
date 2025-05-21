"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useInView } from "framer-motion"

export function NewsletterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-ted-red" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Stay Updated</h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter to receive updates about upcoming events, speaker announcements, and more.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
              required
            />
            <Button type="submit" className="bg-white text-ted-red hover:bg-white/90 font-medium">
              Subscribe
            </Button>
          </form>

          <p className="text-white/70 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
