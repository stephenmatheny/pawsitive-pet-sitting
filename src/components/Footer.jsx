import { brand, navLinks } from '../data/content'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-900">{brand.name}</p>
          <p className="text-sm text-slate-500">{brand.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              className="hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
