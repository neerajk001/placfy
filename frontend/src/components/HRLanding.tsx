import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Users, Calendar, FileText, TrendingUp, DollarSign, Clock, Shield, BarChart3 } from "lucide-react"
import { Link } from "react-router-dom"
import SharedAnimatedBackground from "./SharedAnimatedBackground"

export default function HRLanding() {
  const hrFeatures = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Complete employee lifecycle management from onboarding to offboarding"
    },
    {
      icon: Calendar,
      title: "Attendance Tracking",
      description: "Automated attendance tracking with real-time monitoring and reporting"
    },
    {
      icon: FileText,
      title: "Leave Management",
      description: "Streamlined leave requests, approvals, and balance tracking"
    },
    {
      icon: TrendingUp,
      title: "Performance Reviews",
      description: "Comprehensive performance evaluation and goal tracking system"
    },
    {
      icon: DollarSign,
      title: "Payroll Management",
      description: "Automated payroll processing with tax calculations and compliance"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Advanced time tracking with project allocation and overtime management"
    },
    {
      icon: Shield,
      title: "Compliance & Security",
      description: "Ensure HR compliance with automated workflows and secure data handling"
    },
    {
      icon: BarChart3,
      title: "HR Analytics",
      description: "Data-driven insights for better workforce planning and decision making"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
                background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #FFD700, #FFA500) border-box',
                border: '2px solid transparent'
              }}
            >
              🏢 HR Management Platform
            </span>
            <h1 className="mt-6 text-pretty text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl text-black">
              Streamline Your HR Operations
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-black">
              Manage your entire workforce with our comprehensive HR platform. 
              From employee onboarding to performance reviews, automate workflows 
              and focus on building a stronger team.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admin/hr/employees">
                <Button
                  className="bg-black/90 text-white hover:bg-black border border-yellow-400"
                  size="lg"
                >
                  Access HR Dashboard
                </Button>
              </Link>
              <Button 
                className="bg-black/90 text-white hover:bg-black border border-yellow-400"
                size="lg"
              >
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden py-20">
        <SharedAnimatedBackground />
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Complete HR Management Suite
            </h2>
            <p className="mt-4 text-lg text-orange-500">
              Everything you need to manage your workforce efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hrFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="relative overflow-hidden py-20">
        <SharedAnimatedBackground />
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Quick Access to HR Tools
            </h2>
            <p className="mt-4 text-lg text-orange-500">
              Jump directly to the HR functions you need most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/admin/hr/employees" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <Users className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Employee Management</h3>
                <p className="text-sm text-gray-300">Manage employee profiles, roles, and organizational structure</p>
              </div>
            </Link>

            <Link to="/admin/hr/attendance" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <Calendar className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Attendance Tracking</h3>
                <p className="text-sm text-gray-300">Monitor attendance, working hours, and time-off requests</p>
              </div>
            </Link>

            <Link to="/admin/hr/leave" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <FileText className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Leave Management</h3>
                <p className="text-sm text-gray-300">Handle leave requests, approvals, and balance tracking</p>
              </div>
            </Link>

            <Link to="/admin/hr/performance" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <TrendingUp className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Performance Reviews</h3>
                <p className="text-sm text-gray-300">Conduct performance evaluations and goal tracking</p>
              </div>
            </Link>

            <Link to="/admin/hr/payroll" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <DollarSign className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Payroll Management</h3>
                <p className="text-sm text-gray-300">Process payroll, manage benefits, and handle compensation</p>
              </div>
            </Link>

            <Link to="/admin/reports" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <BarChart3 className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">HR Reports</h3>
                <p className="text-sm text-gray-300">Generate comprehensive HR analytics and reports</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20">
        <SharedAnimatedBackground />
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="bg-black/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            style={{
              background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
              border: '2px solid transparent'
            }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of HR professionals who trust our platform to manage their workforce
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admin/hr/employees">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700">
                  Start Managing HR Now
                </Button>
              </Link>
              <Button size="lg" className="bg-gray-800 text-white hover:bg-gray-700 border border-yellow-400">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
