import { ModelFusionTextStream, asChatMessages } from "@modelfusion/vercel-ai"
import { Message, StreamingTextResponse } from "ai"
import { ollama, streamText } from "modelfusion"

export const runtime = "edge"

export async function POST(request: Request) {
  const { messages }: { messages: Message[] } = await request.json()

  const model = ollama.ChatTextGenerator({ model: "mistral" }).withChatPrompt()

  const prompt = {
    system:
      "You are a helpful assistant, who will respond to users explaining software engineering concepts.",

    messages: asChatMessages(messages),
  }

  const textStream = await streamText({ model, prompt })

  return new StreamingTextResponse(ModelFusionTextStream(textStream))
}
