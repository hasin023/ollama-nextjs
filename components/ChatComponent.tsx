"use client"

import { useChat } from "ai/react"

const ChatComponent: React.FC = () => {
  const { input, handleInputChange, handleSubmit, messages, stop } = useChat()

  console.log(messages)

  return (
    <div className='flex flex-col w-full'>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`whitespace-pre-wrap px-4 py-2 rounded-sm mt-2 ${
            message.role === "user"
              ? "text-gray-100 bg-slate-700"
              : "bg-gray-700 text-teal-500"
          }`}
        >
          <strong>{`${message.role}`}</strong> =&gt; {message.content}
        </div>
      ))}

      <form className='mt-8' onSubmit={handleSubmit}>
        <p className='mt-6'>Type your Message</p>
        <textarea
          className='mt-2 w-full bg-slate-600 p-2'
          placeholder={"What are data structures and algorithms?"}
          value={input}
          onChange={handleInputChange}
        />
        <div className='flex justify-between'>
          <button className='rounded-md bg-indigo-600 p-2 mt-2'>
            Send message
          </button>

          <button
            onClick={stop}
            className='rounded-md bg-orange-800 text-white p-2 mt-2'
          >
            Stop
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatComponent
