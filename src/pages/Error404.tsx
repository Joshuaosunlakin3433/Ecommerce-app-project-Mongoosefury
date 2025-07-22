
const Error404 = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-black text-8xl items-center justify-center'>404 Not Found</h1>
        <p className='text-black text-m mt-4'>Your visited page not found, you may go to homepage.</p>
        <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out mt-7'>Back to Homepage</button>
    </div>
  )
}

export default Error404