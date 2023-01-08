import React, {useState} from 'react'
import { Box, Button, Center, Container, Divider, Flex, Heading, Link, Stack, Text, Textarea, useColorModeValue, VStack } from '@chakra-ui/react'



const Recommendation = () => {
  return (
    <Container maxW={'6xl'} >   
      <Flex display={{ base: 'none', md: 'flex' }}>
              <DesktopNav />
        </Flex>

        <MobileNav />
    </Container>

  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      display={{ md: 'none' }}
      >
    <Container maxW={'2xl'}>
        <VStack marginTop={'1rem'} marginBottom={'5rem'}>
            <Heading as="h1">experiences</Heading> 
            <Text color={'gray.500'}
                fontSize={{ base: '1xl', sm: '1xl', lg: '1xl' }} 
                marginTop={'1rem'}>
                here are a few of my experiences. please feel free to contact me directly to learn more or peek my{' '}
                <Link color='blue.500' target="_blank" href='https://linkedin.com/in/tchowd'>linkedin</Link>!
            </Text>
            <Divider  marginTop={'2rem'}/>
            <Text fontSize={15}> Analyst @ Ripple Ventures </Text>
            <Text fontSize={15}>Technical Analyst @ Alchemy </Text>
            <Text fontSize={15}>Contributor & DevRel @ Developer DAO </Text>
            <Text fontSize={15}>Software Consultant @ KPMG </Text>
            <Text fontSize={15}>Strategy & SWE @ Scotiabank </Text>
            <Text fontSize={15}>Head Of Digital Marketing @ Toronto Machine Learning Society (TMLS) </Text>
            <Text fontSize={15}>Head Server Assistant @ Alo Food Group </Text>

        </VStack>
      </Container>
    </Stack>
  );
};



const DesktopNav = () => {
    const [userInput, setUserInput] = useState('');
    const [openaiOutput, setOpenaiOutput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const callGenerateEndpoint = async () => {
        setIsLoading(true);
        console.log("Calling OpenAI...")
        const response = await fetch('/api/food', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userInput }),
        });
    
        const data = await response.json();
        const { output } = data;
        console.log("OpenAI replied...", output.text)

        setOpenaiOutput(`${output.text}`);
        setIsLoading(false);
    };

    const userInputChange = (event: any) => {
        console.log(event.target.value);
        setUserInput(event.target.value);
    };

  return (
    <Container margin={'5rem'}>
            <Center>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Recommendation
            </Text>
           

            <Box marginTop={'15rem'}>
                <Textarea
                    value={userInput}
                    onChange={userInputChange}
                    placeholder='Here is a sample placeholder'
                    size='sm'
                    maxW={300}
                />

                <Button 
                    className={isLoading ? 'generate-button loading' : 'generate-button'}
                    onClick={callGenerateEndpoint}>
                        {isLoading ? <span className="loader"></span> : <p>Generate</p>}
                </Button>
            </Box>

            <Box>
                {openaiOutput}
            </Box>
            </Center>
        </Container>
  );
};




export default Recommendation;
