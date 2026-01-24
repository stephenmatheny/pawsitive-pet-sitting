import { useEffect } from 'react'

const ScrollToHash = () => {
  useEffect(() => {
    const scrollTo = (hash) => {
      if (!hash) return
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    scrollTo(window.location.hash)

    const onHashChange = () => {
      scrollTo(window.location.hash)
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return null
}

export default ScrollToHash
