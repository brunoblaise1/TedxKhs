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
    // <main className="min-h-screen bg-black text-white">
    //   <Navbar />

    //   <section className="pt-40 pb-24 bg-black relative overflow-hidden">
    //     <div className="absolute -top-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
    //     <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

    //     <div className="container mx-auto px-8 lg:px-16 relative z-10">
    //       <div className="max-w-6xl mx-auto text-left">
    //         <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white">
    //           About <span className="text-ted-red">TEDx</span> Kigali High
    //           School Youth
    //         </h1>
    //         <p className="text-sm md:text-base text-gray-300 leading-relaxed">
    //           TEDx Kigali High School Youth is a student-led initiative that
    //           aims to bring the spirit of TED to our school community. Our event
    //           provides a platform for students, educators, and community members
    //           to share their ideas, experiences, and visions for the future.
    //         </p>
    //         <p className="text-sm md:text-base text-gray-300 leading-relaxed mt-4">
    //           Our mission is to inspire and empower young minds to think
    //           critically, dream boldly, and take action to create positive
    //           change in their communities and beyond. We believe that everyone
    //           has ideas worth spreading, and we're committed to creating a space
    //           where those ideas can flourish.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="py-16 bg-black">
    //     <div className="container mx-auto px-4 md:px-6">
    //       <div className="max-w-3xl mx-auto">
    //         <div className="bg-black/40 backdrop-blur-sm border border-white rounded-xl p-6 md:p-8 mb-10">
    //           <h2 className="text-2xl font-bold mb-6 text-ted-red">What is TEDx?</h2>
    //           <div className="space-y-4 text-gray-300">
    //             <p>
    //               TEDx is a program of local, self-organized events that bring people together to share a TED-like
    //               experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and
    //               connection. These local, self-organized events are branded TEDx, where x = independently organized TED
    //               event.
    //             </p>
    //             <p>
    //               The TED Conference provides general guidance for the TEDx program, but individual TEDx events are
    //               self-organized. (Subject to certain rules and regulations.)
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //         <div className="bg-black/40 backdrop-blur-sm border border-white rounded-xl p-6 md:p-8 mb-10">
    //           <h2 className="text-2xl font-bold mb-6 text-ted-red">About TEDx Kigali High School Youth</h2>
    //           <div className="space-y-4 text-gray-300">
    //             <p>
    //               TEDx Kigali High School Youth is a student-led initiative that aims to bring the spirit of TED to our
    //               school community. Our event provides a platform for students, educators, and community members to
    //               share their ideas, experiences, and visions for the future.
    //             </p>
    //             <p>
    //               Our mission is to inspire and empower young minds to think critically, dream boldly, and take action
    //               to create positive change in their communities and beyond. We believe that everyone has ideas worth
    //               spreading, and we're committed to creating a space where those ideas can flourish.
    //             </p>
    //           </div>
    //         </div>

    //         <div className="bg-black/40 backdrop-blur-sm border border-white rounded-xl p-6 md:p-8">
    //           <h2 className="text-2xl font-bold mb-6 text-ted-red">Our Team</h2>
    //           <div className="space-y-4 text-gray-300">
    //             <p>
    //               TEDx Kigali High School Youth is organized by a dedicated team of students, with guidance from faculty
    //               advisors. Our team members are passionate about ideas worth spreading and committed to creating an
    //               exceptional TEDx experience.
    //             </p>
    //             <p>
    //               We work together to curate speakers, design the event experience, manage logistics, and promote the
    //               event to our community. Each team member brings unique skills and perspectives to the table, united by
    //               our shared vision of inspiring and empowering our peers.
    //             </p>
    //           </div>
    //           <div className="mt-8 text-center">
    //             <Button className="bg-ted-red hover:bg-ted-red/90 text-white">Meet Our Team</Button>
    //           </div>
    //         </div>
    //         <div>
    //           <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 text-white">
    //             About <span className="text-ted-red">TEDx</span>
    //           </h2>
    //           <p className="text-sm md:text-base text-gray-300 leading-relaxed">
    //             In the spirit of ideas worth spreading, TEDx is a program of
    //             local, self- organised events that bring people together to
    //             share a TED-like experience. At a TEDx event, TED Talks video
    //             and live speakers combine to spark deep discussion and
    //             connection. These local, self-organized events are branded TEDx,
    //             where x = independently organised TED event. The TED Conference
    //             provides general guidance for the TEDx program, but individual
    //             TEDx events are self-organised. (Subject to certain rules and
    //             regulations)
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="py-24 bg-black relative overflow-hidden">
    //     <div className="absolute -top-40 -left-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>
    //     <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-ted-red/5 rounded-full blur-3xl"></div>

    //     <div className="container mx-auto px-8 lg:px-16 relative z-10">
    //       <div className="max-w-3xl mx-auto text-center">
    //         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    //           Get Involved
    //         </h2>
    //         <p className="text-lg text-gray-300 mb-12">
    //           There are many ways to be part of the TEDx Kigali High School
    //           Youth experience.
    //         </p>
    //         <div className="grid sm:grid-cols-2 gap-6">
    //           <div className="bg-black/40 backdrop-blur-sm border border-white rounded-xl p-6 hover:border-ted-red/50 transition-colors">
    //             <h3 className="text-xl font-bold mb-3">Attend</h3>
    //             <p className="text-gray-400 mb-4">Join us for a day of inspiring talks and connections.</p>
    //             <Button variant="outline" className="w-full border-ted-red text-ted-red hover:bg-ted-red/10">
    //               Register
    //             </Button>
    //           </div>
    //           <div className="bg-black/40 backdrop-blur-sm border border-white rounded-xl p-6 hover:border-ted-red/50 transition-colors">
    //             <h3 className="text-xl font-bold mb-3">Sponsor</h3>
    //             <p className="text-gray-400 mb-4">Support our event and connect with our audience.</p>
    //             <Button variant="outline" className="w-full border-ted-red text-ted-red hover:bg-ted-red/10">
    //               Learn More
    //             </Button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <Footer />
    // </main>
  <h1>Helo</h1>
  );
}
