export const brand = {
  name: 'Pawsitive Pet Sitting',
  email: 'pawsitivepetsitting@example.com',
  phoneLabel: 'Call or text details available on request',
  footerContacts: [
    {
      kind: 'email',
      label: 'Email',
      value: 'pawsitivepetsitting@example.com',
      href: 'mailto:pawsitivepetsitting@example.com',
    },
    {
      kind: 'phone',
      label: 'Phone',
      value: 'Phone details by request',
      href: '/contact',
      internal: true,
    },
    {
      kind: 'instagram',
      label: 'Instagram',
      value: 'Instagram coming soon',
      href: '/contact',
      internal: true,
    },
    {
      kind: 'facebook',
      label: 'Facebook',
      value: 'Facebook coming soon',
      href: '/contact',
      internal: true,
    },
  ],
}

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Meet the Team', path: '/meet-the-team' },
  { label: 'Services', path: '/services' },
  { label: 'Booking', path: '/booking' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/reviews' },
  { label: 'Contact', path: '/contact' },
]

export const homePage = {
  eyebrow: 'Trusted in-home pet care',
  title: 'Pawsitive Pet Sitting',
  tagline: 'Loving, reliable care for your pets and home.',
  servicesSummary:
    'Offering drop-ins, overnight stays, in-home grooming, basic training',
  whyChooseIntro: 'A little extra peace of mind while you’re away.',
  whyChoose: [
    {
      title: 'Family-Like Care',
      description: 'Loving care that feels personal, not rushed.',
      icon: 'heart-home',
    },
    {
      title: 'Photo & Video Updates',
      description: 'Stay connected with consistent check-ins.',
      icon: 'camera',
    },
    {
      title: 'Reliable Visits',
      description: 'Dependable care you can count on.',
      icon: 'shield-check',
    },
    {
      title: 'Loyalty Perks',
      description: 'Rewards for returning families.',
      icon: 'gift-star',
    },
    {
      title: 'Referral Rewards',
      description: 'Share Pawsitive with friends and save.',
      icon: 'paw-share',
    },
  ],
  reviews: [
    {
      name: 'Client Review',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae lorem ac velit mollis ultrices at quis nibh.',
    },
    {
      name: 'Client Review',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, nibh ut blandit posuere, justo tortor facilisis nibh.',
    },
    {
      name: 'Client Review',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, justo vitae egestas suscipit, arcu est vehicula risus.',
    },
  ],
  reviewsLinkLabel: 'More Reviews',
  serviceAreaSubtitle:
    'Proudly serving families across East Texas and surrounding areas.',
  serviceAreaLocations: [
    'Lufkin, TX',
    'Huntington, TX',
    'Houston, TX',
    'College Station, TX',
    'Conroe, TX',
    'Etoile, TX',
    'Nacogdoches, TX',
    'Livingston, TX',
    'Surrounding areas',
  ],
  serviceAreaNote:
    'Don’t see your city? Reach out — nearby areas may be available by request.',
  ctaHeading: 'Ready to Book?',
  cta:
    "Ready to book or have questions? I'd love to help care for your pets.",
}

export const teamPage = {
  intro:
    'Meet the people behind the care. Each visit is guided by consistency, warmth, and respectful communication.',
  ownerCards: [
    { name: 'Owner', role: 'Primary caregiver', badge: 'Lead' },
    { name: 'Arlo', role: 'Zoomies instructor', badge: 'Captain' },
    { name: 'Zena', role: 'Cozy spot inspector', badge: 'Dutchess' },
  ],
  members: [
    // {
    //   name: 'Ramona',
    //   role: 'Lead Partner',
    //   bio:
    //     'Ramona helps create calm routines for busy households and brings a steady, dependable presence to overnight care and repeat visits.',
    //   services: 'Services: overnight stays, drop-ins, routine-based care',
    // },
    {
      name: 'Therese',
      role: 'Partner',
      bio:
        'Therese is especially thoughtful with pets who need extra patience, gentle handling, or a little time to warm up.',
      services: 'Services: companionship visits, shy pets, special attention care',
    },
    {
      name: 'Faith',
      role: 'Partner',
      bio:
        'Faith focuses on consistency, tidy care habits, and helping grooming and daily care feel low-stress from start to finish.',
      services: 'Services: grooming support, feeding routines, daily check-ins',
    },
    {
      name: 'Jessy',
      role: 'Marketing Coordinator',
      bio:
        'Jessy helps manage the stories, updates, and communication touchpoints that keep clients connected while they are away.',
      services: 'Services: client communication, updates, community outreach',
    },
  ],
}

