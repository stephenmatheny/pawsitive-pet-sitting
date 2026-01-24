import Section from './Section'
import { brand, hero as heroContent } from '../data/content'

const scrollToId = (e, id) => {
  e.preventDefault()
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }
}

const Hero = () => {
  return (
    <Section
      id="hero"
      eyebrow={heroContent.eyebrow}
      title={heroContent.title}
      subtitle={heroContent.subtitle}
      className="relative overflow-hidden pt-24 sm:pt-28"
    >
      <div className="absolute inset-x-12 top-10 -z-10 h-72 rounded-3xl bg-gradient-to-r from-slate-100 via-white to-slate-50 blur-3xl" />
      <div className="absolute -left-10 top-14 -z-10 h-40 w-40 rounded-full bg-emerald-100/60 blur-3xl" />
      <div className="absolute -right-20 bottom-0 -z-10 h-52 w-52 rounded-full bg-sky-100/60 blur-3xl" />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {brand.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollToId(e, 'contact')}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-white"
            >
              {heroContent.primaryLabel}
            </a>
            <a
              href="#services"
              onClick={(e) => scrollToId(e, 'services')}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 bg-white shadow-sm transition hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-white"
            >
              {heroContent.secondaryLabel}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {heroContent.highlights.map((item, index) => (
              <div
                key={`${index}-${item}`}
                className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-4 shadow-sm backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-xl shadow-slate-200/80 backdrop-blur">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {heroContent.card.eyebrow}
              </p>
              <p className="text-2xl font-semibold text-slate-900">{heroContent.card.title}</p>
              <p className="text-slate-600 leading-relaxed">{heroContent.card.body}</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {heroContent.card.highlights.map((item, index) => (
                  <div
                    key={`${index}-${item}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-12 w-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-lg font-semibold">
                  P
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{brand.name}</p>
                  <p className="text-sm text-slate-500">{heroContent.card.footerLine}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Hero
