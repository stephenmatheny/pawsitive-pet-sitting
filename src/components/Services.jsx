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
            className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/70"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                {servicesSection.eyebrow}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{service.description}</p>
            </div>
            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              {service.items.map((item, index) => (
                <li key={`${service.title}-${index}`} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
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
