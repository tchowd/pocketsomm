import React, {useState} from 'react'
import { Box, Button, Center, Container, Text, Textarea } from '@chakra-ui/react'

const Recommendation = () => {

    const [userInput, setUserInput] = useState('');
    const [openaiOutput, setOpenaiOutput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

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
    console.log(test)

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
                    placeholder='Enter a dish to pair...'
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
            

                {openaiOutput.split(/(\d+\.\s)/).map((openaiOutput: any) =>
                <Box >{openaiOutput.split((string: string) => string.trim() !== "")}</Box>)
                }



            


                

            </Box>
            <br></br>
            {/* {openaiOutput} */}
            </Center>
        </Container>
    )
}
export default Recommendation