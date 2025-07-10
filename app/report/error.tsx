"use client" // Error components must be Client Components

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-destructive mb-4">Something went wrong on the Report Page!</h2>
      <p className="mb-6 text-muted-foreground">The application encountered an unexpected error.</p>
      <pre className="mb-6 p-4 bg-muted rounded-md text-left overflow-auto">
        <strong>Error:</strong> {error.message}
      </pre>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
} 