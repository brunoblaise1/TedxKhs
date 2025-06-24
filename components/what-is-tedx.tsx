"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WhatIsTedx() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      className="py-20 bg-gradient-to-b from-black to-black/95 relative overflow-hidden"
      ref={ref}
    >
      {/* Red divider line at the top */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-ted-red to-transparent opacity-30" />
      {/* Subtle background shapes */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div
          className={`flex flex-row justify-between max-w-3xl mx-auto transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            What is <span className="text-ted-red">TEDx</span>?
          </h2>

          <div className="backdrop-blur-sm border  rounded-xl p-6 md:p-8 mb-10">
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

          <div className="transition-all duration-1000 delay-300 bg-black/40 backdrop-blur-sm border border-white rounded-xl p-8 md:p-10 flex flex-col items-center md:items-start">
            <div className="w-full flex flex-col items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white text-center">
                ABOUT <span className="text-ted-red">US</span>
              </h2>
              <div className="w-20 h-1 bg-ted-red mx-auto" />
            </div>
            <h3 className="text-xl md:text-2xl font-medium mb-6 text-gray-200 text-center md:text-left">
              Student-Led High School TEDx Event
            </h3>
            <div className="space-y-4 text-gray-300 text-center md:text-left">
              <p>
                TEDxKHS is a dynamic, student-led organization that embodies the
                spirit of TED's mission to spread ideas that can change the
                world. We believe that by fostering a culture of curiosity,
                open-mindedness, and collaboration, we can create truly unique
                and impactful experiences.
              </p>
              <p>
                Our events bring together a diverse mix of voices from the high
                school community and beyond. Our goal is to inspire and empower
                our attendees to think differently, share their ideas, and make
                a meaningful impact in their communities.
              </p>
            </div>
            <div className="mt-8">
              <Button className="bg-ted-red hover:bg-ted-red/90 text-white rounded-full px-8">
                Learn More
              </Button>
            </div>
          </div>
        

<div>

          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Why TEDx in <span className="text-ted-red">High School</span>?
          </h2>

          <div className=" backdrop-blur-sm border rounded-xl p-6 md:p-8">
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
      </div>
    </section>
  );
}
