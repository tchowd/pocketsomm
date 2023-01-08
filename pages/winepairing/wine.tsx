import React, {useState} from 'react'
import { Box, Button, Center, Container, Text, Textarea } from '@chakra-ui/react'

const Recommendation = () => {

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
    )
}
export default Recommendation