import { Configuration, OpenAIApi } from 'openai';

export const dalle = async (prompt, key) => {
  const configuration = new Configuration({
    apiKey: key,
  });

  const openai = new OpenAIApi(configuration);
  const response = await openai.createImage({
    prompt: `${prompt}`,
    n: 8,
    size: '1024x1024',
  });

  return response;
};
