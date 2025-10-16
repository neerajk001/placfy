import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import SharedAnimatedBackground from "./SharedAnimatedBackground"

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
    <section className="relative overflow-hidden">
      <SharedAnimatedBackground />
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Simple, scalable pricing</h2>
          <p className="mt-3 text-orange-500">Choose a plan that fits your team today and tomorrow.</p>
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
                "rounded-2xl bg-black/90 backdrop-blur-sm p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105",
                p.highlight && "ring-2 ring-yellow-400",
              )}
              style={{
                background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                border: '2px solid transparent'
              }}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-white">{p.price}</span>
                {p.period ? <span className="text-gray-300">{p.period}</span> : null}
              </div>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black"
                      aria-hidden="true"
                    >
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-gray-300">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "mt-6 w-full",
                  p.highlight
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                    : p.name === "Enterprise" 
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
                    : "bg-gray-800 text-white hover:bg-gray-700 border border-yellow-400",
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
