import ChatComponent from "@/components/ChatComponent"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900'>
      <div className='bg-slate-800 p-4 w-[50rem] rounded-md text-gray-100'>
        <h2 className='text-xl'>Streaming Chat Application</h2>

        <ChatComponent />
      </div>
    </main>
  )
}
