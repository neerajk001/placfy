import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import SharedAnimatedBackground from "./SharedAnimatedBackground"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <SharedAnimatedBackground />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span 
            className="inline-block rounded-full bg-white px-3 py-1 text-sm text-gray-800"
            style={{
              background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #FFD700, #3B82F6) border-box',
              border: '2px solid transparent'
            }}
          >
            AI-powered Recruitment & HR Automation
          </span>
          <h1 className="mt-6 text-pretty text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            All-in-One Platform for <span className="relative inline-block">
              Recruitment
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-500 animate-pulse"></span>
            </span> and <span className="relative inline-block">
              HR
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-yellow-500 animate-pulse"></span>
            </span> Management
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-black">
            From sourcing candidates to onboarding employees, manage the entire
            talent lifecycle in one powerful platform. Automate HR workflows,
            track performance, and focus on building a stronger workforce.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              className="bg-black/90 text-white hover:bg-black border border-yellow-400"
              size="lg"
            >
              Start Free Trial
            </Button>
            <Button 
              className="bg-black/90 text-white hover:bg-black border border-yellow-400"
              size="lg"
            >
              Book a Demo
            </Button>
          </div>

          {/* Role Selection */}
          <div className="mt-12">
            <p className="text-sm text-orange-500 mb-4">Choose your role to get started:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/hr">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto bg-black/90 text-white hover:bg-black border border-yellow-400"
                >
                  I'm an HR Professional
                </Button>
              </Link>
              <Link to="/recruiter">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto bg-black/90 text-white hover:bg-black border border-yellow-400"
                >
                  I'm a Recruiter
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
