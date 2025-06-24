import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

// Timeline data
const milestones = [
  {
    year: "2025",
    title: "Inaugural TEDxKHS",
    description: "Sparking Ideas Worth Spreading",
  },
  {
    year: "2026",
    title: "Student Innovation Lab launches",
    description: "Youth-led solutions for real-world challenges",
  },
  {
    year: "2027",
    title: "Global Voices",
    description: "First international student speaker joins TEDxKHS stage",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-40 pb-24 bg-black relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-6xl mx-auto text-left">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white">
              About <span className="text-ted-red">TEDx</span> Kigali High
              School Youth
            </h1>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              TEDx Kigali High School Youth is a student-led initiative that
              aims to bring the spirit of TED to our school community. Our event
              provides a platform for students, educators, and community members
              to share their ideas, experiences, and visions for the future.
            </p>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-4">
              Our mission is to inspire and empower young minds to think
              critically, dream boldly, and take action to create positive
              change in their communities and beyond. We believe that everyone
              has ideas worth spreading, and we're committed to creating a space
              where those ideas can flourish.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline Section */}
      <section className="py-24 bg-gradient-to-b from-black via-black/90 to-black/95">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 font-[Poppins,Inter,sans-serif] tracking-tight">
            Our Journey
          </h2>
          <div className="relative flex flex-col md:flex-row items-center md:justify-center gap-20 md:gap-0 overflow-x-auto scrollbar-thin scrollbar-thumb-ted-red/40 scrollbar-track-transparent">
            {milestones.map((item, idx) => (
              <div
                key={item.year}
                className="relative z-10 flex flex-col items-center md:w-1/3 min-w-[260px] group mx-4 md:mx-0"
              >
                {/* Year badge with ring */}
                <div className="mb-6 flex items-center justify-center pt-8">
                  <div className="relative flex items-center justify-center">
                    <span
                      className="block w-20 h-20 rounded-full bg-black flex items-center justify-center shadow-lg ring-4 ring-ted-red/80 transition-all duration-300 group-hover:scale-110 group-hover:ring-[8px] group-hover:ring-ted-red/60 group-hover:shadow-ted-red/30"
                      style={{ boxShadow: "0 0 16px 0 rgba(230,43,30,0.18)" }}
                    >
                      <span className="text-ted-red text-2xl font-bold font-[Poppins,Inter,sans-serif] tracking-wide select-none">
                        {item.year}
                      </span>
                    </span>
                  </div>
                </div>
                {/* Card */}
                <div
                  className="bg-black/60 backdrop-blur-md border border-ted-red/20 rounded-2xl shadow-xl px-6 py-6 min-h-[140px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:shadow-ted-red/30 hover:bg-black/80"
                  style={{ boxShadow: "0 4px 32px 0 rgba(230,43,30,0.08)" }}
                >
                  <div className="text-white text-lg font-semibold mb-2 font-[Poppins,Inter,sans-serif]">
                    {item.title}
                  </div>
                  <div className="text-gray-300 text-base font-normal">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white">
                About <span className="text-ted-red">TED</span>
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                TED is a global community, welcoming people from every
                discipline and culture who seek a deep understanding of the
                world. We believe passionately in the power of ideas to change
                attitudes, lives and, ultimately, the world. TED began in 1984
                as a conference where Technology, Entertainment and Design
                converged, and today covers almost all topics from science to
                business to global issues; in more than 100 languages.
                Meanwhile, independently run TEDx events help share ideas in
                communities around the world
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white">
                About <span className="text-ted-red">TEDx</span>
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                In the spirit of ideas worth spreading, TEDx is a program of
                local, self- organised events that bring people together to
                share a TED-like experience. At a TEDx event, TED Talks video
                and live speakers combine to spark deep discussion and
                connection. These local, self-organized events are branded TEDx,
                where x = independently organised TED event. The TED Conference
                provides general guidance for the TEDx program, but individual
                TEDx events are self-organised. (Subject to certain rules and
                regulations)
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-8 lg:px-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Involved
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              There are many ways to be part of the TEDx Kigali High School
              Youth experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Attend Card */}
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-3 text-white">Attend</h3>
                <p className="text-gray-300 mb-6">
                  Join us for a day of inspiring talks and connections.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-ted-red text-ted-red hover:bg-ted-red/10 text-base py-2 rounded-md font-semibold transition-colors"
                >
                  Register
                </Button>
              </div>
              {/* Sponsor Card */}
              <div className="bg-black/40 backdrop-blur-sm border border-gray-800 rounded-xl p-8 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-3 text-white">Sponsor</h3>
                <p className="text-gray-300 mb-6">
                  Support our event and connect with our audience.
                </p>
                <Button
                  variant="outline"
                  className="w-full border-ted-red text-ted-red hover:bg-ted-red/10 text-base py-2 rounded-md font-semibold transition-colors"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
