import React, {useState} from 'react'
import { Box, Button, Center, Container, Text, Textarea, VStack } from '@chakra-ui/react'

const Recommendation = () => {

    const [userInput, setUserInput] = useState('');
    const [openaiOutput, setOpenaiOutput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [newSplitString, setNewSplitString] = useState('')
    const callGenerateEndpoint = async () => {
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
        setIsLoading(false);
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

        <Container margin={'5rem'}>
            
            <Text fontSize="5xl" fontWeight="b" mb={4} >
                Wine Pairing
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
                    className={isLoading ? 'generate-button loading' : 'generate-button'}
                    onClick={callGenerateEndpoint}>
                        {isLoading ? <span className="loader"></span> :
                        <Button 
                            backgroundColor={'blue.400'}
                            padding={'0.3rem'}
                            borderRadius={'0.5rem'}
                            color={'white'}
                            _hover={{backgroundColor: 'blue.800'}}>
                            Select a Wine
                        </Button>}
                </Button>
                <hr style={{marginTop: '2rem', marginBottom: '2rem'}}></hr>
            
            <Center>
            <Box>
            
                <Box>
                    {openaiOutput.split(/(\d+\.\s)/).map((openaiOutput: string) => {
                        // console.log(openaiOutput) 
                        const splitWineString = openaiOutput.split(" - ")
                        // let name = splitWineString[0]
                        const str = splitWineString.toString()
                        const wineName = str.substring(0, str.indexOf(":"));
                        const wineDescription = str.substring(str.indexOf(":") + 1 , str.length);


                        // const description = splitWineString[1];
                        const wineDescriptionFinal = wineDescription.replace(/^\d+\.\s/, "");
                        return (
                            <Text key={wineName}>
                            <Text as='b'>{wineName}</Text>
                            <Text marginTop={'0.5rem'}>{wineDescriptionFinal}</Text>

                             </Text>
                    

                        );
                    })}
                </Box>



            </Box>
            </Center>
            
            
        </Container>
    )
}
export default Recommendation