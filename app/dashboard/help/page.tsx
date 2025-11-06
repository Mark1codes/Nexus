"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { HelpCircle, MessageSquare, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HelpPage() {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order from the Orders section in your dashboard.",
    },
    { question: "What is your return policy?", answer: "We offer 30-day returns on all items in original condition." },
    { question: "How can I update my profile?", answer: "Go to Profile Settings to update your personal information." },
  ]

  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
            Help & Support
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base mt-1">Get help with your account and orders</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                Contact Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
                Get in touch with our support team
              </p>
              <Button className="w-full text-xs sm:text-sm">Start Chat</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="flex items-center gap-2 text-sm sm:text-base">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">Browse our help articles</p>
              <Button variant="outline" className="w-full bg-transparent text-xs sm:text-sm">
                View Docs
              </Button>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2 sm:space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx}>
                <CardContent className="p-3 sm:p-6">
                  <p className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{faq.question}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
