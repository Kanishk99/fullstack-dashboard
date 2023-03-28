'use client'
import Link from 'next/link'
import './globals.css'
// import { AuthContextProvider } from './context/AuthContext'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <main>
          <nav>
            <Link href="/">
              Home
            </Link>
            <Link href="/profile">
              Profile
            </Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
