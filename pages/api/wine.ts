import type { NextApiRequest, NextApiResponse } from 'next'
import { 
  OpenAIApi,
  Configuration, 
  CreateCompletionResponseChoicesInner,
} from 'openai';

type Data = {
  output: CreateCompletionResponseChoicesInner | undefined
}

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_SECRET_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "output the best 5 wine pairings in this format: year, name, region. next give an explaination why it matches the food.";


async function generateDish(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const baseCompletion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${basePromptPrefix}${req.body.userInput}`,
      temperature: 0.7,
      max_tokens: 250,
    });
    
    const basePromptOutput = baseCompletion.data.choices.pop();
  
    console.info(`Prompt output from the OpenAI API: ${basePromptOutput}`)

    res.status(200).json({ output: basePromptOutput });
  } catch (error) {
    console.log(error);
  }
};

export default generateDish;