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
      className="bg-surface-2"
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-main">{brand.name}</p>
          <p className="text-secondary leading-relaxed">{cta.lede}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={mailtoLink}
              className="inline-flex items-center justify-center rounded-full btn-primary px-6 py-3 text-sm font-semibold focus-ring transition"
            >
              {cta.primaryLabel}
            </a>
            <a
              href={mailtoLink}
              className="inline-flex items-center justify-center rounded-full btn-secondary px-6 py-3 text-sm font-semibold focus-ring transition"
            >
              {cta.emailLabel}
            </a>
          </div>
        </div>
        <div className="rounded-2xl card p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                {cta.contactLabel}
              </p>
              <p className="mt-2 text-lg font-semibold text-main">{cta.email}</p>
            </div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl pill-primary text-lg font-semibold">
              @
            </span>
          </div>
          <div className="mt-4 space-y-2 text-sm text-secondary">
            <p>{cta.instructions}</p>
            <p className="text-muted">{cta.servicesLine}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default CTA
