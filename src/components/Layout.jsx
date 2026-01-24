import Header from './Header'
import Footer from './Footer'
import ScrollToHash from './ScrollToHash'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <ScrollToHash />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
