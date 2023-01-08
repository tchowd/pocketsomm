import type { NextPage } from 'next'
import { Text, Center, Container, Flex, HStack, Link, Stack, useColorModeValue, VStack, Box } from '@chakra-ui/react'
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
      {/* <Navbar /> */}
      <Center>
        <VStack>
        <Text> PocketSomm</Text>
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
        </Center>
      {/* <Footer /> */}
      </div>
  );
};

