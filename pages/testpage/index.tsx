import { Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Recommendation from './test'



const TestPage: NextPage = () => {
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

export default TestPage
