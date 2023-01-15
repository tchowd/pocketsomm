import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_SECRET_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "output the best 5 pairing food in this format: name, ingredients and explaination why it matches the wine.";
const generateWine = async (req: any, res: any) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.99,
    max_tokens: 1000,
    frequency_penalty: 0.6,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateWine;