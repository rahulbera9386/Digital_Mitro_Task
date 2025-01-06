
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div className='flex h-screen'>
      <div className='w-1/2 bg-gradient-to-r from-blue-900/70  to-blue-600/80 p-6 text-white flex flex-col justify-center items-center'>
<h1 className="text-4xl font-bold mb-4">Welcome To Digital Mitro</h1>
<p className='text-lg'>Empower your business with our solutions</p>
      </div>
      <div className='w-1/2 flex items-center justify-center p-6'>
        <div className='w-full max-w-md'>
        <Outlet/>
        </div>
      
      </div>
    </div>
  )
}

export default Auth
