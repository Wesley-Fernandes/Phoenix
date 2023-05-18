
import Navbar from '@module/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Security from '@module/components/security'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PHOENIX',
  description: 'COMUNIDADE DE ROLEPLAY',
}



export default function RootLayout({children,}:{children: React.ReactNode}){


  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Security>
          {children}
        </Security>
      </body>
    </html>
  )
}
