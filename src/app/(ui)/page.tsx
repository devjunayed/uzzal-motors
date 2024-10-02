import Banner from '@/components/homepage/Banner/Banner'
import CountUp from '@/components/homepage/CountUp/CountUp'
import Heading from '@/components/homepage/Heading/Heading'
import OurEquipment from '@/components/homepage/OurEquipment/OurEquipment'
import TopProject from '@/components/homepage/TopProject/TopProject'
import WhyUs from '@/components/homepage/WhyUs/WhyUs'
import Container from '@/components/ui/Container/Container'
import React from 'react'

const Home = () => {
  return (
    <Container>
      <Banner />
      <CountUp />
      <Heading>Why Us</Heading>
      <WhyUs />
      <Heading>Our Equipment</Heading>
      <OurEquipment />
      <Heading>Top Project</Heading>
      <TopProject />
    </Container>
  )
}

export default Home