"use client"

import { useEffect, useRef } from "react"
// import { Button } from "@/components/ui/button"
import { motion, useInView, useAnimation } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"

export function HeroSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <section  className="bg-[url(/images/hero.webp)]">
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,43,30,0.1),transparent_70%)]" />
      </div> */}

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
        <div className=" max-w-4xl mx-auto">
       
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Kigali High School</span>
              <br />
              <span className="text-ted-red font-display">Youth</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Theme: <span className="font-medium">Past . Present . Future</span>
            </p>
       

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
              },
            }}
            className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-300">
              <Calendar className="h-5 w-5 text-ted-red" />
              <span>August 29, 2025</span>
            </div>
            <div className="hidden md:block w-1 h-1 rounded-full bg-ted-red"></div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="h-5 w-5 text-ted-red" />
              <span>Venue: Zaria Court (TBC)</span>
            </div>
            {/* <div className="hidden md:block w-1 h-1 rounded-full bg-ted-red"></div>
            <div className="flex items-center gap-2 text-gray-300">
              <Users className="h-5 w-5 text-ted-red" />
              <span>Attendance: 100</span>
            </div> */}
          </motion.div>

          {/* <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
              },
            }}
            className="bg-black/40 backdrop-blur-sm border  rounded-xl p-6 md:p-8 max-w-2xl mx-auto"
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              Imagine a day filled with brilliant speakers, thought-provoking conversations, and fresh connections. By
              organizing a TEDx event, you can create a unique gathering in your community that will unleash new ideas,
              inspire and inform.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-ted-red hover:bg-ted-red/90 text-white rounded-full px-8">
                Register Now
              </Button>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="w-10 h-10 border-2 border-ted-red rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-ted-red"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div> */}
    </section>
  )
}
