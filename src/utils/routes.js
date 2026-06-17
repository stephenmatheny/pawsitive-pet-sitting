export const routeChangeEvent = 'pawsitive-route-change'

export const normalizePath = (path) => {
  if (!path) return '/'

  const pathname = path.split('?')[0].split('#')[0]
  return pathname.replace(/\/+$/, '') || '/'
}

export const getCurrentPath = () => {
  if (typeof window === 'undefined') return '/'

  return normalizePath(window.location.pathname)
}

export const navigateTo = (to) => {
  if (typeof window === 'undefined') return

  const nextPath = normalizePath(to)

  if (getCurrentPath() !== nextPath) {
    window.history.pushState(null, '', nextPath)
  }

  window.dispatchEvent(new Event(routeChangeEvent))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
