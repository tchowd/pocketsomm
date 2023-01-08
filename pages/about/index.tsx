import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



const About: NextPage = () => {
  return (
    <>
    <Navbar />
    <Container maxW="6xl" >
    </Container>
    <Footer />
    </>
  )
}

export default About
