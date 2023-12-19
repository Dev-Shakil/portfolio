import Navbar from '@/components/Navbar'
import Topbar from '../components/Topbar'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Inter({ subsets: ['latin'],weight:"500" })

export const metadata = {
  title: 'Mohammed Shakil',
  description: 'A Portfolio for forntend React Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
