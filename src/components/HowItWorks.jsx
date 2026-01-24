import Section from './Section'
import { processSection, processSteps } from '../data/content'

const HowItWorks = () => {
  return (
    <Section
      id="process"
      eyebrow={processSection.eyebrow}
      title={processSection.title}
      subtitle={processSection.subtitle}
      className="bg-surface-2"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <div
            key={step.title}
            className="flex h-full gap-4 rounded-2xl card p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl pill-primary text-lg font-semibold">
              {index + 1}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-main">{step.title}</h3>
              <p className="mt-2 text-secondary leading-relaxed">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default HowItWorks
