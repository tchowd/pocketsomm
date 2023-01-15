import { Configuration, CreateCompletionResponseChoicesInner, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "output the best 5 wine pairings in this format: year, name, region. next give an explaination why it matches the food.";
const generateDish = async (req: { body: { userInput: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { output: CreateCompletionResponseChoicesInner | undefined; }): void; new(): any; }; }; }) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.99,
    max_tokens: 1000,
    frequency_penalty: 0.6,
    // top_p: 1,
    // best_of: 10,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateDish;