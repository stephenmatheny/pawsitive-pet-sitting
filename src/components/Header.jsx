import { useState } from 'react'
import { navLinks } from '../data/content'
import fullLogo from '../assets/full-logo.svg'

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
      <div className="mx-auto flex max-w-6xl items-center px-4 py-4 sm:px-6">
        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-300 md:hidden"
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

        {/* Logo (left) */}
        <div className="ml-4 flex items-center gap-2 md:ml-0">
          <a
            href="#top"
            onClick={(e) => handleNavClick(e, 'top')}
            className="inline-flex items-center"
            aria-label="Pawsitive Pet Sitting"
          >
            <img
              src={fullLogo}
              alt="Pawsitive Pet Sitting"
              className="h-10 w-auto"
            />
          </a>
        </div>

        {/* Desktop nav (right) */}
        <nav
          id={navId}
          className="ml-auto hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative pb-1 transition-colors hover:text-slate-900"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-slate-900 transition-transform hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-base font-medium text-slate-800 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-xl border border-transparent px-3 py-2 hover:border-slate-200"
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
