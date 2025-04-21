import OpenAI from "openai";
import { ResponsesModel } from "openai/resources/shared";

type Options = {
  maxOutputTokens?: number;
  model?: ResponsesModel;
}

type Params = {
  data: string | OpenAI.Responses.ResponseInput;
  options?: Options;
}

export class SendChatGpt {
  async execute({ data, options }: Params) {
    if (!process.env.OpenAIApiKey) throw new Error('Inform your OpenAI ApiKey');
    const client = new OpenAI({
      apiKey: process.env.OpenAIApiKey,
    });

    const response = await client.responses.create({
      model: options?.model || 'gpt-4.1-nano',
      max_output_tokens: options?.maxOutputTokens || 150,
      input: data,
    }).asResponse();

    return response;
  }
}
