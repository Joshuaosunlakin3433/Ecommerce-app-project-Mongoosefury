import React, {useState} from 'react'
import { IoMdSend } from 'react-icons/io';
import icon from '../assets/icon.svg';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegCopyright, FaXTwitter } from 'react-icons/fa6';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email submitted: ${email}`);
    // Add email submission logic here
  };
  return (
    <footer className='bg-black text-white h-100 w-full flex flex-col items-center gap-13 font-display py-30 justify-center'>
     <div className='max-w-7xl flex items-center font-display h-50 gap-10 mt-3'>
      <div className='flex flex-col items-center font-display h-50 gap-4 text-center'>
      <h1 className='text-2xl font-bold '>Exclusive</h1>
      <p className='font-light'>Subscribe</p>
      <p className='font-light'>Get 10% off your first order</p>
      <form
      onSubmit={handleSubmit}
      className="flex items-center border border-white px-2 py-1 rounded-md w-full max-w-sm"
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-grow text-white placeholder-gray-400 focus:outline-none"
        required
      />
      <button type="submit" className="ml-2 text-white hover:text-gray-300">
        <IoMdSend className='text-3xl' />
      </button>
    </form>
      </div>
      
      <div  className='flex flex-col items-center font-display gap-4 w-50 h-50 text-center'>
      <h1 className='text-2xl font-bold '>Support</h1>
      <p className='font-light'>111 Bijoy sarani, dhaka, DH 1515, Bangladesh</p>
      <p className='font-light'>exclusive@gmail.com</p>
      <p className='font-light'>+88015-88888-9999</p>
       </div>

       <div  className='flex flex-col items-center font-display gap-4 w-50 h-50 text-center'>
      <h1 className='text-2xl font-bold '>Account</h1>
      <a href="" className='font-light font-display hover:text-blue-600'>My Account</a>
      <a href="" className='font-light font-display hover:text-blue-600'>Login/Register</a>
      <a href="" className='font-light font-display hover:text-blue-600'>Cart</a>
      <a href="" className='font-light font-display hover:text-blue-600'>Wishlist</a>
      <a href="" className='font-light font-display hover:text-blue-600'>Shop</a>
       </div>

       <div  className='flex flex-col items-center font-display gap-4 w-50 h-50 text-center'>
      <h1 className='text-2xl font-bold font-display'>Quick Link</h1>
        <div className='flex flex-col items-center gap-2'>
         <a href="" className='font-light font-display hover:text-blue-600'>Privacy Policy</a>
          <a href="" className='font-light font-display hover:text-blue-600'>Terms of use</a>
          <a href="" className='font-light font-display hover:text-blue-600'>FAQ</a>
          <a href="" className='font-light font-display hover:text-blue-600'>Contact</a>
        </div>
       </div>

       <div className='flex flex-col items-center font-display gap-4 w-50 h-50 text-center'>
      <h1 className='text-2xl font-bold font-display'>Download App</h1>
      <div className='flex flex-col items-center gap-2'>
        <p>Save $3 with App New User Only</p>
        <img src={icon} alt="Download App" />
      </div>
      <div className='flex items-center justify-around mt-4 w-50'>
      <FaFacebookF />
      <FaXTwitter />
      <FaInstagram />
      <FaLinkedinIn />
      </div>
       </div>
     </div>
     
     <div className='flex items-center justify-center gap-2 mt-10 border-gray-900 border-t-1 w-full'>
      <div className='flex items-center mt-2 gap-2 justify-center'>
      <FaRegCopyright className='text-gray-500'/>
      <p className='text-sm text-gray-700'>Copyright Rimel 2022. All right reserved</p>
      </div>
     </div>
    </footer>
  )
}

export default Footer