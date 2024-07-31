import Banner from '@/components/ui/Banner/Banner'
import CountUp from '@/components/ui/CountUp/CountUp'
import Footer from '@/components/ui/Footer/Footer'
import Heading from '@/components/ui/Heading/Heading'
import Navbar from '@/components/ui/Navbar/Navbar'
import OurEquipment from '@/components/ui/OurEquipment/OurEquipment'
import WhyUs from '@/components/ui/WhyUs/WhyUs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Banner />
      <CountUp />
      <Heading>Why Us</Heading>
      <WhyUs />
      <Heading>Our Equipment</Heading>
      <OurEquipment />
      <Footer />
    </div>
  )
}

export default Home
