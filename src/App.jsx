import { useEffect, useState } from 'react'
import './App.css'
import smallLogo from './assets/small-logo.svg'
import AppLink from './components/AppLink'
import Layout from './components/Layout'
import {
  ArrowRightIcon,
  BowlIcon,
  CameraIcon,
  CarePlusIcon,
  ClockIcon,
  CombIcon,
  DropletIcon,
  EarIcon,
  GiftStarIcon,
  HeartHomeIcon,
  HomeNoteIcon,
  InfoCircleIcon,
  MoonIcon,
  PawIcon,
  PawShareIcon,
  RibbonIcon,
  ShieldCheckIcon,
  SparkleIcon,
  ToothIcon,
} from './components/SiteIcons'
import {
  bookingPage,
  brand,
  contactPage,
  galleryPage,
  homePage,
  reviewsPage,
  servicesPage,
  teamPage,
} from './data/content'
import { getCurrentPath, routeChangeEvent } from './utils/routes'

const weekdayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const themeClassByName = {
  amber: 'is-amber',
  plum: 'is-plum',
  rose: 'is-rose',
  sage: 'is-sage',
  sky: 'is-sky',
}

const benefitIcons = {
  camera: CameraIcon,
  'gift-star': GiftStarIcon,
  'heart-home': HeartHomeIcon,
  'paw-share': PawShareIcon,
  'shield-check': ShieldCheckIcon,
}

const serviceIcons = {
  bowl: BowlIcon,
  'care-plus': CarePlusIcon,
  clock: ClockIcon,
  comb: CombIcon,
  droplet: DropletIcon,
  ear: EarIcon,
  'home-note': HomeNoteIcon,
  moon: MoonIcon,
  paw: PawIcon,
  ribbon: RibbonIcon,
  sparkle: SparkleIcon,
  tooth: ToothIcon,
}

const bookingServiceOptions = [
  {
    value: 'Drop-ins',
    description: 'Short scheduled visits for feeding, potty breaks, playtime, and check-ins while you are away.',
  },
  {
    value: 'Overnight stays',
    description: 'Extended evening and overnight care to keep pets comfortable in their usual routine.',
  },
  {
    value: 'In-home grooming',
    description: 'Grooming support at your home when location and pet needs are a good fit.',
  },
  {
    value: 'Drop-off grooming',
    description: "A grooming appointment at Pawsitive's location for bath, brushing, and freshen-up services.",
  },
  {
    value: 'Basic training',
    description: 'Simple reinforcement for routines, manners, and confidence during care visits.',
  },
  {
    value: 'Other / Not sure',
    description: 'Share what you need and we can help shape the right care plan for your pets.',
  },
]

const bookingLocationOptions = [
  {
    value: 'home',
    label: 'At my home',
    description: 'Best for visits, overnight stays, and in-home services.',
  },
  {
    value: 'drop-off',
    label: "At Pawsitive's location / drop-off",
    description: 'A good fit for drop-off grooming and select appointments.',
  },
  {
    value: 'not-sure',
    label: 'Not sure yet',
    description: 'We can help find the best setup for your request.',
  },
]

const padDateNumber = (value) => String(value).padStart(2, '0')

const createCalendarDate = (year, month, day) => new Date(year, month, day)

const startOfDay = (date) => createCalendarDate(date.getFullYear(), date.getMonth(), date.getDate())

const compareDates = (leftDate, rightDate) => startOfDay(leftDate).getTime() - startOfDay(rightDate).getTime()

const isSameDay = (leftDate, rightDate) =>
  Boolean(leftDate && rightDate) &&
  leftDate.getFullYear() === rightDate.getFullYear() &&
  leftDate.getMonth() === rightDate.getMonth() &&
  leftDate.getDate() === rightDate.getDate()

const isSameMonth = (leftDate, rightDate) =>
  Boolean(leftDate && rightDate) &&
  leftDate.getFullYear() === rightDate.getFullYear() &&
  leftDate.getMonth() === rightDate.getMonth()

const isDateWithinRange = (date, startDate, endDate) =>
  Boolean(date && startDate && endDate) &&
  compareDates(date, startDate) > 0 &&
  compareDates(date, endDate) < 0

const toInputDateValue = (date) =>
  date
    ? `${date.getFullYear()}-${padDateNumber(date.getMonth() + 1)}-${padDateNumber(date.getDate())}`
    : ''

const parseInputDateValue = (value) => {
  if (!value) {
    return null
  }

  const [year, month, day] = value.split('-').map(Number)

  if (!year || !month || !day) {
    return null
  }

  return createCalendarDate(year, month - 1, day)
}

const formatLongDate = (date) =>
  date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

const formatShortDate = (date) =>
  date
    ? date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    : 'Not selected'

const formatDateRange = (startDate, endDate) => {
  if (!startDate && !endDate) {
    return ''
  }

  const start = startDate || endDate
  const end = endDate || startDate

  if (!start || !end) {
    return ''
  }

  if (isSameDay(start, end)) {
    return formatLongDate(start)
  }

  const sameYear = start.getFullYear() === end.getFullYear()
  const sameMonth = sameYear && start.getMonth() === end.getMonth()

  if (sameMonth) {
    return `${start.toLocaleDateString('en-US', { month: 'long' })} ${start.getDate()}-${end.getDate()}, ${start.getFullYear()}`
  }

  if (sameYear) {
    return `${start.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    })} - ${end.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    })}, ${start.getFullYear()}`
  }

  return `${formatLongDate(start)} - ${formatLongDate(end)}`
}

const shiftMonth = (date, offset) => createCalendarDate(date.getFullYear(), date.getMonth() + offset, 1)

const buildCalendarDays = (visibleMonth) => {
  const monthStart = createCalendarDate(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1)
  const monthEnd = createCalendarDate(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0)
  const days = []

  for (let index = 0; index < monthStart.getDay(); index += 1) {
    days.push({
      key: `empty-start-${index}`,
      date: null,
      label: '',
    })
  }

  for (let date = 1; date <= monthEnd.getDate(); date += 1) {
    const currentDate = createCalendarDate(visibleMonth.getFullYear(), visibleMonth.getMonth(), date)

    days.push({
      key: toInputDateValue(currentDate),
      date: currentDate,
      label: date,
    })
  }

  while (days.length % 7 !== 0) {
    days.push({
      key: `empty-end-${days.length}`,
      date: null,
      label: '',
    })
  }

  return {
    label: monthStart.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    }),
    days,
  }
}

const createMailtoLink = (subject, lines) => {
  const body = lines.filter(Boolean).join('\n')
  return `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const AccentCard = ({ className = '', children }) => (
  <div className={`accent-card ${className}`}>{children}</div>
)

const PageIntro = ({ eyebrow, title, description, actions }) => (
  <section className="page-intro accent-card">
    {eyebrow ? <p className="page-intro__eyebrow">{eyebrow}</p> : null}
    <h1 className="page-intro__title">{title}</h1>
    <p className="page-intro__description">{description}</p>
    {actions ? <div className="page-intro__actions">{actions}</div> : null}
  </section>
)

const ButtonLink = ({ children, href, variant = 'primary' }) => (
  <a className={`button button--${variant}`} href={href}>
    {children}
  </a>
)

const PhotoPlaceholder = ({
  badge = 'Photo',
  className = '',
  label,
  variant = 'landscape',
  theme = 'sky',
}) => (
  <div
    className={`photo-placeholder photo-placeholder--${variant} ${themeClassByName[theme] ?? ''} ${className}`.trim()}
  >
    <span className="photo-placeholder__badge">{badge}</span>
    <span className="photo-placeholder__label">{label}</span>
  </div>
)

const BenefitCard = ({ benefit }) => {
  const Icon = benefitIcons[benefit.icon]

  return (
    <article className="benefit-card">
      <span className="benefit-card__icon" aria-hidden="true">
        {Icon ? <Icon width="20" height="20" /> : null}
      </span>
      <div className="benefit-card__body">
        <h3 className="benefit-card__title">{benefit.title}</h3>
        <p className="benefit-card__description">{benefit.description}</p>
      </div>
    </article>
  )
}

const ServiceTile = ({ item }) => {
  const Icon = serviceIcons[item.icon]

  return (
    <article className="service-tile">
      <span className="service-tile__icon" aria-hidden="true">
        {Icon ? <Icon width="20" height="20" /> : null}
      </span>
      <div className="service-tile__body">
        <h3 className="service-tile__title">{item.title}</h3>
        {item.description ? <p className="service-tile__description">{item.description}</p> : null}
      </div>
    </article>
  )
}

const HomePage = () => (
  <div className="page page--home">
    <section className="home-hero accent-card">
      <div className="home-hero__media">
        <PhotoPlaceholder
          badge="Featured"
          className="home-hero__photo"
          label="Welcoming pet portrait"
          variant="portrait"
          theme="sage"
        />
      </div>

      <div className="home-hero__content">
        <p className="page-intro__eyebrow">{homePage.eyebrow}</p>
        <div className="home-hero__message">
          <h1 className="home-hero__title">{homePage.title}</h1>
          <div className="home-hero__tagline-row">
            <div className="home-hero__accent">
              <img src={smallLogo} alt="" className="home-hero__accent-mark" />
            </div>
            <p className="home-hero__tagline">{homePage.tagline}</p>
          </div>
        </div>
        <div className="home-hero__actions">
          <AppLink to="/booking" className="button button--primary">
            Request Booking
          </AppLink>
        </div>
      </div>
    </section>

    <section className="home-summary accent-card">
      <p className="home-summary__text">{homePage.servicesSummary}</p>
    </section>

    <section className="home-section home-benefits accent-card">
      <div className="home-benefits__intro">
        <h2 className="section-card__title">Why Choose Pawsitive</h2>
        <p className="section-card__body">{homePage.whyChooseIntro}</p>
      </div>

      <div className="home-benefits__grid">
        {homePage.whyChoose.map((benefit) => (
          <BenefitCard key={benefit.title} benefit={benefit} />
        ))}
      </div>
    </section>

    <section className="section-block">
      <div className="section-block__header">
        <h2 className="section-block__title">Reviews</h2>
        <AppLink to="/reviews" className="carousel-link" aria-label="View more reviews">
          <span className="carousel-link__text">{homePage.reviewsLinkLabel}</span>
          <span className="carousel-link__icon">
            <ArrowRightIcon width="16" height="16" />
          </span>
        </AppLink>
      </div>

      <div className="review-grid review-grid--home">
        {homePage.reviews.map((review, index) => {
          const reviewThemes = ['plum', 'sage', 'sky']
          const theme = reviewThemes[index % reviewThemes.length]

          return (
            <AccentCard key={`${review.name}-${index}`} className="review-card review-card--home">
              <PhotoPlaceholder label={`Review Photo ${index + 1}`} variant="review" theme={theme} />
              <p className="review-card__quote">{review.quote}</p>
            </AccentCard>
          )
        })}
      </div>
    </section>

    <section className="home-section service-area-card accent-card">
      <h2 className="section-card__title">Service Area</h2>
      <p className="section-card__body">{homePage.serviceAreaSubtitle}</p>
      <div className="service-area-card__chips" aria-label="Service area locations">
        {homePage.serviceAreaLocations.map((location) => (
          <span key={location} className="service-area-card__chip">
            {location}
          </span>
        ))}
      </div>
      <p className="service-area-card__note">{homePage.serviceAreaNote}</p>
    </section>

    <section className="cta-panel accent-card">
      <h2 className="section-card__title">{homePage.ctaHeading}</h2>
      <p className="section-card__body">{homePage.cta}</p>
      <AppLink to="/booking" className="button button--primary">
        Request Booking
      </AppLink>
    </section>
  </div>
)

const MeetTheTeamPage = () => (
  <div className="page">
    <PageIntro
      eyebrow="Meet the Team"
      title="A caring, dependable team behind every visit."
      description={teamPage.intro}
    />

    <section className="section-block">
      <h2 className="section-block__title">Owner</h2>
      <div className="owner-grid">
        {teamPage.ownerCards.map((member, index) => {
          const themes = ['rose', 'sage', 'sky']
          return (
            <AccentCard key={member.name} className="profile-card">
              <PhotoPlaceholder label={member.name} variant="team-mini" theme={themes[index % themes.length]} />
              <p className="profile-card__name">{member.name}</p>
              <p className="profile-card__role">{member.role}</p>
              <span className="profile-card__badge">{member.badge}</span>
            </AccentCard>
          )
        })}
      </div>
    </section>

    <section className="member-stack">
      {teamPage.members.map((member, index) => {
        const themes = ['plum', 'amber', 'sage', 'sky']
        return (
          <AccentCard key={member.name} className="member-card">
            <PhotoPlaceholder label={member.name} variant="team-portrait" theme={themes[index % themes.length]} />
            <div className="member-card__content">
              <h2 className="member-card__name">{member.name}</h2>
              <p className="member-card__role">{member.role}</p>
              <p className="member-card__bio">{member.bio}</p>
              <p className="member-card__services">{member.services}</p>
            </div>
          </AccentCard>
        )
      })}
    </section>
  </div>
)

const ServicesPage = () => (
  <div className="page">
    <PageIntro
      eyebrow="Services"
      title="Flexible care that keeps pets comfortable and routines on track."
      description="Use the service list below as a guide for what is available and where custom planning may be helpful."
      actions={<p className="note-banner">{servicesPage.note}</p>}
    />

    <section className="service-grid">
      {servicesPage.groups.map((group, index) => {
        const themes = ['sage', 'plum']
        return (
          <AccentCard key={group.title} className="service-card">
            <PhotoPlaceholder
              badge="Service"
              className="service-card__photo"
              label={group.title}
              variant="service"
              theme={themes[index % themes.length]}
            />
            <div className="service-card__content">
              <h2 className="section-card__title">{group.title}</h2>
              <p className="section-card__body">{group.summary}</p>
              <div className="service-card__tiles" aria-label={`${group.title} services`}>
                {group.items.map((item) => (
                  <ServiceTile key={item.title} item={item} />
                ))}
              </div>
              {group.footnote ? <p className="service-card__footnote">{group.footnote}</p> : null}
            </div>
          </AccentCard>
        )
      })}
    </section>
  </div>
)

const BookingProgress = ({ step }) => (
  <AccentCard className="booking-progress">
    <p className="page-intro__eyebrow">Step {step} of 2</p>
    <div className="booking-progress__track" aria-label="Booking progress">
      <div className={`booking-progress__step ${step >= 1 ? 'is-active' : ''}`}>
        <span className="booking-progress__count">1</span>
        <div>
          <p className="booking-progress__label">Choose Dates</p>
          <p className="booking-progress__description">Pick your start and end dates.</p>
        </div>
      </div>
      <div className={`booking-progress__step ${step >= 2 ? 'is-active' : ''}`}>
        <span className="booking-progress__count">2</span>
        <div>
          <p className="booking-progress__label">Booking Details</p>
          <p className="booking-progress__description">Share your pets, services, and location.</p>
        </div>
      </div>
    </div>
  </AccentCard>
)

const ServiceHelpDialog = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <>
      <button type="button" className="dialog-backdrop" aria-label="Close service help" onClick={onClose} />
      <div
        className="dialog-shell dialog-shell--service-help"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-help-title"
      >
        <AccentCard className="dialog-card dialog-card--service-help">
          <div className="dialog-card__header">
            <h3 id="service-help-title" className="section-card__title">
              Need help choosing?
            </h3>
            <p className="section-card__body">
              Here is a quick guide to the service options you can request in your booking form.
            </p>
          </div>

          <div className="service-help-list">
            {bookingServiceOptions.map((service) => (
              <article key={service.value} className="service-help-card">
                <h4 className="service-help-card__title">{service.value}</h4>
                <p className="service-help-card__description">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="dialog-card__actions">
            <button type="button" className="button button--primary" onClick={onClose}>
              Got it
            </button>
          </div>
        </AccentCard>
      </div>
    </>
  )
}

const DateEditDialog = ({ endDate, minDate, onClose, onSave, startDate }) => {
  const [draftStartDate, setDraftStartDate] = useState(toInputDateValue(startDate))
  const [draftEndDate, setDraftEndDate] = useState(toInputDateValue(endDate))

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  const handleSave = () => {
    const nextStartDate = parseInputDateValue(draftStartDate)
    const nextEndDate = parseInputDateValue(draftEndDate)

    if (!nextStartDate || !nextEndDate) {
      return
    }

    if (compareDates(nextStartDate, minDate) < 0 || compareDates(nextEndDate, minDate) < 0) {
      return
    }

    if (compareDates(nextStartDate, nextEndDate) <= 0) {
      onSave(nextStartDate, nextEndDate)
      return
    }

    onSave(nextEndDate, nextStartDate)
  }

  const parsedDraftStartDate = parseInputDateValue(draftStartDate)
  const parsedDraftEndDate = parseInputDateValue(draftEndDate)
  const isSaveDisabled =
    !parsedDraftStartDate ||
    !parsedDraftEndDate ||
    compareDates(parsedDraftStartDate, minDate) < 0 ||
    compareDates(parsedDraftEndDate, minDate) < 0

  return (
    <>
      <button type="button" className="dialog-backdrop" aria-label="Close date editor" onClick={onClose} />
      <div className="dialog-shell" role="dialog" aria-modal="true" aria-labelledby="booking-date-editor-title">
        <AccentCard className="dialog-card">
          <div className="dialog-card__header">
            <h3 id="booking-date-editor-title" className="section-card__title">
              Edit preferred dates
            </h3>
            <p className="section-card__body">Update the start and end dates for this booking request.</p>
          </div>

          <div className="dialog-card__body">
            <label>
              Start Date
              <input
                type="date"
                value={draftStartDate}
                min={toInputDateValue(minDate)}
                onChange={(event) => setDraftStartDate(event.target.value)}
                required
              />
            </label>
            <label>
              End Date
              <input
                type="date"
                value={draftEndDate}
                onChange={(event) => setDraftEndDate(event.target.value)}
                min={draftStartDate || toInputDateValue(minDate)}
                required
              />
            </label>
          </div>

          <div className="dialog-card__actions">
            <button type="button" className="button button--secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="button button--primary" onClick={handleSave} disabled={isSaveDisabled}>
              Save Dates
            </button>
          </div>
        </AccentCard>
      </div>
    </>
  )
}

const BookingForm = ({ endDate, minDate, onBack, onSaveDates, onShowMonth, startDate }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    pets: '',
    serviceLocation: 'not-sure',
    address: '',
    notes: '',
    otherServiceDetails: '',
    services: [],
  })
  const [didTrySubmit, setDidTrySubmit] = useState(false)
  const [isDateEditorOpen, setIsDateEditorOpen] = useState(false)
  const [isServiceHelpOpen, setIsServiceHelpOpen] = useState(false)

  const preferredDates = formatDateRange(startDate, endDate)
  const needsHomeLocation = form.services.includes('In-home grooming')
  const needsOtherServiceDetails = form.services.includes('Other / Not sure')
  const shouldShowAddressField = needsHomeLocation || form.serviceLocation === 'home'
  const hasSelectedServices = form.services.length > 0
  const hasOtherServiceDetails = form.otherServiceDetails.trim().length > 0

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (service) => {
    setForm((current) => {
      const isSelected = current.services.includes(service)
      const nextServices = isSelected
        ? current.services.filter((item) => item !== service)
        : [...current.services, service]
      const nextLocation = nextServices.includes('In-home grooming') ? 'home' : current.serviceLocation
      const nextAddress = nextLocation === 'home' ? current.address : ''

      return {
        ...current,
        services: nextServices,
        serviceLocation: nextLocation,
        address: nextAddress,
      }
    })
  }

  const updateServiceLocation = (value) => {
    setForm((current) => {
      if (current.services.includes('In-home grooming') && value !== 'home') {
        return current
      }

      return {
        ...current,
        serviceLocation: value,
        address: value === 'home' ? current.address : '',
      }
    })
  }

  const handleDateSave = (nextStartDate, nextEndDate) => {
    onSaveDates(nextStartDate, nextEndDate)
    onShowMonth(nextStartDate)
    setIsDateEditorOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setDidTrySubmit(true)

    if (!hasSelectedServices || (needsOtherServiceDetails && !hasOtherServiceDetails)) {
      return
    }

    const selectedLocation = bookingLocationOptions.find((option) => option.value === form.serviceLocation)

    window.location.href = createMailtoLink('Booking Request - Pawsitive Pet Sitting', [
      'Hi Pawsitive Pet Sitting,',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone number: ${form.phone}`,
      `Preferred dates: ${preferredDates}`,
      `Pets: ${form.pets}`,
      `Requested services: ${form.services.join(', ')}`,
      needsOtherServiceDetails && form.otherServiceDetails
        ? `Additional service details: ${form.otherServiceDetails}`
        : '',
      `Service location: ${selectedLocation ? selectedLocation.label : form.serviceLocation}`,
      shouldShowAddressField && form.address ? `Service address: ${form.address}` : '',
      `Additional notes: ${form.notes}`,
      '',
      'Thank you!',
    ])
  }

  return (
    <>
      <AccentCard className="form-card">
        <div className="form-card__header">
          <div className="form-card__copy">
            <h2 className="section-card__title">Send a booking request</h2>
            <p className="section-card__body">
              Your dates are prefilled below, and submitting the form opens your email app with a ready-to-send request.
            </p>
          </div>

          <button type="button" className="button button--secondary" onClick={onBack}>
            Back to Calendar
          </button>
        </div>

        <form className="inquiry-form inquiry-form--booking" onSubmit={handleSubmit}>
          <div className="inquiry-form__grid">
            <label>
              Name
              <input name="name" value={form.name} onChange={updateField} required />
            </label>
            <label>
              Email
              <input name="email" type="email" value={form.email} onChange={updateField} required />
            </label>
            <label>
              Phone number
              <input name="phone" type="tel" value={form.phone} onChange={updateField} required />
            </label>
            <div className="inquiry-form__field">
              <span className="inquiry-form__label-text">Preferred dates</span>
              <button
                type="button"
                className="field-button"
                aria-haspopup="dialog"
                onClick={() => setIsDateEditorOpen(true)}
              >
                <span className="field-button__value">{preferredDates}</span>
                <span className="field-button__meta">Edit dates</span>
              </button>
            </div>
          </div>

          <label>
            Pets
            <input
              name="pets"
              value={form.pets}
              onChange={updateField}
              placeholder="Example: 2 dogs, 1 cat"
              required
            />
          </label>

          <fieldset className="choice-field">
            <legend className="choice-field__legend-row">
              <span>Services</span>
              <button
                type="button"
                className="inline-help-button"
                aria-haspopup="dialog"
                onClick={() => setIsServiceHelpOpen(true)}
              >
                <InfoCircleIcon width="16" height="16" />
                <span>Need help choosing?</span>
              </button>
            </legend>
            <div className="choice-grid choice-grid--services">
              {bookingServiceOptions.map((service) => {
                const isSelected = form.services.includes(service.value)

                return (
                  <label key={service.value} className={`choice-chip ${isSelected ? 'is-selected' : ''}`}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleService(service.value)}
                    />
                    <span>{service.value}</span>
                  </label>
                )
              })}
            </div>
            {didTrySubmit && !hasSelectedServices ? (
              <p className="inquiry-form__error">Choose at least one service to continue.</p>
            ) : null}

            <div className={`reveal-panel ${needsOtherServiceDetails ? 'is-open' : ''}`}>
              <div className="reveal-panel__inner">
                <label className="reveal-panel__field">
                  Tell us what you're looking for
                  <textarea
                    name="otherServiceDetails"
                    value={form.otherServiceDetails}
                    onChange={updateField}
                    rows="4"
                    placeholder="Share the kind of care, timing, or support you have in mind."
                    required={needsOtherServiceDetails}
                  />
                </label>
              </div>
            </div>
            {didTrySubmit && needsOtherServiceDetails && !hasOtherServiceDetails ? (
              <p className="inquiry-form__error">Tell us what you're looking for before submitting.</p>
            ) : null}
          </fieldset>

          <fieldset className="choice-field">
            <legend>Where will this service take place?</legend>
            <div className="choice-grid choice-grid--location">
              {bookingLocationOptions.map((option) => {
                const isSelected = form.serviceLocation === option.value
                const isDisabled = needsHomeLocation && option.value !== 'home'

                return (
                  <label
                    key={option.value}
                    className={`choice-card ${isSelected ? 'is-selected' : ''} ${isDisabled ? 'is-disabled' : ''}`}
                  >
                    <input
                      type="radio"
                      name="serviceLocation"
                      value={option.value}
                      checked={isSelected}
                      disabled={isDisabled}
                      onChange={() => updateServiceLocation(option.value)}
                    />
                    <span className="choice-card__title">{option.label}</span>
                    <span className="choice-card__description">{option.description}</span>
                  </label>
                )
              })}
            </div>
            {needsHomeLocation ? (
              <p className="booking-note">In-home grooming requires an at-home service location.</p>
            ) : null}
          </fieldset>

          {shouldShowAddressField ? (
            <label>
              Service Address
              <input
                name="address"
                value={form.address}
                onChange={updateField}
                placeholder="Street address, city, state, ZIP"
                required={shouldShowAddressField}
              />
            </label>
          ) : null}

          <label>
            Notes
            <textarea name="notes" value={form.notes} onChange={updateField} rows="5" />
          </label>

          <button type="submit" className="button button--primary">
            Email Booking Request
          </button>
        </form>
      </AccentCard>

      {isDateEditorOpen ? (
        <DateEditDialog
          startDate={startDate}
          endDate={endDate}
          minDate={minDate}
          onClose={() => setIsDateEditorOpen(false)}
          onSave={handleDateSave}
        />
      ) : null}

      {isServiceHelpOpen ? <ServiceHelpDialog onClose={() => setIsServiceHelpOpen(false)} /> : null}
    </>
  )
}

const BookingPage = () => {
  const today = startOfDay(new Date())
  const currentMonth = createCalendarDate(today.getFullYear(), today.getMonth(), 1)
  const [step, setStep] = useState(1)
  const [visibleMonth, setVisibleMonth] = useState(currentMonth)
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)
  const calendar = buildCalendarDays(visibleMonth)
  const hasValidDateRange = Boolean(selectedStartDate && selectedEndDate)
  const isShowingCurrentMonth = isSameMonth(visibleMonth, currentMonth)

  const handleDateSelection = (date) => {
    if (compareDates(date, today) < 0) {
      return
    }

    if (!selectedStartDate || selectedEndDate) {
      setSelectedStartDate(date)
      setSelectedEndDate(null)
      return
    }

    if (compareDates(date, selectedStartDate) < 0) {
      setSelectedStartDate(date)
      return
    }

    setSelectedEndDate(date)
  }

  const handleDateRangeSave = (nextStartDate, nextEndDate) => {
    if (compareDates(nextStartDate, today) < 0 || compareDates(nextEndDate, today) < 0) {
      return
    }

    setSelectedStartDate(nextStartDate)
    setSelectedEndDate(nextEndDate)
  }

  const calendarMessage = !selectedStartDate
    ? 'Select a start date to begin.'
    : !selectedEndDate
      ? 'Select an end date to complete your booking window.'
      : `Selected dates: ${formatDateRange(selectedStartDate, selectedEndDate)}`

  return (
    <div className="page">
      <PageIntro
        eyebrow="Booking"
        title="Plan your dates with a simple, guided booking flow."
        description={bookingPage.intro}
      />

      <BookingProgress step={step} />

      {step === 1 ? (
        <AccentCard className="calendar-card">
          <div className="calendar-card__shell">
            <div className="calendar-card__header">
              <div>
                <h2 className="section-card__title">Choose dates</h2>
                <p className="calendar-card__hint">{calendarMessage}</p>
              </div>
            </div>

            <div className="calendar-card__frame">
              <div className="calendar-widget__header">
                <div className="calendar-nav" aria-label="Calendar month navigation">
                  <button
                    type="button"
                    className="calendar-nav__button"
                    disabled={isShowingCurrentMonth}
                    onClick={() => setVisibleMonth((current) => shiftMonth(current, -1))}
                  >
                    Prev
                  </button>
                  <span className="calendar-card__month">{calendar.label}</span>
                  <button
                    type="button"
                    className="calendar-nav__button"
                    onClick={() => setVisibleMonth((current) => shiftMonth(current, 1))}
                  >
                    Next
                  </button>
                </div>
              </div>

              <div className="calendar-grid">
                {weekdayLabels.map((label) => (
                  <span key={label} className="calendar-grid__label">
                    {label}
                  </span>
                ))}

                {calendar.days.map((day) => {
                  if (!day.date) {
                    return (
                      <span key={day.key} className="calendar-grid__day is-empty" aria-hidden="true">
                        {day.label}
                      </span>
                    )
                  }

                  const isDisabled = compareDates(day.date, today) < 0
                  const isStartDate = isSameDay(day.date, selectedStartDate)
                  const isEndDate = isSameDay(day.date, selectedEndDate)
                  const isSelectedDate = isStartDate && !selectedEndDate
                  const isInRange = isDateWithinRange(day.date, selectedStartDate, selectedEndDate)
                  const isToday = isSameDay(day.date, today)

                  return (
                    <button
                      key={day.key}
                      type="button"
                      className={`calendar-grid__day ${isToday ? 'is-today' : ''} ${
                        isDisabled ? 'is-disabled' : ''
                      } ${isStartDate ? 'is-start' : ''} ${isEndDate ? 'is-end' : ''} ${
                        isSelectedDate ? 'is-selected' : ''
                      } ${isInRange ? 'is-in-range' : ''}`.trim()}
                      disabled={isDisabled}
                      onClick={() => handleDateSelection(day.date)}
                      aria-pressed={isStartDate || isEndDate || isInRange}
                    >
                      {day.label}
                    </button>
                  )
                })}
              </div>

              <div className="calendar-card__selection">
                <div className="date-pill">
                  <span className="date-pill__label">Start</span>
                  <span className="date-pill__value">{formatShortDate(selectedStartDate)}</span>
                </div>
                <div className="date-pill">
                  <span className="date-pill__label">End</span>
                  <span className="date-pill__value">{formatShortDate(selectedEndDate)}</span>
                </div>
              </div>

              <div className="calendar-card__actions">
                <button
                  type="button"
                  className="button button--primary"
                  disabled={!hasValidDateRange}
                  onClick={() => setStep(2)}
                >
                  Continue to Booking Request
                </button>
              </div>
            </div>
          </div>
        </AccentCard>
      ) : (
        <BookingForm
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          minDate={today}
          onBack={() => setStep(1)}
          onSaveDates={handleDateRangeSave}
          onShowMonth={(date) => setVisibleMonth(createCalendarDate(date.getFullYear(), date.getMonth(), 1))}
        />
      )}
    </div>
  )
}

const GalleryPage = () => (
  <div className="page">
    <PageIntro
      eyebrow="Gallery"
      title="A polished look at the moments and care families can expect."
      description="This page follows the gallery wireframe with a featured row first, then a larger collection beneath it."
    />

    <section className="section-block">
      <div className="section-block__header">
        <h2 className="section-block__title">Top Paws</h2>
      </div>

      <div className="featured-gallery">
        {galleryPage.featured.map((item) => (
          <AccentCard key={item.title} className="gallery-card">
            <PhotoPlaceholder label={item.title} variant="gallery-feature" theme={item.theme} />
            <h3 className="gallery-card__title">{item.title}</h3>
            <p className="gallery-card__subtitle">{item.subtitle}</p>
          </AccentCard>
        ))}
      </div>
    </section>

    <section className="section-block">
      <div className="section-block__header">
        <h2 className="section-block__title">Gallery</h2>
      </div>

      <div className="gallery-grid">
        {galleryPage.gallery.map((item) => (
          <AccentCard key={item.title} className="gallery-card">
            <PhotoPlaceholder label={item.title} variant="gallery" theme={item.theme} />
            <h3 className="gallery-card__title">{item.title}</h3>
            <p className="gallery-card__subtitle">{item.subtitle}</p>
          </AccentCard>
        ))}
      </div>
    </section>

    <AccentCard>
      <h2 className="section-card__title">Underdog Stories</h2>
      <p className="section-card__body">{galleryPage.footer}</p>
    </AccentCard>
  </div>
)

const ReviewsPage = () => (
  <div className="page">
    <PageIntro
      eyebrow="Reviews"
      title="Professional care people feel good recommending."
      description={reviewsPage.intro}
    />

    <section className="review-grid review-grid--full">
      {reviewsPage.reviews.map((review, index) => {
        const themes = ['plum', 'sage', 'amber', 'sky']
        return (
          <AccentCard key={review.name} className="review-card review-card--full">
            <PhotoPlaceholder label={review.name} variant="review" theme={themes[index % themes.length]} />
            <p className="review-card__quote">{review.quote}</p>
            <p className="review-card__name">{review.name}</p>
            <p className="review-card__context">{review.context}</p>
          </AccentCard>
        )
      })}
    </section>
  </div>
)

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    pets: '',
    message: '',
  })

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    window.location.href = createMailtoLink('Contact Request - Pawsitive Pet Sitting', [
      'Hi Pawsitive Pet Sitting,',
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Pets: ${form.pets}`,
      `Message: ${form.message}`,
      '',
      'Thank you!',
    ])
  }

  return (
    <AccentCard className="form-card">
      <h2 className="section-card__title">Send a message</h2>
      <p className="section-card__body">Submitting this opens your email app with a pre-filled message.</p>

      <form className="inquiry-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={form.name} onChange={updateField} required />
        </label>
        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={updateField} required />
        </label>
        <label>
          Pets
          <input
            name="pets"
            value={form.pets}
            onChange={updateField}
            placeholder="Example: 1 dog, 2 cats"
          />
        </label>
        <label>
          Message
          <textarea name="message" value={form.message} onChange={updateField} rows="5" required />
        </label>

        <button type="submit" className="button button--primary">
          Email Your Message
        </button>
      </form>
    </AccentCard>
  )
}

const ContactPage = () => (
  <div className="page">
    <PageIntro
      eyebrow="Contact"
      title="A simple way to reach out, ask questions, or start care planning."
      description={contactPage.intro}
    />

    <section className="content-grid content-grid--contact">
      <AccentCard className="contact-details">
        <h2 className="section-card__title">Contact details</h2>
        <div className="detail-list">
          {contactPage.details.map((item) => (
            <div key={item.label} className="detail-list__item">
              <span className="detail-list__label">{item.label}</span>
              {item.href && item.internal ? (
                <AppLink to={item.href} className="detail-list__value">
                  {item.value}
                </AppLink>
              ) : item.href ? (
                <a href={item.href} className="detail-list__value">
                  {item.value}
                </a>
              ) : (
                <p className="detail-list__value">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </AccentCard>

      <ContactForm />
    </section>
  </div>
)

const routes = {
  '/': HomePage,
  '/booking': BookingPage,
  '/contact': ContactPage,
  '/gallery': GalleryPage,
  '/meet-the-team': MeetTheTeamPage,
  '/reviews': ReviewsPage,
  '/services': ServicesPage,
}

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath)
  const Page = routes[currentPath] || HomePage

  useEffect(() => {
    const updateCurrentPath = () => {
      setCurrentPath(getCurrentPath())
    }

    window.addEventListener('popstate', updateCurrentPath)
    window.addEventListener(routeChangeEvent, updateCurrentPath)

    return () => {
      window.removeEventListener('popstate', updateCurrentPath)
      window.removeEventListener(routeChangeEvent, updateCurrentPath)
    }
  }, [])

  return (
    <Layout currentPath={currentPath}>
      <Page key={currentPath} />
    </Layout>
  )
}

export default App
