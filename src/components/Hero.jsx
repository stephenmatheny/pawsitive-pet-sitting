import Section from './Section'
import AppLink from './AppLink'
import { brand, hero as heroContent } from '../data/content'

const Hero = () => {
  return (
    <Section
      id="hero"
      eyebrow={heroContent.eyebrow}
      title={heroContent.title}
      subtitle={heroContent.subtitle}
      className="relative overflow-hidden pt-6 sm:pt-6"
    >
      <div className="absolute inset-x-12 top-10 -z-10 h-72 rounded-3xl hero-gradient blur-3xl" />
      <div className="absolute -left-10 top-14 -z-10 h-40 w-40 rounded-full blob blob-primary" />
      <div className="absolute -right-20 bottom-0 -z-10 h-52 w-52 rounded-full blob blob-sage" />

      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 chip px-4 py-2 text-sm shadow-sm">
            <span className="h-2 w-2 rounded-full chip-dot" />
            {brand.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <AppLink
              to="/contact"
              className="inline-flex items-center justify-center rounded-full btn-primary px-6 py-3 text-sm font-semibold focus-ring transition"
            >
              {heroContent.primaryLabel}
            </AppLink>
            <AppLink
              to="/services"
              className="inline-flex items-center justify-center rounded-full btn-secondary px-6 py-3 text-sm font-semibold focus-ring transition"
            >
              {heroContent.secondaryLabel}
            </AppLink>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {heroContent.highlights.map((item, index) => (
              <div
                key={`${index}-${item}`}
                className="rounded-2xl card px-4 py-4 shadow-sm backdrop-blur"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full pill-primary text-xs font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-sm text-secondary leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl panel p-8 shadow-xl backdrop-blur">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                {heroContent.card.eyebrow}
              </p>
              <p className="text-2xl font-semibold text-main">{heroContent.card.title}</p>
              <p className="text-secondary leading-relaxed">{heroContent.card.body}</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {heroContent.card.highlights.map((item, index) => (
                  <div
                    key={`${index}-${item}`}
                    className="rounded-2xl card-soft px-4 py-3 text-sm text-secondary"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className="h-12 w-12 rounded-2xl pill-primary flex items-center justify-center text-lg font-semibold">
                  P
                </div>
                <div>
                  <p className="text-sm font-semibold text-main">{brand.name}</p>
                  <p className="text-sm text-secondary">{heroContent.card.footerLine}</p>
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
