import Footer from '@/components/footer'
import About from '@/sections/about'
import Hero from '@/sections/hero'
import Recently from '@/sections/recently'
import Recognition from '@/sections/recognition'
import Work from '@/sections/work'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between page-padding">
      <Hero />
      <About />
      <Work />
      <Recognition />
      <Recently />
      <Footer />
    </main>
  )
}
