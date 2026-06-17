import { navigateTo } from '../utils/routes'

const isModifiedEvent = (event) =>
  event.metaKey || event.altKey || event.ctrlKey || event.shiftKey

const AppLink = ({ to, onClick, onNavigate, target, ...props }) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event)
    }

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      target ||
      isModifiedEvent(event)
    ) {
      return
    }

    event.preventDefault()
    navigateTo(to)

    if (onNavigate) {
      onNavigate()
    }
  }

  return <a {...props} href={to} target={target} onClick={handleClick} />
}

export default AppLink
