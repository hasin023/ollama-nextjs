"use client"
import { useChat } from "ai/react"

const ChatComponent = () => {
  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat()

  console.log(messages)

  return (
    <div>
      <form className='mt-12' onSubmit={handleSubmit}>
        <p>Type your Message</p>
        <textarea
          className='mt-2 w-full bg-slate-600 p-2'
          placeholder={"What are data structures and algorithims?"}
          value={input}
          onChange={handleInputChange}
        />
        <button className='rounded-md bg-blue-600 p-2 mt-2'>
          Send message
        </button>
      </form>
    </div>
  )
}

export default ChatComponent
