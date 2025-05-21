// This is a simple mock API for the TEDx website
// In a real application, this would connect to a backend service

export type Speaker = {
  id: string
  name: string
  title: string
  bio: string
  image: string
  topic: string
}

export type Event = {
  id: string
  title: string
  theme: string
  date: string
  location: string
  description: string
  image: string
  speakers: string[]
  ticketsAvailable: boolean
}

export type Partner = {
  id: string
  name: string
  logo: string
  website: string
  tier: "platinum" | "gold" | "silver" | "bronze"
}

// Mock data
const speakers: Speaker[] = [
  {
    id: "1",
    name: "Dr. Maya Johnson",
    title: "AI Ethics Researcher",
    bio: "Dr. Maya Johnson is a leading researcher in the field of AI ethics, focusing on ensuring that artificial intelligence systems are developed and deployed in ways that are fair, transparent, and beneficial to humanity.",
    image: "/placeholder.svg?height=400&width=400",
    topic: "The Future of Ethical AI",
  },
  {
    id: "2",
    name: "Samuel Nkusi",
    title: "Climate Activist",
    bio: "Samuel Nkusi is a passionate climate activist who has been working to raise awareness about environmental issues in Rwanda and across Africa. His innovative approaches to sustainability have inspired communities to take action.",
    image: "/placeholder.svg?height=400&width=400",
    topic: "Sustainable Solutions for Africa",
  },
  {
    id: "3",
    name: "Amina Uwase",
    title: "Tech Entrepreneur",
    bio: "Amina Uwase is the founder of a tech startup that is bringing digital solutions to rural communities in Rwanda. Her work focuses on bridging the digital divide and empowering underserved populations through technology.",
    image: "/placeholder.svg?height=400&width=400",
    topic: "Innovation in Rural Communities",
  },
  {
    id: "4",
    name: "David Mugisha",
    title: "Education Reformer",
    bio: "David Mugisha is an education reformer who is reimagining how learning happens in schools across Rwanda. His innovative approaches to curriculum design and teaching methodologies are transforming the educational landscape.",
    image: "/placeholder.svg?height=400&width=400",
    topic: "Reimagining Learning",
  },
]

const events: Event[] = [
  {
    id: "1",
    title: "TEDxALURwanda 2024",
    theme: "What Next?",
    date: "November 30th, 2024",
    location: "Canal Olympia, Rebero",
    description:
      'Join us for an inspiring day of talks exploring the theme "What Next?" as we contemplate the future and the possibilities that lie ahead.',
    image: "/images/event-image.png",
    speakers: ["1", "2", "3"],
    ticketsAvailable: true,
  },
  {
    id: "2",
    title: "TEDxYouth@KigaliHighSchool",
    theme: "Dare to Dream",
    date: "August 25, 2025",
    location: "Kigali High School",
    description:
      'A special TEDx Youth event at Kigali High School, exploring the theme "Dare to Dream" with inspiring young speakers and thought leaders.',
    image: "/images/mobile-design.png",
    speakers: ["4"],
    ticketsAvailable: false,
  },
]

const partners: Partner[] = [
  {
    id: "1",
    name: "African Leadership University",
    logo: "/placeholder.svg?height=100&width=200",
    website: "https://www.alueducation.com",
    tier: "platinum",
  },
  {
    id: "2",
    name: "Rwanda ICT Chamber",
    logo: "/placeholder.svg?height=100&width=200",
    website: "https://example.com",
    tier: "gold",
  },
  {
    id: "3",
    name: "Kigali Innovation City",
    logo: "/placeholder.svg?height=100&width=200",
    website: "https://example.com",
    tier: "gold",
  },
  {
    id: "4",
    name: "RwandAir",
    logo: "/placeholder.svg?height=100&width=200",
    website: "https://example.com",
    tier: "silver",
  },
  {
    id: "5",
    name: "Bank of Kigali",
    logo: "/placeholder.svg?height=100&width=200",
    website: "https://example.com",
    tier: "silver",
  },
  {
    id: "6",
    name: "MTN Rwanda",
    logo: "/placeholder.svg?height=100&width=200",
    website: "https://example.com",
    tier: "bronze",
  },
]

// API functions
export async function getSpeakers(): Promise<Speaker[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return speakers
}

export async function getSpeaker(id: string): Promise<Speaker | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return speakers.find((speaker) => speaker.id === id)
}

export async function getEvents(): Promise<Event[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return events
}

export async function getEvent(id: string): Promise<Event | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return events.find((event) => event.id === id)
}

export async function getPartners(): Promise<Partner[]> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return partners
}

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simple validation
  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    }
  }

  // In a real application, this would add the email to a database or newsletter service
  return {
    success: true,
    message: "Thank you for subscribing to our newsletter!",
  }
}

export async function submitContactForm(data: {
  name: string
  email: string
  subject: string
  message: string
}): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Simple validation
  if (!data.name || !data.email || !data.message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // In a real application, this would send the form data to a server
  return {
    success: true,
    message: "Your message has been sent. We will get back to you soon!",
  }
}
