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
    <header className="sticky top-0 z-40 site-header backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center px-4 py-4 sm:px-6">
        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border-base bg-surface px-3 py-2 text-main shadow-sm hover:border-strong focus-ring md:hidden"
          aria-expanded={open}
          aria-controls={navId}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 dot-primary transition-transform ${
                open ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 dot-primary transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 dot-primary transition-transform ${
                open ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </div>
        </button>

        {/* Logo (right on mobile, left on desktop) */}
        <div className="order-2 ml-auto flex items-center gap-2 md:order-1 md:ml-4">
          <img src={fullLogo} alt="Pawsitive Pet Sitting" className="h-10 w-auto" />
        </div>

        {/* Desktop nav */}
        <nav
          id={navId}
          className="order-3 ml-6 md:ml-auto hidden items-center gap-6 text-sm font-medium text-secondary md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative pb-1 nav-link transition-colors"
            >
              {link.label}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 nav-underline transition-transform hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-base bg-surface backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-base font-medium text-main sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="rounded-xl border border-transparent px-3 py-2 hover:border-base"
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
