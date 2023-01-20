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
      <div >
      {/* <Navbar /> */}
      <Container marginTop={'15rem'}>
        <VStack>
          
          <Text fontSize={'2.9rem'}  className={'primaryFont'}> PocketSomm</Text>
          <Text fontSize={'0.9rem'} paddingRight={'3rem'} paddingLeft={'3rem'}> Welcome to your pocket sommelier. Choose your pairing and let us guide your next meal.</Text>
        <Link href='/winepairing'> 
        <Box marginTop={'2rem'}>
          <Text className={'primaryFont'} fontSize={'1.5rem'}> Wine Pairing</Text>
        </Box>
        </Link>
        <Link href='/foodpairing'> 
        <Box>
          <Text className={'primaryFont'} fontSize={'1.5rem'}> Food Pairing</Text>
        </Box>
        </Link>
        </VStack>
        </Container>
      {/* <Footer /> */}
      </div>
      {/* <Footer /> */}
    </Stack>
  );
};


const DesktopNav = () => {

  return (
    <div >
      {/* <Navbar /> */}
      <Container marginTop={'10rem'}>
        <VStack>
          
          <Text fontSize={'7rem'}  className={'primaryFont'}> PocketSomm</Text>
          <Text> Welcome to your pocket sommelier. Choose your pairing and let us guide your next meal.</Text>
        <Link href='/winepairing'> 
        <Box>
          <Text className={'primaryFont'}> Wine Pairing</Text>
        </Box>
        </Link>
        <Link href='/foodpairing'> 
        <Box>
          <Text className={'primaryFont'}> Food Pairing</Text>
        </Box>
        </Link>
        </VStack>
        </Container>
      {/* <Footer /> */}
      </div>
  );
};

