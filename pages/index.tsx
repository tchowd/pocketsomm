import type { NextPage } from 'next'
import { Center, Container, Flex, HStack, Link, Stack, useColorModeValue, VStack } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const Home: NextPage = () => {
  return (
    <>
    <Navbar />  
    <Container maxW={'6xl'} >  
     
      <Flex display={{ base: 'none', md: 'flex' }}>
              <DesktopNav />
        </Flex>

        <MobileNav />
    </Container>
    
    </>
  )
}

export default Home




const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      display={{ md: 'none' }}
      >
      <Navbar />
      <Footer />
    </Stack>
  );
};


const DesktopNav = () => {

  return (
    <div >
      {/* <Navbar />
      <Footer /> */}
      </div>
  );
};

