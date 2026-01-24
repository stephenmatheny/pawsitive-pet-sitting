import Header from './Header'
import Footer from './Footer'
import ScrollToHash from './ScrollToHash'
import { Analytics } from "@vercel/analytics/next"

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <ScrollToHash />
      <Header />
      <main>{children}</main>

      <Analytics />

      <Footer />
    </div>
  )
}

export default Layout
