import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Search, Users, Target, Mail, FileText, TrendingUp, Calendar, BarChart3, Zap, Globe, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import SharedAnimatedBackground from "./SharedAnimatedBackground"

export default function RecruiterLanding() {
  const recruiterFeatures = [
    {
      icon: Search,
      title: "Smart Candidate Sourcing",
      description: "AI-powered candidate search across multiple platforms and databases"
    },
    {
      icon: Users,
      title: "Talent Pipeline Management",
      description: "Build and maintain a robust pipeline of qualified candidates"
    },
    {
      icon: Target,
      title: "Job Posting & Distribution",
      description: "Post jobs to multiple job boards and social platforms automatically"
    },
    {
      icon: Mail,
      title: "Automated Outreach",
      description: "Send personalized emails and follow-ups to candidates at scale"
    },
    {
      icon: FileText,
      title: "Resume Screening",
      description: "AI-powered resume screening to identify the best candidates quickly"
    },
    {
      icon: Calendar,
      title: "Interview Scheduling",
      description: "Automated interview scheduling with calendar integration"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Track recruitment metrics and optimize your hiring process"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automate repetitive tasks and focus on building relationships"
    }
  ];

  const recruitmentStats = [
    { number: "50%", label: "Faster Time to Hire" },
    { number: "3x", label: "More Qualified Candidates" },
    { number: "85%", label: "Reduction in Manual Tasks" },
    { number: "40%", label: "Lower Cost per Hire" }
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
              🎯 AI-Powered Recruitment Platform
            </span>
            <h1 className="mt-6 text-pretty text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl text-black">
              Find & Hire Top Talent Faster
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-black">
              Streamline your recruitment process with AI-powered candidate sourcing, 
              automated screening, and intelligent matching. Build your dream team 
              with our comprehensive recruitment platform.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/admin/recruit">
                <Button
                  className="bg-black/90 text-white hover:bg-black border border-yellow-400"
                  size="lg"
                >
                  Access Recruiting Dashboard
                </Button>
              </Link>
              <Button 
                className="bg-black/90 text-white hover:bg-black border border-yellow-400"
                size="lg"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative overflow-hidden py-16">
        <SharedAnimatedBackground />
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {recruitmentStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden py-20">
        <SharedAnimatedBackground />
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Complete Recruitment Solution
            </h2>
            <p className="mt-4 text-lg text-orange-500">
              From sourcing to hiring, we've got your entire recruitment process covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recruiterFeatures.map((feature, index) => (
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
              Jump Into Recruitment Tools
            </h2>
            <p className="mt-4 text-lg text-orange-500">
              Access the recruiting features you need most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/admin/recruit" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <Search className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Candidate Search</h3>
                <p className="text-sm text-gray-300">Find and source the best candidates for your open positions</p>
              </div>
            </Link>

            <Link to="/admin/sales/leads" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <Users className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Lead Management</h3>
                <p className="text-sm text-gray-300">Manage candidate leads and track their progress through the pipeline</p>
              </div>
            </Link>

            <Link to="/admin/sales/opportunities" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <Target className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Job Opportunities</h3>
                <p className="text-sm text-gray-300">Create and manage job postings and opportunities</p>
              </div>
            </Link>

            <Link to="/admin/sales/campaigns" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <Mail className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Recruitment Campaigns</h3>
                <p className="text-sm text-gray-300">Launch targeted recruitment campaigns and outreach</p>
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
                <h3 className="text-lg font-semibold mb-2 text-white">Recruitment Analytics</h3>
                <p className="text-sm text-gray-300">Track performance metrics and optimize your hiring process</p>
              </div>
            </Link>

            <Link to="/admin/dashboards" className="group">
              <div className="bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                  border: '2px solid transparent'
                }}
              >
                <TrendingUp className="h-8 w-8 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Recruitment Dashboard</h3>
                <p className="text-sm text-gray-300">Get a comprehensive view of your recruitment activities</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative overflow-hidden py-20">
        <SharedAnimatedBackground />
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-black">
              Why Choose Our Recruitment Platform?
            </h2>
            <p className="mt-4 text-lg text-orange-500">
              Built for modern recruiters who want to work smarter, not harder
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                border: '2px solid transparent'
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-full mb-4">
                <Zap className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Matching</h3>
              <p className="text-gray-300">Our AI finds the perfect candidates by analyzing skills, experience, and cultural fit</p>
            </div>

            <div className="text-center bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                border: '2px solid transparent'
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-full mb-4">
                <Globe className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Multi-Platform Sourcing</h3>
              <p className="text-gray-300">Search across job boards, social networks, and professional databases in one place</p>
            </div>

            <div className="text-center bg-black/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
                border: '2px solid transparent'
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-400/20 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Streamlined Workflow</h3>
              <p className="text-gray-300">Automate repetitive tasks and focus on building relationships with top talent</p>
            </div>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-black">
              Ready to Revolutionize Your Recruitment?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of recruiters who have transformed their hiring process with our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admin/recruit">
                <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700">
                  Start Recruiting Now
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
