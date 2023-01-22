import type { NextPage } from 'next'
import { Text, Center, Container, Flex, HStack, Link, Stack, useColorModeValue, VStack, Box, Divider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import Marquee from "react-fast-marquee";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'
import HomeTitle from './components/HomeTitle';
import  '../styles/Home.module.css'



const Home: NextPage = () => {
  return (
    <Box backgroundColor={'black'}>
    {/* <Navbar />   */}

    <Center>
    <Container  >  
     
      <Flex  display={{ base: 'none', md: 'flex' }} >
          <DesktopNav />
      </Flex>
        <MobileNav />
        
    </Container>
    </Center>
    
    
    </Box>
  )
}

export default Home




const MobileNav = () => {
  const [width, height] = useWindowSize()
  return (
    <Stack
      display={{ md: 'none' }} style={{marginTop: '2rem', marginBottom:'2rem'}}
      >
        <Box style={{marginTop: '-3.5rem', maxWidth: '414px'}}>
        <HomeTitle />
      </Box>
      <div >
      {/* <Navbar /> */}
      <Container marginTop={'5rem'} padding={'2rem'}>
        <VStack> 
          <Text fontSize={'1.5rem'} > Je suis ton sommelier. </Text>
         <Text fontSize={'1.05rem'} style={{textAlign: 'center', marginBottom: '2rem'}}> Choose your pairing and let us guide your next meal.</Text>
        <Link href='/winepairing' > 
          <Text className={'primaryFont'} fontSize={'1.5rem'}> Wine Pairing</Text>
        </Link>
        <Divider  />
        <Link href='/foodpairing'> 
        <Box>
          <Text className={'primaryFont'} fontSize={'1.5rem'}> Food Pairing</Text>
        </Box>
        </Link>
        </VStack>
        </Container>
      </div>
      <Box style={{marginTop: '6rem', maxWidth: '414px'}}>
        <HomeTitle />
      </Box>
      <Footer />
    </Stack>
  );
};


const DesktopNav = () => {
  const [width, height] = useWindowSize()
  return (
    <Box >
      {/* <Navbar /> */}
      <div style={{marginTop: '-1rem'}}>
        <HomeTitle />
        </div>
      <Container marginTop={'6rem'}  >
        
      <VStack> 
          <Text fontSize={'2.8rem'} > Je suis ton sommelier. </Text>
         <Text fontSize={'1.5rem'} style={{textAlign: 'center', marginBottom: '2rem'}}> Choose your pairing and let us guide your next meal.</Text>
         <HStack spacing={10}>
        <Link href='/winepairing' > 
          <Text className={'primaryFont'} fontSize={'2rem'}> Wine Pairing</Text>
        </Link>
        <Link href='/foodpairing'> 
        <Box>
          <Text className={'primaryFont'} fontSize={'2rem'}> Food Pairing</Text>
        </Box>
        </Link>
        </HStack>
        </VStack>
        </Container>
        <Box style={{marginTop: '10rem'}}>
          <HomeTitle />
        </Box>
        <VStack>
          <Footer />
        </VStack>
        
      </Box>
  );
};

