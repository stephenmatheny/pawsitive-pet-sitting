import Section from './Section'
import { serviceArea } from '../data/content'

const ServiceArea = () => {
  return (
    <Section
      id="area"
      eyebrow={serviceArea.eyebrow}
      title={serviceArea.title}
      subtitle={serviceArea.subtitle}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-lg font-semibold text-slate-900">{serviceArea.coverageTitle}</p>
          <ul className="mt-4 space-y-2 text-slate-700">
            {serviceArea.coverage.map((item, index) => (
              <li key={`${index}-${item}`} className="flex items-start gap-2 text-sm leading-relaxed">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6 shadow-inner">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
            {serviceArea.focus.eyebrow}
          </p>
          <p className="mt-3 text-lg font-semibold text-emerald-900">{serviceArea.focus.title}</p>
          <p className="mt-2 text-sm text-emerald-800 leading-relaxed">{serviceArea.focus.body}</p>
        </div>
      </div>
    </Section>
  )
}

export default ServiceArea
