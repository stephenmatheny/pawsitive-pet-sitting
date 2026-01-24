import Section from './Section'
import { peaceOfMind } from '../data/content'

const PeaceOfMind = () => {
  return (
    <Section
      id="peace"
      eyebrow={peaceOfMind.eyebrow}
      title={peaceOfMind.title}
      subtitle={peaceOfMind.subtitle}
      className="bg-surface-2"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {peaceOfMind.highlights.map((item, index) => (
          <div
            key={`${index}-${item}`}
            className="rounded-2xl card p-5 shadow-sm"
          >
            <p className="text-base font-semibold text-main">{item}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default PeaceOfMind
