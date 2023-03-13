import { Inter } from 'next/font/google'
import AboutMe from './components/aboutme'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <AboutMe/>
    </div>
  )
}
