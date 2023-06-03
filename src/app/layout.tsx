import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Roach Tech Log',
  description: 'Roach Tech Log',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <body className={inter.className}>
        <div className="flex flex-col font-lora antialiased font-serif items-center">
          <div className="flex flex-col h-full">
            <div className="flex flex-nowrap pt-1 items-center">
              <h1 className="w-30 h-20 text-7xl">Roach</h1>
              <Link href="/" className="w-30 ml-40 text-xl pt-8">Intro</Link>
              <Link href="/posts" className="w-30 ml-20 text-xl pt-8">Posts</Link>
              <Link href="/series" className="w-30 ml-20 text-xl pt-8">Series</Link>
            </div>
            <div className="flex flex-nowrap bg-red-500 h-0.5 w-full"></div>
            <div className="flex flex-nowrap bg-red-500 mt-1 h-0.5 w-full"></div>
            <div className="flex mt-5 max-w-5xl">{children}</div>
          </div>
        </div>
      </body>
  )
}
