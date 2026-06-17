import { brand } from '../data/content'
import fullLogo from '../assets/full-logo.svg'
import AppLink from './AppLink'
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
} from './SiteIcons'

const iconByKind = {
  email: MailIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  phone: PhoneIcon,
}

const FooterContact = ({ contact }) => {
  const Icon = iconByKind[contact.kind]
  const icon = (
    <>
      <span className="site-footer__icon" aria-hidden="true">
        <Icon width="18" height="18" />
      </span>
      <span className="site-footer__icon-label">{contact.label}</span>
    </>
  )

  if (contact.href && contact.internal) {
    return (
      <AppLink to={contact.href} className="site-footer__icon-link" aria-label={contact.label}>
        {icon}
      </AppLink>
    )
  }

  if (contact.href) {
    return (
      <a href={contact.href} className="site-footer__icon-link" aria-label={contact.label}>
        {icon}
      </a>
    )
  }

  return (
    <span className="site-footer__icon-link is-static" aria-label={contact.label}>
      {icon}
    </span>
  )
}

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand-panel">
          <img
            src={fullLogo}
            alt={`${brand.name} logo`}
            className="site-footer__logo-image"
          />
        </div>

        <div className="site-footer__lead">
          <p className="site-footer__title">Stay Connected</p>
          <div className="site-footer__icons">
            {brand.footerContacts.map((contact) => (
              <FooterContact key={contact.kind} contact={contact} />
            ))}
          </div>
          <p className="site-footer__note">
            Reach out anytime for booking questions, care details, or service availability.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
