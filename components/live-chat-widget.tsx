"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! How can we help you today?", sender: "agent", timestamp: new Date() },
  ])
  const [input, setInput] = useState("")

  const handleSendMessage = () => {
    if (!input.trim()) return

    setMessages([...messages, { id: messages.length + 1, text: input, sender: "user", timestamp: new Date() }])
    setInput("")

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: "Thanks for your message! Our team will respond shortly.",
          sender: "agent",
          timestamp: new Date(),
        },
      ])
    }, 1000)
  }

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-4 right-4 w-full sm:w-96 h-96 sm:h-[500px] flex flex-col shadow-2xl animate-scaleIn z-50">
          <div className="bg-primary text-primary-foreground p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="font-semibold text-sm sm:text-base">Customer Support</h3>
            <button onClick={() => setIsOpen(false)} className="hover:bg-black/20 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-3 flex gap-2">
            <Input
              placeholder="Type message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="text-sm"
            />
            <Button size="sm" onClick={handleSendMessage} className="px-3">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 w-14 h-14 sm:w-16 sm:h-16 bg-accent text-accent-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 animate-pulse-soft"
      >
        <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </>
  )
}
