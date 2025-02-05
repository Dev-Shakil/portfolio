
import ContactForm from '@/components/ContactForm'
import Education from '@/components/Education'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProfileSection from '@/components/ProfileSection'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <>
    
    <Hero/>
    <Skills/>
    {/* <About/> */}
    <ProfileSection/>
    <Education/>
    <Projects/>
    <ContactForm/>
    {/* <Contact/> */}
    <div className=" bg-gray-700">
    <Footer/>
    </div>
    </>
  )
}
