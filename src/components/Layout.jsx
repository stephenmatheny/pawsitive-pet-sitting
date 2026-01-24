import Header from './Header'
import Footer from './Footer'
import ScrollToHash from './ScrollToHash'
import { Analytics } from "@vercel/analytics/react";


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen page-gradient text-main">
      <ScrollToHash />
      <Header />
      <main>{children}</main>

      <Analytics />

      <Footer />
    </div>
  )
}

export default Layout
