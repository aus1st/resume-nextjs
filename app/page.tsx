import { Inter } from 'next/font/google'
import AboutMe from './components/aboutme'
import ProfExp from './components/profExp'
import Skills from './components/skills'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
        <AboutMe/>
        <ProfExp/>
    </div>
    
  )
}
