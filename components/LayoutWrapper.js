import { Poppins } from '@next/font/google'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import Header from './Header'

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin']
})

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className={`${poppins.className} flex h-screen flex-col justify-between font-sans`}>
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}
export default LayoutWrapper
