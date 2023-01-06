import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Recommendation from './food'



const FoodPairing: NextPage = () => {
  return (
    <>
    <Navbar />
    <Container maxW="6xl" >
        <Recommendation />
    </Container>
    <Footer />
    </>
  )
}

export default FoodPairing
