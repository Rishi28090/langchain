import 'dotenv/config';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';

const model = new ChatGoogleGenerativeAI({
  model: 'gemini-2.0-flash', // gemini-2.0-flash if available in your key
  temperature: 0.7,
  apiKey: process.env.GOOGLE_API_KEY,
});

async function respondInLanguage(message, targetLanguage) {
  const prompt = `You are a helpful assistant. Respond to the following message in ${targetLanguage}, regardless of the input language.
Message: "${message}"`;

  const res = await model.invoke(prompt);

  console.log(res.content);
}

// Example usage
respondInLanguage("how are you", "marathi");
