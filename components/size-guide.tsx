"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ruler } from "lucide-react"

const sizeGuides = {
  mens: [
    { size: "XS", chest: "34-36", waist: "28-30", inseam: "28-30" },
    { size: "S", chest: "36-38", waist: "30-32", inseam: "30-32" },
    { size: "M", chest: "38-40", waist: "32-34", inseam: "32-34" },
    { size: "L", chest: "40-42", waist: "34-36", inseam: "34-36" },
    { size: "XL", chest: "42-44", waist: "36-38", inseam: "36-38" },
  ],
  womens: [
    { size: "XS", chest: "32-34", waist: "24-26", inseam: "27-29" },
    { size: "S", chest: "34-36", waist: "26-28", inseam: "29-31" },
    { size: "M", chest: "36-38", waist: "28-30", inseam: "31-33" },
    { size: "L", chest: "38-40", waist: "30-32", inseam: "33-35" },
    { size: "XL", chest: "40-42", waist: "32-34", inseam: "35-37" },
  ],
}

export default function SizeGuide() {
  return (
    <Card className="p-4 sm:p-6 animate-fadeIn">
      <div className="flex items-center gap-3 mb-6">
        <Ruler className="w-5 h-5 sm:w-6 sm:h-6" />
        <h3 className="text-lg sm:text-xl font-semibold">Size Guide</h3>
      </div>

      <Tabs defaultValue="mens" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="mens" className="text-xs sm:text-sm">
            Men's
          </TabsTrigger>
          <TabsTrigger value="womens" className="text-xs sm:text-sm">
            Women's
          </TabsTrigger>
        </TabsList>

        {Object.entries(sizeGuides).map(([key, guide]) => (
          <TabsContent key={key} value={key}>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-2 sm:px-3">Size</th>
                    <th className="text-left py-2 px-2 sm:px-3">Chest</th>
                    <th className="text-left py-2 px-2 sm:px-3">Waist</th>
                    <th className="text-left py-2 px-2 sm:px-3">Inseam</th>
                  </tr>
                </thead>
                <tbody>
                  {guide.map((row, i) => (
                    <tr key={i} className="border-b hover:bg-secondary/50 transition-colors">
                      <td className="py-2 px-2 sm:px-3 font-semibold">{row.size}</td>
                      <td className="py-2 px-2 sm:px-3">{row.chest}"</td>
                      <td className="py-2 px-2 sm:px-3">{row.waist}"</td>
                      <td className="py-2 px-2 sm:px-3">{row.inseam}"</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-4 p-3 bg-blue-50 rounded text-xs sm:text-sm text-blue-900">
        <p className="font-semibold mb-1">Tip:</p>
        <p>
          Measurements are in inches. All our items are pre-shrunk. For the best fit, compare your measurements to these
          guidelines.
        </p>
      </div>
    </Card>
  )
}
