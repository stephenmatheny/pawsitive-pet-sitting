import { useEffect, useState } from 'react'
import smallLogo from '../assets/small-logo.svg'
import { brand, navLinks } from '../data/content'
import { normalizePath } from '../utils/routes'
import AppLink from './AppLink'

const Header = ({ currentPath = '/' }) => {
  const [open, setOpen] = useState(false)
  const activePath = normalizePath(currentPath)

  useEffect(() => {
    setOpen(false)
  }, [activePath])

  useEffect(() => {
    if (!open) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [open])

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <AppLink to="/" className="site-header__brand" aria-label={brand.name}>
          <img src={smallLogo} alt="" className="site-header__logo" />
          <div>
            <span className="site-header__name">{brand.name}</span>
            <span className="site-header__tag">Warm, dependable care for pets and home.</span>
          </div>
        </AppLink>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </button>
      </div>

      {open ? (
        <>
          <button
            type="button"
            className="site-header__backdrop"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          />

          <div className="site-header__menu-shell">
            <nav id="site-navigation" className="site-header__menu" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <AppLink
                  key={link.path}
                  to={link.path}
                  className={`site-header__menu-link ${activePath === link.path ? 'is-active' : ''}`}
                >
                  {link.label}
                </AppLink>
              ))}
            </nav>
          </div>
        </>
      ) : null}
    </header>
  )
}

export default Header
