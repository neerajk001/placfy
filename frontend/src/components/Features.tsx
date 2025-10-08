import { motion } from "framer-motion"
import { cn } from "@/lib/utils" // if you don’t have cn, replace with clsx or template strings
import { Database, Brain, BarChart3, Users } from "lucide-react"

const features = [
  {
    title: "Unified ATS + CRM",
    desc: "Post jobs, manage pipelines, and nurture relationships in one place.",
    icon: Users,
  },
  {
    title: "Onboarding & HRIS",
    desc: "Digitize offers, docs, and day-1 checklists—sync to your HR system.",
    icon: Database,
  },
  {
    title: "Performance & Reviews",
    desc: "Run structured reviews, goals, and feedback to develop every hire.",
    icon: BarChart3,
  },
  {
    title: "Automation + Analytics",
    desc: "Automate tasks and get insights on time-to-hire, conversion, and quality.",
    icon: Brain,
  },
]

export default function Features() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-20">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-pretty text-3xl font-semibold sm:text-4xl">
            Recruiting and HR in one platform
          </h2>
          <p className="mt-3 text-muted-foreground">
            From sourcing to onboarding and reviews—everything your team needs to move faster.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.ul
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {features.map((f) => (
            <motion.li
              key={f.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <article
                className={cn(
                  "h-full rounded-2xl border bg-card p-6 shadow-sm",
                  "hover:shadow-md transition-shadow"
                )}
              >
                <div
                  className={cn(
                    "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl",
                    "bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-violet)] text-primary-foreground"
                  )}
                  aria-hidden="true"
                >
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
