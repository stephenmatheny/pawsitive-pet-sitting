import Section from './Section'
import { testimonials } from '../data/content'

const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      eyebrow={testimonials.eyebrow}
      title={testimonials.title}
      subtitle={testimonials.subtitle}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.quotes.map((quote) => (
          <div
            key={quote.name}
            className="flex h-full flex-col justify-between rounded-2xl card p-6 shadow-sm"
          >
            <p className="text-lg text-main leading-relaxed">{quote.note}</p>
            <p className="mt-4 text-sm font-semibold text-secondary">{quote.name}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials
