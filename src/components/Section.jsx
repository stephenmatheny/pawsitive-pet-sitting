import { useEffect, useRef } from 'react'

const Section = ({ id, eyebrow, title, subtitle, children, className = '' }) => {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const headingId = id ? `${id}-title` : undefined

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal py-16 sm:py-20 scroll-mt-24 ${className}`}
      aria-labelledby={headingId}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm uppercase tracking-[0.2em] section-eyebrow mb-3">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              id={`${id}-title`}
              className="text-3xl sm:text-4xl font-semibold section-title"
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 text-lg section-subtitle leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  )
}

export default Section
