import { Analytics } from '@vercel/analytics/react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({ children, currentPath }) => {
  return (
    <div className="site-shell">
      <Header currentPath={currentPath} />
      <main className="site-main">{children}</main>
      <Footer />
      <Analytics />
    </div>
  )
}

export default Layout
