import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 bg-black relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-ted-red">Events</span>
            </h1>
            <p className="text-xl text-gray-300">Join us for our upcoming TEDx Kigali High School Youth event.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10">Upcoming Event</h2>

            <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden mb-16">
              <div className="p-6 md:p-8 border-b border-gray-800">
                <h3 className="text-2xl font-bold mb-2">TEDx Kigali High School Youth 2025</h3>
                <p className="text-ted-red font-medium mb-6">Theme: Dare to Dream</p>

                <div className="flex flex-wrap gap-6 mb-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-ted-red" />
                    <span>August 28, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-ted-red" />
                    <span>Venue: TBD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-ted-red" />
                    <span>Attendance: 100</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">
                  Join us for our inaugural TEDx Kigali High School Youth event, where we'll explore the theme "Dare to
                  Dream." This event will feature talks from students, educators, and community members who are pushing
                  boundaries and reimagining what's possible.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-ted-red hover:bg-ted-red/90 text-white">Register Now</Button>
                  <Button variant="outline" className="border-ted-red text-ted-red hover:bg-ted-red/10">
                    Event Details
                  </Button>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-black/60">
                <h4 className="text-xl font-bold mb-4">Event Schedule</h4>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="bg-ted-red/10 px-3 py-1 rounded-full text-ted-red font-medium w-32 text-center">
                      9:00 - 10:00
                    </div>
                    <div>
                      <h5 className="font-medium">Registration & Networking</h5>
                      <p className="text-gray-400 text-sm">Meet fellow attendees over coffee and light refreshments</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="bg-ted-red/10 px-3 py-1 rounded-full text-ted-red font-medium w-32 text-center">
                      10:00 - 12:00
                    </div>
                    <div>
                      <h5 className="font-medium">Session 1: Imagine</h5>
                      <p className="text-gray-400 text-sm">Talks exploring the power of imagination and creativity</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="bg-ted-red/10 px-3 py-1 rounded-full text-ted-red font-medium w-32 text-center">
                      12:00 - 13:00
                    </div>
                    <div>
                      <h5 className="font-medium">Lunch Break</h5>
                      <p className="text-gray-400 text-sm">
                        Enjoy lunch and continue conversations with speakers and attendees
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="bg-ted-red/10 px-3 py-1 rounded-full text-ted-red font-medium w-32 text-center">
                      13:00 - 15:00
                    </div>
                    <div>
                      <h5 className="font-medium">Session 2: Create</h5>
                      <p className="text-gray-400 text-sm">
                        Talks focusing on turning dreams into reality through action
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="bg-ted-red/10 px-3 py-1 rounded-full text-ted-red font-medium w-32 text-center">
                      15:00 - 16:00
                    </div>
                    <div>
                      <h5 className="font-medium">Closing & Networking</h5>
                      <p className="text-gray-400 text-sm">Final remarks and continued conversations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Join us for this inspiring event</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Don't miss this opportunity to be part of the TEDx Kigali High School Youth experience. Register now to
                secure your spot at this transformative event.
              </p>
              <Button className="bg-ted-red hover:bg-ted-red/90 text-white px-8">Register Now</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
