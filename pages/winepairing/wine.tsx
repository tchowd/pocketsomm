import React, {useState} from 'react'
import { Box, Button, Center, Container, Divider, Flex, Heading, HStack, Link, Stack, Text, Textarea, useColorModeValue, VStack } from '@chakra-ui/react'
import FeaturedWine from './featured';
import Footer from '../components/Footer';


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

    const [userInput, setUserInput] = useState('');
      const [openaiOutput, setOpenaiOutput] = useState('')
      const [isLoading, setIsLoading] = useState(false)
  
      const callGenerateEndpoint = async () => {
          setIsLoading(true);
          console.log("Calling OpenAI...")
          const response = await fetch('/api/wine', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*',
              },
              body: JSON.stringify({ userInput }),
          });
          console.log('response', response)
      
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
      <Stack
        bg={'black'}
        display={{ md: 'none' }}
        >
      <Container maxW={'xl'} marginBottom={'18rem'}>
          <VStack marginTop={'1rem'} marginBottom={'5rem'}>
             <Text fontSize="4xl" fontWeight="b" mb={4} className={'primaryFont'}>
                  Wine Pairing
              </Text>
              <Text fontSize="sm" fontWeight="b" marginTop='1rem' paddingRight="2rem" paddingLeft="2rem">
                 Enter the name of a dish below that will be paired with a wine. The more specific the dish, the better the pairing.
              </Text>
          </VStack>
  
          <VStack>
                  <Textarea
                      bg={useColorModeValue('white', 'gray.800')}
                      value={userInput}
                      onChange={userInputChange}
                      placeholder='Enter a dish to pair...'
                      marginTop={'-2rem'}
                      marginBottom={'0.5rem'}
                      paddingRight={'1rem'}
                      isRequired={true}
                      borderColor={'blue.500'}
                      marginRight={'1rem'}
                      size={'lg'}
                      className={'prompt-box-mobile'}
                  />
  
  
                  <Box  
                      className={isLoading ? 'generate-button loading' : 'generate-button'}
                      onClick={callGenerateEndpoint}
                      marginTop={'5rem'}>
                          {isLoading ?
                          <Button 
                          borderRadius={'0.5rem'}
                          color={'white'}
                          >
                          Loading...
                          </Button>
                          :
                          <Button 
                              borderRadius={'0.5rem'}
                              color={'white'}
                              >
                              Discover a Wine
                          </Button>
                          }
                  </Box>
                  </VStack>
  
                  <hr style={{margin: '2rem'}} />
              
              <Box paddingRight='2rem' paddingLeft='2rem'>
                
              {openaiOutput.split(/(\d+\.\s)/).map((openaiOutput: string) => {
                          const splitWineString = openaiOutput.split(" - ")
                          const str = splitWineString.toString()
                          const dishName = str.substring(0, str.indexOf(":"));
                          const dishDescription = str.substring(str.indexOf(":") + 1 , str.length);
                          const dishDescriptionFinal = dishDescription.replace(/^\d+\.\s/, "");
                          return (
                              <Text key={dishName}>
                              <Text as='b' fontSize='1rem' className={'thirdFont'}>{dishName}</Text>
                              <Text marginTop={'0.5rem'} fontSize='sm'>{dishDescriptionFinal}</Text>
  
                               </Text>
                    
                          );
                      })}
                      
                  </Box>
        </Container>
        <Footer />
      </Stack>
    );
  };
  

const DesktopNav = () => {

    const [userInput, setUserInput] = useState('');
    const [openaiOutput, setOpenaiOutput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [newSplitString, setNewSplitString] = useState('')
    const callGenerateEndpoint = async () => {
        
        if (isLoading) return;

        setIsLoading(true);

        const response = await fetch('/api/wine', {
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
        // setIsLoading(false);
    };

    const userInputChange = (event: any) => {
        console.log(event.target.value);
        setUserInput(event.target.value);
    };
    
    const splitStringByNumericOrder = (openaiOutput: string) => {
        const splitString = openaiOutput.split(/(\d+\.\s)/);
        return splitString.filter(string => string.trim() !== "");
      }
    const test = splitStringByNumericOrder(openaiOutput)
    // console.log(test)

    return (

        <Container marginLeft={'10rem'} marginTop={'5rem'}>
            
            <Text fontSize="5xl" fontWeight="b" mb={4} className={'primaryFont'}>
                Wine Pairing
            </Text>
            <Text fontSize="xl" fontWeight="b" marginTop={'-1rem'} className={'secondaryFont'} >
                Enter a dish below that will be paired with a wine. The more specific the dish, the better the pairing.
            </Text>
                <HStack>
                <Textarea
                    bg={useColorModeValue('white', 'gray.800')}
                    value={userInput}
                    onChange={userInputChange}
                    placeholder='Enter a dish to pair...'
                    marginTop={'1rem'}
                    paddingRight={'10rem'}
                    isRequired={true}
                    borderColor={'blue.500'}
                    marginRight={'1rem'}
                    size={'lg'}
                    className={'prompt-box'}
                />


                <div  
                    // className={isLoading ? 'generate-button loading' : 'generate-button'}
                    >
                        {isLoading ?
                        <Button 
                        className={'generate-button'}
                        color={'white'}
                        _hover={{backgroundColor: 'blue.800'}}
                        onClick={callGenerateEndpoint}>
                        Loading...
                        </Button>
                        :
                        <Button 
                            // padding={'0.3rem'}
                            // borderRadius={'0.5rem'}
                            onClick={callGenerateEndpoint}
                            color={'white'}
                            className={'generate-button'}
                            >
                            Discover a Wine
                        </Button>
                        }
                </div>
                </HStack>
                <hr style={{marginTop: '2rem', marginBottom: '2rem'}}></hr>
            
            <Center>
                <VStack>
            <Box> 
                {/* <FeaturedWine /> */}

            </Box>
                <Box>
                    {/* <VerticallyCenter /> */}
                {openaiOutput &&
                    openaiOutput.split(/(\d+\.\s)/).map((openaiOutput: string) => {
                        const splitWineString = openaiOutput.split(" - ")
                        const str = splitWineString.toString()
                        const wineName = str.substring(0, str.indexOf(":"));
                        const wineDescription = str.substring(str.indexOf(":") + 1 , str.length);


                        const wineDescriptionFinal = wineDescription.replace(/^\d+\.\s/, "");
                        return (
                            <div key={wineName}>
                            <Text as='b' fontSize={'1.2rem'} className={'thirdFont'}>{wineName}</Text>
                            <br></br>
                            <Text marginTop={'0.5rem'} className={'secondaryFont'}>{wineDescriptionFinal}</Text>

                             </div>
                        );
                    })}
                </Box>
                </VStack>



            </Center>
            
            
        </Container>
    )
}
export default Recommendation;
