import fullLogo from '../assets/full-logo.svg'

const Footer = () => {
  return (
    <footer className="border-t border-base bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-10 sm:px-6">
        <img
          src={fullLogo}
          alt="Pawsitive Pet Sitting"
          className="h-10 w-auto opacity-70 transition hover:opacity-100"
        />

        <p className="mt-3 text-xs text-muted">
          © {new Date().getFullYear()} Pawsitive Pet Sitting
        </p>
      </div>
    </footer>
  )
}

export default Footer
