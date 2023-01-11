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
            
            <Text fontSize="5xl" fontWeight="b" mb={4} >
                Food Pairing
            </Text>
            <Text fontSize="xl" fontWeight="b" marginTop={'-1rem'} >
                Enter a dish below that will be paired with a wine. The more specific the dish, the better the pairing.
            </Text>
           
                <Textarea
                    value={userInput}
                    onChange={userInputChange}
                    placeholder='Enter a dish to pair...'
                    marginTop={'1rem'}
                    paddingRight={'10rem'}
                    isRequired={true}
                    borderColor={'blue.500'}
                />


                <Button  
                    // className={isLoading ? 'generate-button loading' : 'generate-button'}
                    onClick={callGenerateEndpoint}>
                        {isLoading ? <span className="loader"></span> :
                        <Button 
                            backgroundColor={'blue.400'}
                            padding={'0.3rem'}
                            borderRadius={'0.5rem'}
                            color={'white'}
                            _hover={{backgroundColor: 'blue.800'}}>
                            Select a Dish
                        </Button>}
                </Button>
                <hr style={{marginTop: '2rem', marginBottom: '2rem'}}></hr>
            
            <Box>
            {openaiOutput.split(/(\d+\.\s)/).map((openaiOutput: string) => {
                        const splitWineString = openaiOutput.split(" - ")
                        const str = splitWineString.toString()
                        const dishName = str.substring(0, str.indexOf(":"));
                        const dishDescription = str.substring(str.indexOf(":") + 1 , str.length);
                        const dishDescriptionFinal = dishDescription.replace(/^\d+\.\s/, "");
                        return (
                            <div>
                            <Text as='b'>{dishName}</Text>
                            <Text marginTop={'0.5rem'}>{dishDescriptionFinal}</Text>

                             </div>
                    

                        );
                    })}
                </Box>
        </Container>
  );
};




export default Recommendation;
