import Section from './Section'
import { brand, cta } from '../data/content'

const CTA = () => {
  const mailtoLink = `mailto:${cta.email}?subject=${encodeURIComponent(cta.mailtoSubject)}&body=${cta.mailtoBody}`

  return (
    <Section
      id="contact"
      eyebrow={cta.eyebrow}
      title={cta.title}
      subtitle={cta.subtitle}
      className="bg-slate-900 text-white"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-white">{brand.name}</p>
          <p className="text-slate-100 leading-relaxed">{cta.lede}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {cta.primaryLabel}
            </a>
            <a
              href={mailtoLink}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {cta.emailLabel}
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-lg shadow-slate-900/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">
                {cta.contactLabel}
              </p>
              <p className="mt-2 text-lg font-semibold text-white">{cta.email}</p>
            </div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white text-lg font-semibold">
              @
            </span>
          </div>
          <div className="mt-4 space-y-2 text-sm text-slate-100">
            <p>{cta.instructions}</p>
            <p className="text-slate-300">{cta.servicesLine}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CTA
