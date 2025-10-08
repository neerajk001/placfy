import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    highlight: false,
    features: ["ATS basics", "Email support", "Community access", "Starter analytics"],
  },
  {
    name: "Pro",
    price: "$49",
    period: "/seat/mo",
    highlight: true,
    features: ["ATS + CRM", "Onboarding flows", "Performance reviews", "Automation rules"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    highlight: false,
    features: ["SSO & SAML", "HRIS integrations", "Custom workflows", "Dedicated success"],
  },
]

export default function Pricing() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Simple, scalable pricing</h2>
          <p className="mt-3 text-muted-foreground">Choose a plan that fits your team today and tomorrow.</p>
        </div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
        >
          {plans.map((p) => (
            <motion.article
              key={p.name}
              className={cn(
                "rounded-2xl border bg-card p-6 shadow-sm",
                p.highlight && "ring-2 ring-[var(--brand-violet)]",
              )}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-semibold">{p.price}</span>
                {p.period ? <span className="text-muted-foreground">{p.period}</span> : null}
              </div>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full",
                        "bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-violet)] text-primary-foreground",
                      )}
                      aria-hidden="true"
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "mt-6 w-full",
                  p.highlight
                    ? "bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-violet)] text-primary-foreground"
                    : p.name === "Enterprise" 
                    ? "bg-black text-white hover:bg-black/90 dark:bg-transparent dark:text-foreground dark:border dark:border-border dark:hover:bg-accent"
                    : undefined,
                )}
                variant={p.highlight ? "default" : p.name === "Enterprise" ? undefined : "outline"}
              >
                {p.name === "Enterprise" ? "Book a Demo" : "Start Free Trial"}
              </Button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
