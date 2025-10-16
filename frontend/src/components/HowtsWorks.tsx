import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  Settings, 
  Download, 
  Zap, 
  TrendingUp, 
  ArrowRight,
  Users,
  FileText,
  Calendar,
  BarChart3
} from "lucide-react"
import SharedAnimatedBackground from "./SharedAnimatedBackground"

const steps = [
  {
    icon: Settings,
    title: "Set up your workspace",
    desc: "Create your workspace and invite recruiters and hiring managers to collaborate seamlessly.",
    features: ["Team collaboration", "Role-based access", "Custom workflows"],
    color: "from-[#F5E6D3] to-[#F0E68C]"
  },
  {
    icon: Download,
    title: "Import & sync data",
    desc: "Bring jobs, candidates, and employees from your existing tools with one-click integration.",
    features: ["Data migration", "Real-time sync", "API integrations"],
    color: "from-[#F0E68C] to-[#F5E6D3]"
  },
  {
    icon: Zap,
    title: "Automate workflows",
    desc: "Screen, schedule, onboard, and remind—eliminate manual busywork with smart automation.",
    features: ["AI screening", "Auto-scheduling", "Smart notifications"],
    color: "from-[#D2B48C] to-[#CD853F]"
  },
  {
    icon: TrendingUp,
    title: "Track & improve",
    desc: "Monitor conversion, time-to-hire, and performance metrics to continuously optimize your process.",
    features: ["Analytics dashboard", "Performance insights", "ROI tracking"],
    color: "from-[#CD853F] to-[#D2B48C]"
  },
]

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden">
      <SharedAnimatedBackground />
      
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
        {/* Header */}
        <motion.div 
          className="mx-auto max-w-3xl text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-4">
            🚀 Simple 4-Step Process
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            How it works
          </h2>
          <p className="mt-6 text-lg leading-8 text-orange-500">
            Transform your recruitment and HR processes in just four simple steps. 
            From setup to optimization, we've got you covered.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#F5E6D3] via-[#F0E68C] to-[#D2B48C] transform -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Step card */}
                <div 
                  className="relative bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                    border: '2px solid transparent'
                  }}
                >
                  {/* Step number */}
                  <div className="absolute -top-4 left-8">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-black shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-600">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-2xl mb-6 shadow-lg",
                    "bg-gradient-to-r from-yellow-400 to-yellow-600"
                  )}>
                    <step.icon className="h-8 w-8 text-black" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-sm text-gray-400"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      >
                        <div className="h-1.5 w-1.5 rounded-full mr-3 bg-gradient-to-r from-yellow-400 to-yellow-600" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-opacity duration-300" 
                       style={{ background: `linear-gradient(135deg, ${step.color.replace('from-', '').replace(' to-', ', ')})` }} />
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
            >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-orange-500">
            <Users className="h-4 w-4" />
            <span>Join 10,000+ companies already using Placfy</span>
              </div>
        </motion.div>
      </div>
    </section>
  )
}
