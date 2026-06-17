const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  strokeWidth: '1.8',
  viewBox: '0 0 24 24',
}

export const ArrowRightIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
)

export const MailIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
)

export const PhoneIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M8.5 4.5c.5-1 1.7-1.4 2.7-.9l1.5.8c.9.5 1.3 1.6 1 2.6l-.5 1.8c1.1 2.1 2.7 3.8 4.8 4.9l1.8-.5c1-.3 2.1.1 2.6 1l.8 1.5c.5 1 .1 2.2-.9 2.7l-1.6.8c-1.5.7-3.2.8-4.7.2-3.3-1.3-6-4-7.3-7.3-.6-1.5-.5-3.2.2-4.7z" />
  </svg>
)

export const InstagramIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </svg>
)

export const FacebookIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M14.5 8H16V4.8c-.7-.2-1.6-.3-2.4-.3-2.6 0-4.1 1.5-4.1 4.3V11H7v3.5h2.5V20h3.3v-5.5h2.8l.4-3.5h-3.2V9c0-.7.3-1 1.2-1z" />
  </svg>
)

export const HeartHomeIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="m4 11 8-6 8 6" />
    <path d="M6.5 10.5V19h11v-8.5" />
    <path d="M12 16.5s-2.8-1.6-2.8-3.6c0-1 .7-1.7 1.6-1.7.6 0 1 .2 1.2.7.2-.5.6-.7 1.2-.7.9 0 1.6.7 1.6 1.7 0 2-2.8 3.6-2.8 3.6Z" />
  </svg>
)

export const CameraIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M4.5 8.5h3l1.2-2h6.6l1.2 2h3a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 19.5 18.5h-15A1.5 1.5 0 0 1 3 17v-7A1.5 1.5 0 0 1 4.5 8.5Z" />
    <circle cx="12" cy="13.5" r="3.25" />
  </svg>
)

export const ShieldCheckIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M12 4.5c2.1 1.4 4.5 2.1 7 2.3v4.9c0 4.4-2.8 7.6-7 8.8-4.2-1.2-7-4.4-7-8.8V6.8c2.5-.2 4.9-.9 7-2.3Z" />
    <path d="m9.5 12.5 1.8 1.8 3.4-3.7" />
  </svg>
)

export const GiftStarIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M4 10h16v10H4z" />
    <path d="M12 10v10" />
    <path d="M4 10h16V7.5A1.5 1.5 0 0 0 18.5 6h-13A1.5 1.5 0 0 0 4 7.5Z" />
    <path d="m12 4.8.7 1.4 1.6.2-1.2 1.1.3 1.6-1.4-.7-1.4.7.3-1.6-1.2-1.1 1.6-.2Z" />
  </svg>
)

export const PawShareIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M8.2 14.8c.7-.9 1.7-1.4 3.8-1.4 2.1 0 3.1.5 3.8 1.4.9 1 .8 2.4-.3 3.1-.7.5-1.7.7-3.5.7s-2.8-.2-3.5-.7c-1.1-.7-1.2-2.1-.3-3.1Z" />
    <circle cx="8" cy="9" r="1.7" />
    <circle cx="11.2" cy="6.8" r="1.6" />
    <circle cx="14.8" cy="6.8" r="1.6" />
    <circle cx="18" cy="9" r="1.7" />
  </svg>
)

export const ClockIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <circle cx="12" cy="12" r="7.5" />
    <path d="M12 8.5v4.2l2.8 1.8" />
  </svg>
)

export const MoonIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M16.9 4.9a7.5 7.5 0 1 0 2.2 14.6A8.7 8.7 0 1 1 16.9 4.9Z" />
  </svg>
)

export const BowlIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M5 13.5h14a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 5 13.5Z" />
    <path d="M7.5 10.5h9" />
    <path d="M10 8.5c.6.4 1 .9 1 1.5" />
    <path d="M14 8.5c-.6.4-1 .9-1 1.5" />
  </svg>
)

export const CarePlusIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M5 14c0-3.2 2.6-5.8 5.8-5.8 1.7 0 3.2.7 4.2 1.9" />
    <path d="M7.2 16.8c1-.7 2.2-1 3.6-1" />
    <path d="M17.5 9.5v6" />
    <path d="M14.5 12.5h6" />
  </svg>
)

export const HomeNoteIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="m4 11 8-6 8 6" />
    <path d="M6.5 10.5V19h11v-8.5" />
    <path d="M10 13.5h4" />
    <path d="M10 16h4" />
  </svg>
)

export const SparkleIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="m12 4.5 1.2 3.3 3.3 1.2-3.3 1.2L12 13.5l-1.2-3.3-3.3-1.2 3.3-1.2Z" />
    <path d="m18 13 0.7 1.8 1.8 0.7-1.8 0.7L18 18l-0.7-1.8-1.8-0.7 1.8-0.7Z" />
  </svg>
)

export const DropletIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M12 4.8c2.6 3 4.6 5.9 4.6 8.4a4.6 4.6 0 1 1-9.2 0c0-2.5 2-5.4 4.6-8.4Z" />
  </svg>
)

export const CombIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M6 9.5h12v3H6z" />
    <path d="M8 12.5v4" />
    <path d="M10.5 12.5v4" />
    <path d="M13 12.5v4" />
    <path d="M15.5 12.5v4" />
  </svg>
)

export const PawIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M8.2 14.8c.7-.9 1.7-1.4 3.8-1.4 2.1 0 3.1.5 3.8 1.4.9 1 .8 2.4-.3 3.1-.7.5-1.7.7-3.5.7s-2.8-.2-3.5-.7c-1.1-.7-1.2-2.1-.3-3.1Z" />
    <circle cx="8" cy="9" r="1.7" />
    <circle cx="11.2" cy="6.8" r="1.6" />
    <circle cx="14.8" cy="6.8" r="1.6" />
    <circle cx="18" cy="9" r="1.7" />
  </svg>
)

export const EarIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M12.3 4.8a4.7 4.7 0 0 1 4.7 4.8c0 2.5-1 3.7-2.7 5.2-.8.7-1.3 1.4-1.3 2.2v1" />
    <path d="M11 18.8c.8 0 1.5-.7 1.5-1.5" />
    <path d="M11 9.8a1.8 1.8 0 1 1 3.5.4" />
  </svg>
)

export const ToothIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M8.4 5.8c1.2 0 2 .4 3.6.4s2.4-.4 3.6-.4c1.7 0 3 1.5 3 3.6 0 2.7-1.2 5.7-2.8 8-.6.8-1.6.7-1.9-.3l-.7-2.2c-.2-.6-.9-.6-1.1 0l-.7 2.2c-.3 1-1.3 1.1-1.9.3-1.6-2.3-2.8-5.3-2.8-8 0-2.1 1.3-3.6 3-3.6Z" />
  </svg>
)

export const RibbonIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <path d="M8.5 6.5c0 1.6 1.6 2.8 3.5 2.8s3.5-1.2 3.5-2.8" />
    <path d="M8.5 6.5c0-1.6 1.6-2.8 3.5-2.8s3.5 1.2 3.5 2.8" />
    <path d="M8.5 6.5c0 1.3.5 2.3 1.5 3l-1.2 6 3.2-2.3 3.2 2.3-1.2-6c1-.7 1.5-1.7 1.5-3" />
  </svg>
)

export const InfoCircleIcon = (props) => (
  <svg aria-hidden="true" {...baseProps} {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 10.2v5" />
    <path d="M12 7.6h.01" />
  </svg>
)
