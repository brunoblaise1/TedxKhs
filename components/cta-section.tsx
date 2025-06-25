"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-ted-red relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-8 lg:px-16 relative z-10">
        <div
          className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Ready to Dare to Dream?
          </h2>
          <p className="text-white/90 text-base mb-8 max-w-4xl mx-auto leading-relaxed">
            Join us for an inspiring day of ideas worth spreading. Register now
            to secure your spot at TEDx Kigali High School Youth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-ted-red hover:bg-white/90 font-medium px-6 py-2 rounded-full">
              Register Now
            </Button>
            <Link href="/contact" passHref legacyBehavior>
              <Button
                asChild
                variant="outline"
                className=" text-white hover:bg-white/10 font-medium px-6 py-2 rounded-full"
              >
                <a>Contact Us</a>
              </Button>
            </Link>
          </div>

          <p className="text-white/70 text-sm mt-8">
            Limited seats available. Early registration is recommended.
          </p>
        </div>
      </div>
    </section>
  );
}
