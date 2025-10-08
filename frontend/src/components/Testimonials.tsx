
const testimonials = [
  {
    quote: "We reduced time-to-hire by 40% and doubled recruiter productivity in two quarters.",
    name: "Alex Chen",
    role: "Head of Talent, Nimbus",
    avatar: "/professional-headshot.png",
  },
  {
    quote: "The AI matching is exceptional—shortlists that used to take days now take minutes.",
    name: "Priya Kapoor",
    role: "Recruiting Lead, Atlas",
    avatar: "/professional-headshot.png",
  },
  {
    quote: "Finally, an ATS and CRM that our hiring managers actually enjoy using.",
    name: "Diego Ramos",
    role: "VP People, Quantum",
    avatar: "/professional-headshot.png",
  },
  {
    quote: "Analytics surfaced bottlenecks we didn't know existed. Huge efficiency gains.",
    name: "Sara Lee",
    role: "People Ops, Velvet",
    avatar: "/professional-headshot.png",
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <article className="rounded-2xl border bg-card p-6 shadow-sm">
      <p className="text-pretty">
        "{testimonial.quote}"
      </p>
      <div className="mt-4 flex items-center gap-3">
        <img src={testimonial.avatar || "/placeholder.svg"} alt="" className="h-10 w-10 rounded-full border" loading="lazy" />
        <div>
          <p className="text-sm font-medium">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">What customers say</h2>
          <p className="mt-3 text-muted-foreground">Real results from teams scaling with intelligent hiring.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" aria-label="Customer testimonials">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={`${testimonial.name}-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
