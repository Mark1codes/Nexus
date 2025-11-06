"use client"

import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface AuthLayoutProps {
  title: string
  subtitle: string
  children: React.ReactNode
  showBackButton?: boolean
}

export default function AuthLayout({ title, subtitle, children, showBackButton = true }: AuthLayoutProps) {
  const router = useRouter()

  const handleBack = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col bg-secondary/30">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold">N</span>
            </div>
            <span className="hidden sm:inline font-semibold text-sm tracking-tight">NEXUS</span>
          </Link>

          {showBackButton && (
            <button
              onClick={handleBack}
              className="lg:hidden flex items-center gap-1 text-foreground hover:text-accent transition-colors p-2 rounded hover:bg-secondary"
              title="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back</span>
            </button>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg border border-border p-6 sm:p-8 space-y-6 sm:space-y-8 animate-fadeIn">
            {/* Back button for larger screens */}
            {showBackButton && (
              <button
                onClick={handleBack}
                className="hidden lg:flex items-center gap-2 text-foreground hover:text-accent transition-colors -ml-8 -mt-8 mb-4 p-2 rounded hover:bg-secondary"
                title="Go back"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back</span>
              </button>
            )}

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
              <p className="text-muted-foreground text-sm sm:text-base">{subtitle}</p>
            </div>

            {/* Form */}
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
