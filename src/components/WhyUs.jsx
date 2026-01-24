import Section from './Section'
import { whySection, whyUs } from '../data/content'

const WhyUs = () => {
  return (
    <Section
      id="why"
      eyebrow={whySection.eyebrow}
      title={whySection.title}
      subtitle={whySection.subtitle}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {whyUs.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
          >
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-sm font-semibold">
                +
              </span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default WhyUs
