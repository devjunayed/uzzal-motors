import Banner from '@/components/homepage/Banner/Banner'
import CountUp from '@/components/homepage/CountUp/CountUp'
import Footer from '@/components/homepage/Footer/Footer'
import Heading from '@/components/homepage/Heading/Heading'
import OurEquipment from '@/components/homepage/OurEquipment/OurEquipment'
import WhyUs from '@/components/homepage/WhyUs/WhyUs'
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
