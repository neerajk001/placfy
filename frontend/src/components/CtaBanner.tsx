import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import SignUpForm from "./SignUpForm"
import SignInForm from "./SignInForm"

export default function CtaBanner() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <motion.div
          className="rounded-2xl border bg-card p-8 text-center shadow-sm"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-semibold">Unify recruiting and HR in one place</h3>
          <p className="mt-2 text-muted-foreground">Start free today or book a guided demo with our experts.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              onClick={() => setShowSignUpForm(true)}
              className={cn(
                "bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-violet)] text-primary-foreground",
                "hover:opacity-95",
              )}
              size="lg"
            >
              Start Free Trial
            </Button>
            <Button 
              className="bg-black text-white hover:bg-black/90 dark:bg-transparent dark:text-foreground dark:border dark:border-border dark:hover:bg-accent"
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
