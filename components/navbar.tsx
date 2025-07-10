"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/report", label: "Report" },
    { href: "/contacts", label: "Contacts" },
  ]

  return (
    <nav className="border-b w-full">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Building2 className="h-6 w-6 text-primary" />
          <span>CivicSight</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-muted-foreground transition-colors hover:text-primary",
                pathname === link.href && "text-primary font-medium"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
} 