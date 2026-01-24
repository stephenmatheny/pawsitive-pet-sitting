import Section from './Section'
import { trustPoints, trustSection } from '../data/content'

const TrustStrip = () => {
  return (
    <Section
      id="trust"
      eyebrow={trustSection.eyebrow}
      title={trustSection.title}
      subtitle={trustSection.subtitle}
      className="bg-slate-900 text-white"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {trustPoints.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-6 shadow-lg shadow-slate-900/20"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">
              {item.title}
            </p>
            <p className="mt-3 text-base text-slate-100 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default TrustStrip
