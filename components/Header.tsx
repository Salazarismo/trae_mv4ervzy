"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Header() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/projetos', label: 'Projetos' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ]
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  return (
    <header className="border-b border-neutral-800">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">Portfólio</Link>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-neutral-900 text-neutral-200 transition ease-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          aria-label="Abrir menu"
          aria-controls="main-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </button>
        <ul
          id="main-menu"
          className={`absolute left-0 right-0 top-full z-40 mx-4 mt-2 rounded-xl border border-border bg-neutral-900 p-3 text-sm shadow-soft md:static md:mx-0 md:mt-0 md:flex md:gap-4 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${open ? 'block' : 'hidden'}`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={`block rounded-lg px-3 py-2 text-neutral-300 transition ease-soft hover:bg-neutral-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${pathname === l.href ? 'bg-neutral-800 text-white' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
