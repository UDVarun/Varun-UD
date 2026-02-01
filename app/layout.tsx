import "./styles/globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
