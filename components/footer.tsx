import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div>
          <div>
            {/*  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" */}
            {/* <div className="mb-6">
              <Image src="/images/tedx-khs-logo.png" alt="TEDx Kigali High School" width={220} height={90} />
            </div> */}
            {/* <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              TEDx Kigali High School Youth is a local gathering where live TED-like talks and performances are shared
              with the community. This event is uniquely developed by each organizing team but all events share common
              features.
            </p> */}
            {/* <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-ted-red transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-ted-red transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-ted-red transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-ted-red transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div> */}
          </div>

           {/* <div>
            <h3 className="text-lg font-semibold mb-4 border-b  pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-ted-red transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-ted-red transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-ted-red transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-ted-red transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

           {/* <div>
            <h3 className="text-lg font-semibold mb-4 border-b  pb-2">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Kigali High School</li>
              <li className="text-gray-400 text-sm">Kigali, Rwanda</li>
              <li className="text-gray-400 text-sm">info@tedxkigalihighschool.org</li>
              <li className="text-gray-400 text-sm">+250 788 123 456</li>
            </ul>
          </div> */}
{/* 
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b  pb-2">About TEDx</h3>
            <p className="text-gray-400 text-sm">
              x = independently organized TED event. In the spirit of ideas worth spreading, TEDx is a program of local,
              self-organized events that bring people together to share a TED-like experience.
            </p>
          </div>
        </div> */}

        <div className="border-t  mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} TEDx Kigali High School Youth. All rights reserved.</p>
          <p className="mt-2">TEDx, x = independently organized TED event.</p>
        </div>
      </div>
    </footer>
  )
}
