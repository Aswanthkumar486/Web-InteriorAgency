import React from 'react'
import data from '../data/data.json'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Team from '@/components/Teams'
import Testimonials from '@/components/Testimonals'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home({navData,logoData,contactData,testData,teamData,logData,heroData,aboutData,serviceData,projectData}) {
  return (
    <>
    <Navbar data={navData} logo={logData} />
    <Hero data={heroData} />
    <About data={aboutData} />
    <Services data={serviceData} />
    <Projects data={projectData} />
    <Team data={teamData} />
    <Testimonials data={testData} />

    
    <Contact data={contactData} />
    <Footer logo={logoData} navData={navData} />
    </>
  )
}

export async function getStaticProps() {
  return{
    props:{
navData:data.navbar,
logData:data.logo,
heroData:data.hero,
aboutData:data.about,
serviceData:data.services,
projectData:data.projects,
teamData:data.teams,
testData:data.testimonials,
contactData:data.contact,
      logoData: data.logo
    }
  }
}