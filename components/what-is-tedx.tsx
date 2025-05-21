"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"

export function WhatIsTEDx() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ted-red to-transparent opacity-30"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            What is <span className="text-ted-red">TEDx</span>?
          </h2>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 mb-10">
            <p className="text-gray-300 leading-relaxed mb-6">
              A TEDx event is a local gathering where live TED-like talks and performances are shared with the
              community. TEDx events are fully planned and coordinated independently, on a community-by-community basis.
              The content and design of each TEDx event is unique and developed by each organizing team, but all events
              share common features.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ted-red flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-medium text-white">TED-like Talks:</span> Presentations of ideas worth
                  spreading, typically 18 minutes or less.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ted-red flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-medium text-white">Independently Organized:</span> Events are planned and
                  coordinated by volunteers in local communities.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ted-red flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-medium text-white">Community Focus:</span> Events bring together diverse voices
                  from the local community.
                </p>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Why TEDx in <span className="text-ted-red">High School</span>?
          </h2>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8">
            <p className="text-gray-300 leading-relaxed mb-6">
              A TEDx event is a local gathering where live TED-like talks and performances are shared with the
              community. TEDx events are fully planned and coordinated independently, on a community-by-community basis.
              The content and design of each TEDx event is unique and developed by each organizing team, but all events
              share common features.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ted-red flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-medium text-white">Youth Empowerment:</span> Gives students a platform to share
                  their ideas and perspectives.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ted-red flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-medium text-white">Leadership Development:</span> Students gain valuable
                  experience in event planning, public speaking, and teamwork.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-ted-red flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-gray-300">
                  <span className="font-medium text-white">Community Connection:</span> Creates meaningful connections
                  between students, educators, and the broader community.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
