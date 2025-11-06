"use client"

import { User, Mail, MapPin, Phone, Edit } from "lucide-react"
import Link from "next/link"

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-lg border border-border overflow-hidden">
      <div className="h-24 bg-linear-to-r from-primary to-accent"></div>

      <div className="px-6 py-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-end gap-4">
            <div className="w-20 h-20 rounded-full bg-secondary border-4 border-white flex items-center justify-center -mt-16">
              <User className="w-10 h-10 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold">John Doe</h2>
              <p className="text-muted-foreground">Member since Jan 2024</p>
            </div>
          </div>
          <Link
            href="/dashboard/profile"
            className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded hover:bg-secondary transition-colors"
          >
            <Edit className="w-4 h-4" />
            Edit Profile
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="font-medium">john@example.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="font-medium">New York, NY</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
