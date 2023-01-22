
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

const basePromptPrefix = "output the best 3 pairing food in this format: name and explaination why it matches the wine.";

async function generateWine(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const baseCompletion = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${basePromptPrefix}${req.body.userInput}`,
      temperature: 0.8,
      max_tokens: 410,
      presence_penalty: 0.6,
    });
    
    const basePromptOutput = baseCompletion.data.choices.pop();
  
    console.info(`Prompt output from the OpenAI API: ${basePromptOutput}`)

    res.status(200).json({ output: basePromptOutput });
  } catch (error) {
    console.log(error);
  }
};

export default generateWine;