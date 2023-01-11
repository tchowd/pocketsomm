import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Recommendation from './wine'



const WinePairing: NextPage = () => {
  return (
    <>
    <Navbar />
    <Container maxW="8xl" >
        <Recommendation />
    </Container>
    {/* <Footer /> */}
    </>
  )
}

export default WinePairing