export const servicesPage = {
  note: 'Prices may vary by location, holidays, and care complexity.',
  groups: [
    {
      title: 'Pet Sitting',
      summary:
        'Routine-based care designed to keep pets comfortable and homes feeling looked after while you are away.',
      items: [
        { title: 'Drop-In Visits', icon: 'clock' },
        { title: 'Overnight Stays', icon: 'moon' },
        { title: 'Feeding & Potty Breaks', icon: 'bowl' },
        { title: 'Walks & Medication', icon: 'care-plus' },
        { title: 'Home Care Updates', icon: 'home-note' },
      ],
    },
    {
      title: 'Grooming',
      summary:
        'Gentle grooming support available at my location or in-home when requested and available.',
      items: [
        { title: 'Drop-Off Grooming', icon: 'sparkle' },
        { title: 'Bath & Dry', icon: 'droplet' },
        { title: 'Full-Service Brushing', icon: 'comb' },
        { title: 'Nail Trim & Grind', icon: 'paw' },
        { title: 'Ear Cleaning', icon: 'ear' },
        { title: 'Teeth Brushing', icon: 'tooth' },
        { title: 'Pawsitive Freshen-Up', icon: 'sparkle' },
        { title: 'Dental Treat & Bandanna', icon: 'ribbon' },
      ],
      footnote: 'In-home grooming is available. Prices may vary by location.',
    },
  ],
}

export const bookingPage = {
  intro:
    'Choose your dates first, then share your pet and service details so availability can be confirmed.',
}

export const galleryPage = {
  featured: [
    { title: 'Top Paw', subtitle: 'Happy dog walks', theme: 'plum' },
    { title: 'Whisker Watch', subtitle: 'Cozy cat moments', theme: 'sage' },
    { title: 'Little Wings', subtitle: 'Feathered friends', theme: 'amber' },
    { title: 'Playtime', subtitle: 'Bright, active visits', theme: 'sky' },
  ],
  gallery: [
    { title: 'Morning walk', subtitle: 'Dog care', theme: 'sky' },
    { title: 'Window nap', subtitle: 'Cat care', theme: 'sage' },
    { title: 'Fresh brush-out', subtitle: 'Grooming', theme: 'amber' },
    { title: 'Barn check', subtitle: 'Horse care', theme: 'plum' },
    { title: 'Treat break', subtitle: 'Daily visit', theme: 'rose' },
    { title: 'Backyard zoomies', subtitle: 'Dog care', theme: 'sky' },
    { title: 'Sunbeam stop', subtitle: 'Cat care', theme: 'sage' },
    { title: 'Pawdicure day', subtitle: 'Grooming', theme: 'amber' },
    { title: 'Coop visit', subtitle: 'Chicken care', theme: 'plum' },
    { title: 'Favorite toy', subtitle: 'Play session', theme: 'rose' },
    { title: 'Porch patrol', subtitle: 'Drop-in', theme: 'sky' },
    { title: 'Quiet cuddle', subtitle: 'Companionship', theme: 'sage' },
  ],
  footer:
    'Want your pet featured here someday? Ask about photo updates during visits and stays.',
}

export const reviewsPage = {
  intro:
    'Families trust Pawsitive Pet Sitting for calm communication, steady routines, and care that feels personal.',
  reviews: [
    {
      name: 'Alexandra M.',
      context: 'Multi-pet household',
      quote:
        'The updates were thoughtful, the care was consistent, and our pets were relaxed when we came home. That says everything.',
    },
    {
      name: 'Jordan L.',
      context: 'Weekend travel',
      quote:
        'Every visit happened exactly as promised. We felt informed without needing to worry, which made the whole trip easier.',
    },
    {
      name: 'Priya D.',
      context: 'Senior pet support',
      quote:
        'Gentle handling, dependable routines, and real attention to detail. I would absolutely book again.',
    },
    {
      name: 'Ramirez Family',
      context: 'Home and pet care',
      quote:
        'It felt like our home and pets were being looked after by someone who truly cared, not someone rushing through a checklist.',
    },
  ],
}

export const contactPage = {
  intro:
    'Whether you are ready to schedule care or just want to ask a few questions, we would love to hear about your pets and what you need.',
  details: [
    { label: 'Email', value: 'pawsitivepetsitting@example.com', href: 'mailto:pawsitivepetsitting@example.com' },
    { label: 'Booking', value: 'Start with your preferred dates and pet details', href: '/booking', internal: true },
    { label: 'Service Area', value: 'East Texas and select surrounding areas' },
    { label: 'Updates', value: 'Photo and video updates available during care' },
  ],
}
