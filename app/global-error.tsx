"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2 style={{ fontSize: '1.5rem', color: '#cc0000', marginBottom: '1rem' }}>
            A Critical Error Occurred
          </h2>
          <p style={{ marginBottom: '1.5rem' }}>This is the global error handler. The error below is what is causing the application to crash.</p>
          <pre style={{
            padding: '1rem',
            backgroundColor: '#f3f3f3',
            border: '1px solid #ddd',
            borderRadius: '4px',
            textAlign: 'left',
            overflow: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            marginBottom: '1.5rem'
          }}>
            <strong>ERROR MESSAGE:</strong>
            <br />
            {error?.message || "No error message available."}
          </pre>
          <button
            onClick={() => reset()}
            style={{
              padding: '0.75rem 1.5rem',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: '#0070f3',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Try to Reload
          </button>
        </div>
      </body>
    </html>
  )
} 