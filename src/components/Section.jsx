const Section = ({ id, eyebrow, title, subtitle, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 scroll-mt-24 ${className}`}
      aria-labelledby={id ? `${id}-title` : undefined}
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
