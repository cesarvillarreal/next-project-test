import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Title page',
  description: 'Metadata description',
}

const links = [
  {href: '/', label: 'Home'},
  {href: '/todos', label: 'Todos'},
  {href: '/docs', label: 'Docs'},
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Main Layout</h1>
        <header>
          <nav>
            <ul className='flex items-center'>
              {links.map((link, idx) => {
                return <li key={idx}>
                  <Link href={link.href} > { link.label } </Link>
                </li>
              })}
            </ul>
            ____
          </nav>
        </header>
        {children}
        </body>
    </html>
  )
}
