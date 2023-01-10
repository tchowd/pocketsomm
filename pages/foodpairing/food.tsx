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
                    placeholder='What a wine to pair...'
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
                    {openaiOutput.split(/(\d+\.\s)/).map((openaiOutput: string) => {
                        const splitWineString = openaiOutput.split(" - ");
                        let name = splitWineString[0];
                        // console.log('this is the name', name)
                        const description = splitWineString[1];
                        console.log(name, description)
                        name = name.replace(/^\d+\.\s/, "");
                        return (
                        <Text key={name} >
                            <Text>{name}</Text>
                        </Text>

                        );
                    })}
                </Box>
            </Center>
        </Container>
  );
};




export default Recommendation;
