import Section from './Section'
import { trustPoints, trustSection } from '../data/content'

const TrustStrip = () => {
  return (
    <Section
      id="trust"
      eyebrow={trustSection.eyebrow}
      title={trustSection.title}
      subtitle={trustSection.subtitle}
      className="bg-surface-2"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {trustPoints.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl card px-5 py-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              {item.title}
            </p>
            <p className="mt-3 text-base text-secondary leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default TrustStrip
