import { useState } from 'react'
import { brand, navLinks } from '../data/content'

const Header = () => {
  const [open, setOpen] = useState(false)
  const navId = 'primary-navigation'

  const handleNavClick = (event, href) => {
    event.preventDefault()
    const target = document.getElementById(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${href}`)
    }
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-slate-900 text-white flex items-center justify-center text-sm font-semibold shadow-sm">
            P
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold text-slate-900">{brand.name}</p>
            <p className="text-sm text-slate-500">{brand.tagline}</p>
          </div>
        </div>

        <nav
          id={navId}
          className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative pb-1 hover:text-slate-900 transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full scale-x-0 bg-slate-900 transition-transform origin-left hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300"
            aria-expanded={open}
            aria-controls={navId}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-slate-900 transition-transform ${
                  open ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-slate-900 transition-opacity ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-slate-900 transition-transform ${
                  open ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-3 text-base font-medium text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-2 border border-transparent rounded-xl hover:border-slate-200 px-3"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
