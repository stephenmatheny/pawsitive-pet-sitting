import Section from './Section'
import { peaceOfMind } from '../data/content'

const PeaceOfMind = () => {
  return (
    <Section
      id="peace"
      eyebrow={peaceOfMind.eyebrow}
      title={peaceOfMind.title}
      subtitle={peaceOfMind.subtitle}
      className="bg-slate-50"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {peaceOfMind.highlights.map((item, index) => (
          <div
            key={`${index}-${item}`}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <p className="text-base font-semibold text-slate-900">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default PeaceOfMind
