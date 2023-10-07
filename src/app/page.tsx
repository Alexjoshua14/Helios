import Footer from '@/components/footer'
import About from '@/sections/about'
import Hero from '@/sections/hero'
import Recently from '@/sections/recently'
import Recognition from '@/sections/recognition'
import Work from '@/sections/work'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between page-padding w-full overflow-hidden">
      <Hero />
      <About />
      <Work />
      <Recognition />
      <Recently />
      <Footer />
    </main>
  )
}
