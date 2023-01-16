import { Box, Container, HStack, Text } from '@chakra-ui/react'
import React from 'react'

function FeaturedWine() {
  return (
    <Container>
        <Text> Featured Wines </Text>
        <HStack scrollBehavior={'auto'}>
        <Box 
        position={'relative'}
        borderColor={'gray'}
        borderRadius={'lg'}
        rounded={'lg'}
        width={'15rem'}
        height={'20rem'}
        p={2}
        // marginTop={'-2rem'}
        overflow={'hidden'}
        bgGradient='linear(to-l, #e4d4f4, white, white, #e4d4f4)'>
            
        </Box>

        <Box 
        position={'relative'}
        borderColor={'gray'}
        borderRadius={'lg'}
        rounded={'lg'}
        width={'15rem'}
        height={'20rem'}
        p={2}
        // marginTop={'-2rem'}
        overflow={'hidden'}
        bgGradient='linear(to-l, #e4d4f4, white, white, #e4d4f4)'>
            
        </Box>

        <Box 
        position={'relative'}
        borderColor={'gray'}
        borderRadius={'lg'}
        rounded={'lg'}
        width={'15rem'}
        height={'20rem'}
        p={2}
        // marginTop={'-2rem'}
        overflow={'hidden'}
        bgGradient='linear(to-l, #e4d4f4, white, white, #e4d4f4)'>
            
        </Box>

        <Box 
        position={'relative'}
        borderColor={'gray'}
        borderRadius={'lg'}
        rounded={'lg'}
        width={'15rem'}
        height={'20rem'}
        p={2}
        // marginTop={'-2rem'}
        overflow={'hidden'}
        bgGradient='linear(to-l, #e4d4f4, white, white, #e4d4f4)'>
            
        </Box>

        <Box 
        position={'relative'}
        borderColor={'gray'}
        borderRadius={'lg'}
        rounded={'lg'}
        width={'15rem'}
        height={'20rem'}
        p={2}
        // marginTop={'-2rem'}
        overflow={'hidden'}
        bgGradient='linear(to-l, #e4d4f4, white, white, #e4d4f4)'>
            
        </Box>

        
        </HStack>
        
    </Container>
  )
}

export default FeaturedWine