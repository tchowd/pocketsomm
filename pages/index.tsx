import type { NextPage } from 'next'
import { Text, Center, Container, Flex, HStack, Link, Stack, useColorModeValue, VStack, Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const Home: NextPage = () => {
  return (
    <>
    <Navbar />  
    <Center>
    <Container maxW={'6xl'} >  
     
      <Flex display={{ base: 'none', md: 'flex' }}>
          <DesktopNav />
      </Flex>

        <MobileNav />
        
    </Container>
    </Center>
    
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
      {/* <Navbar /> */}
      <Footer />
    </Stack>
  );
};


const DesktopNav = () => {

  return (
    <div >
      {/* <Navbar /> */}
      <Container maxW="6xl" marginTop={'-2rem'}>
        <VStack>
          
          <Text> PocketSomm</Text>
        <Link href='/winepairing'> 
        <Box>
          Wine Pairing
        </Box>
        </Link>
        <Link href='/foodpairing'> 
        <Box>
          Food Pairing
        </Box>
        </Link>
        </VStack>
        </Container>
      {/* <Footer /> */}
      </div>
  );
};

