import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

export const runtime = "edge"

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openAi = new OpenAIApi(config)

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant. You explain software engineering concepts.",
      },
      ...messages,
    ],
  })

  const stream = await OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
