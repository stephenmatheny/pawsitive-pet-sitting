import Section from './Section'
import { about } from '../data/content'

const About = () => {
  return (
    <Section
      id="about"
      eyebrow={about.eyebrow}
      title={about.title}
      subtitle={about.subtitle}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 text-secondary leading-relaxed">
          {about.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="rounded-2xl card p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            {about.card.eyebrow}
          </p>
          <p className="mt-3 text-lg font-semibold text-main">{about.card.title}</p>
          <p className="mt-3 text-secondary leading-relaxed">{about.card.body}</p>
          <div className="mt-4 grid gap-3 text-sm text-secondary sm:grid-cols-2">
            {about.card.points.map((point, index) => (
              <div
                key={`${index}-${point}`}
                className="rounded-xl card-soft px-4 py-3"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
