"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, ArrowRight } from "lucide-react"
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
        <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
          <NavItemWithHover label="Features" type="features" />
          <NavItemWithHover label="Pricing" type="pricing" />
          <NavItemWithChevron label="Solutions" />
          <NavItemWithHover label="Blog" type="blog" />
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-2">
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

type NavItemWithHoverProps = {
  label: string
  type: 'features' | 'pricing' | 'blog'
}

function NavItemWithHover({ label, type }: NavItemWithHoverProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getDropdownContent = () => {
    switch (type) {
      case 'features':
        return {
          title: "Platform Features",
          items: [
            { icon: "🎯", text: "AI-Powered Candidate Matching", desc: "Smart algorithms to find the perfect fit" },
            { icon: "📊", text: "Advanced Analytics", desc: "Data-driven insights for better decisions" },
            { icon: "🔄", text: "Automated Workflows", desc: "Streamline your recruitment process" },
            { icon: "👥", text: "Team Collaboration", desc: "Work together seamlessly" }
          ]
        };
      case 'pricing':
        return {
          title: "Pricing Plans",
          items: [
            { icon: "🆓", text: "Free Plan", desc: "Perfect for small teams getting started" },
            { icon: "⭐", text: "Pro Plan", desc: "Advanced features for growing companies" },
            { icon: "🏢", text: "Enterprise", desc: "Custom solutions for large organizations" },
            { icon: "💼", text: "Custom Pricing", desc: "Tailored plans for your specific needs" }
          ]
        };
      case 'blog':
        return {
          title: "Latest Insights",
          items: [
            { icon: "📈", text: "Recruitment Trends 2024", desc: "Stay ahead with the latest industry insights" },
            { icon: "💡", text: "HR Best Practices", desc: "Expert tips for better workforce management" },
            { icon: "🎯", text: "Success Stories", desc: "How companies are transforming their hiring" },
            { icon: "🔧", text: "Product Updates", desc: "New features and improvements" }
          ]
        };
      default:
        return { title: "", items: [] };
    }
  };

  const content = getDropdownContent();

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`#${type}`} className="text-sm hover:opacity-90 cursor-pointer hover:text-yellow-400 transition-colors duration-200">
        {label}
      </Link>
      
      {/* Hover Dropdown */}
      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-80 bg-black border border-gray-700 shadow-xl z-50 overflow-hidden ${
        isHovered 
          ? 'opacity-100 visible max-h-96' 
          : 'opacity-0 invisible max-h-0 pointer-events-none'
      } transition-all duration-500 ease-out`}>
        <div className="p-4">
          <h3 className="font-semibold text-white mb-3">{content.title}</h3>
          <div className="space-y-3">
            {content.items.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 p-2 hover:bg-gray-800 transition-colors duration-200">
                <span className="text-lg">{item.icon}</span>
                <div>
                  <p className="font-medium text-white text-sm">{item.text}</p>
                  <p className="text-xs text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItemWithChevron({ label }: NavItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="inline-flex items-center gap-1 cursor-pointer">
        <span className="text-sm hover:opacity-90 hover:text-yellow-400 transition-colors duration-200">{label}</span>
        <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-[1px]" />
      </div>
      
      {/* Dropdown Menu */}
      <div className={`absolute top-full left-0 w-48 bg-black border border-gray-700 shadow-lg z-50 overflow-hidden ${
        isHovered 
          ? 'opacity-100 visible max-h-32' 
          : 'opacity-0 invisible max-h-0 pointer-events-none'
      } transition-all duration-500 ease-out`}>
        <div className="py-2">
          <Link 
            to="/hr" 
            className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-200"
          >
            🏢 HR Management
          </Link>
          <Link 
            to="/recruiter" 
            className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-200"
          >
            🎯 Recruitment
          </Link>
        </div>
      </div>
    </div>
  )
}

