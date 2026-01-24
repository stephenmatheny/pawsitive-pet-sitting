import Section from './Section'
import { services, servicesSection } from '../data/content'

const Services = () => {
  return (
    <Section
      id="services"
      eyebrow={servicesSection.eyebrow}
      title={servicesSection.title}
      subtitle={servicesSection.subtitle}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex h-full flex-col gap-4 rounded-2xl card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                {servicesSection.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-main">{service.title}</h3>
              <p className="mt-3 text-secondary leading-relaxed">{service.description}</p>
            </div>
            <ul className="mt-2 space-y-2 text-sm text-secondary">
              {service.items.map((item, index) => (
                <li key={`${service.title}-${index}`} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full dot-primary" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Services
