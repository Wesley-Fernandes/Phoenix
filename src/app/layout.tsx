
import Navbar from '@module/components/Navbar'
import './globals.scss'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PHOENIX',
  description: 'COMUNIDADE DE ROLEPLAY',
}

export default function RootLayout({children,}:{children: React.ReactNode}){
  const pathname = usePathname();
  console.log(pathname)
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {pathname != "/" &&(<Navbar/>)}
        {children}
      </body>
    </html>
  )
}
