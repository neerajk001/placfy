import { motion } from "framer-motion"

const steps = [
  {
    title: "1. Set up",
    desc: "Create your workspace and invite recruiters and hiring managers.",
  },
  {
    title: "2. Import & sync",
    desc: "Bring jobs, candidates, and employees from your existing tools.",
  },
  {
    title: "3. Automate",
    desc: "Screen, schedule, onboard, and remind—without manual busywork.",
  },
  {
    title: "4. Track & improve",
    desc: "Monitor conversion, time-to-hire, and performance to keep improving.",
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-muted-foreground">
            A simple, powerful workflow from first touch to fully ramped.
          </p>
        </div>

        <ol className="relative mx-auto mt-10 grid max-w-3xl gap-8">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              className="relative rounded-2xl border bg-card p-6 shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
            >
              <div className="absolute left-6 top-0 -translate-y-1/2 rounded-full border bg-secondary px-3 py-1 text-xs">
                Step {i + 1}
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
