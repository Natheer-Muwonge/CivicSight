import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";

export default function ContactsPage() {
  return (
    <div className="w-full max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Important Contacts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Pothole Reporting Hotline</h3>
            <p className="text-muted-foreground">
              For urgent pothole issues in College Park, please use the number below.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:301-776-7619" className="text-2xl font-bold text-primary hover:underline">
                301-776-7619
              </a>
            </div>
          </div>
          <div className="border-t pt-6">
             <h3 className="text-lg font-semibold">Other Issues</h3>
             <p className="text-muted-foreground">
                For all other non-emergency issues, please use our online reporting form.
                Our team will ensure it gets to the right department.
             </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 