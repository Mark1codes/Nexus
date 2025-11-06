"use client"

import DashboardLayout from "@/components/dashboard-layout"
import { Download, File, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DownloadsPage() {
  const downloads = [
    { id: 1, name: "Invoice #ORD-24562", date: "Nov 20, 2024", size: "245 KB" },
    { id: 2, name: "Invoice #ORD-24561", date: "Nov 18, 2024", size: "198 KB" },
    { id: 3, name: "Invoice #ORD-24560", date: "Nov 15, 2024", size: "267 KB" },
  ]

  return (
    <DashboardLayout showBackButton={true}>
      <div className="space-y-4 sm:space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold flex items-center gap-2">
            <Download className="w-6 h-6" />
            Downloads
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">Download your invoices and documents</p>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {downloads.map((download, idx) => (
            <Card
              key={download.id}
              className="hover:shadow-lg transition-all animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <CardContent className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 gap-3 sm:gap-4">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                    <File className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">{download.name}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar className="w-3 h-3" />
                      {download.date}
                    </p>
                  </div>
                </div>
                <Button className="flex items-center gap-2 w-full sm:w-auto justify-center text-xs sm:text-sm">
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
