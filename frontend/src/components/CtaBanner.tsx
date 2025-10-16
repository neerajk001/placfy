import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import SignUpForm from "./SignUpForm"
import SignInForm from "./SignInForm"
import SharedAnimatedBackground from "./SharedAnimatedBackground"

export default function CtaBanner() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  return (
    <section className="relative overflow-hidden">
      <SharedAnimatedBackground />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          className="rounded-2xl bg-black/90 backdrop-blur-sm p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, white, #FFD700, #FFA500, white) border-box',
            border: '2px solid transparent'
          }}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold text-white">Unify recruiting and HR in one place</h3>
          <p className="mt-2 text-orange-500">Start free today or book a guided demo with our experts.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              onClick={() => setShowSignUpForm(true)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black hover:from-yellow-500 hover:to-yellow-700"
              size="lg"
            >
              Start Free Trial
            </Button>
            <Button 
              className="bg-gray-800 text-white hover:bg-gray-700 border border-yellow-400"
              size="lg"
            >
              Book Demo
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Sign Up Form Modal */}
      {showSignUpForm && (
        <SignUpForm 
          onClose={() => setShowSignUpForm(false)}
          onSwitchToSignIn={() => {
            setShowSignUpForm(false);
            setShowSignInForm(true);
          }}
        />
      )}
      
      {/* Sign In Form Modal */}
      {showSignInForm && (
        <SignInForm 
          onClose={() => setShowSignInForm(false)}
          onSwitchToSignUp={() => {
            setShowSignInForm(false);
            setShowSignUpForm(true);
          }}
        />
      )}
    </section>
  )
}
