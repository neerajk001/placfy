import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated Accent Background */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div
          className={cn(
            "absolute left-1/2 top-[-10%] h-[50rem] w-[50rem] -translate-x-1/2 rounded-full blur-3xl",
            "bg-[radial-gradient(closest-side,var(--brand-blue),transparent_70%)]",
          )}
        />
        <motion.div
          className={cn(
            "absolute left-[10%] top-[10%] h-80 w-80 rounded-full blur-2xl opacity-70",
            "bg-[radial-gradient(closest-side,var(--brand-violet),transparent_70%)]",
          )}
          animate={{ x: [0, 40, -20, 0], y: [0, 20, -30, 0] }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
            AI-powered Recruitment & HR Automation
          </span>
          <h1 className="mt-6 text-pretty text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            All-in-One Platform for Recruitment and HR Management
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-muted-foreground">
            From sourcing candidates to onboarding employees, manage the entire
            talent lifecycle in one powerful platform. Automate HR workflows,
            track performance, and focus on building a stronger workforce.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              className={cn(
                "bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-violet)] text-primary-foreground",
                "hover:opacity-95",
              )}
              size="lg"
            >
              🚀 Start Free Trial
            </Button>
            <Button 
              className="bg-black text-white hover:bg-black/90 dark:bg-transparent dark:text-foreground dark:border dark:border-border dark:hover:bg-accent"
              size="lg"
            >
              📅 Book a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
