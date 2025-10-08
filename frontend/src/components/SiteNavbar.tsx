"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, ArrowRight } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import SignUpForm from "./SignUpForm"
import SignInForm from "./SignInForm"

export default function SiteNavbar() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showSignInForm, setShowSignInForm] = useState(false);

  return (
    <>
    <header className="sticky top-4 z-50 flex w-full justify-center px-4">
      <div
        className="
          mx-auto flex w-full max-w-6xl items-center gap-3 rounded-full
          bg-foreground text-background
          border border-background/80 shadow
          px-3 py-2 md:px-5 md:py-3
        "
        role="navigation"
        aria-label="Main"
      >
        {/* Left: Brand */}
        <Link to="/" className="flex flex-1 items-center gap-2 shrink-0">
          {/* <img
            src="/placeholder-logo.svg"
            alt="Brand logo"
            width={28}
            height={28}
            className="rounded-[6px] bg-background p-1"
          /> */}
          <span className="text-sm md:text-base font-semibold tracking-tight">
            Placfy
          </span>
        </Link>

        {/* Center: Nav items */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          <Link to="#features" className="text-sm hover:opacity-90">
            Features
          </Link>
          <Link to="#pricing" className="text-sm hover:opacity-90">
            Pricing
          </Link>
          <NavItemWithChevron label="Resources" />
          <Link to="#blog" className="text-sm hover:opacity-90">
            Blog
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />
          <Button
            onClick={() => setShowSignInForm(true)}
            variant="outline"
            className="
              h-9 rounded-full px-4
              bg-transparent
              border border-background text-background
              hover:bg-background/10
            "
          >
            Sign in
          </Button>
          <Button
            onClick={() => setShowSignUpForm(true)}
            className="
              h-9 rounded-full px-4
              border border-foreground
            "
            style={{
              backgroundColor: "var(--brand-lime)",
              color: "var(--foreground)",
            }}
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Get Started
          </Button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-background/80 bg-background/10 text-background md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>
    </header>
    
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
  </>
  )
}

type NavItemProps = {
  label: string
}

function NavItemWithChevron({ label }: NavItemProps) {
  return (
    <div className="group inline-flex items-center gap-1">
      <Link to="#" className="text-sm hover:opacity-90">
        {label}
      </Link>
      <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-[1px]" />
    </div>
  )
}

