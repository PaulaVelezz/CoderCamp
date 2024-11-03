import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className='bg-[#f9f900] rounded-t-2xl flex flex-col justify-center items-center gap-5 w-full'>
      <section className='flex justify-center items-center gap-6 w-full p-4'>
        <div className='w-1/2 flex flex-col justify-between items-start gap-14'>
          <div>
            <ul className='list-none text-stone-800 flex gap-6 items-center font-semibold font-drukTrial text-3xl'>
              <li className='border border-stone-800 rounded-2xl px-8 py-5'><a href="#">Home</a></li>
              <li className='border border-stone-800 rounded-2xl px-8 py-5'><a href="#">About</a></li>
              <li className='border border-stone-800 rounded-2xl px-8 py-5'><a href="#">Contact</a></li>
            </ul>
          </div>
          
          
          <h3 className='font-drukTrialWide text-8xl text-violet-800 font-bold'>Say Hi! 👋</h3>
        </div>
        <div className='bg-stone-800 rounded-2xl list-none w-1/2 text-4xl'>
          <ul>
            <li className='h-20 w-20 flex justify-center items-center bg-stone-100 text-violet-800 rounded-full border-2 border-violet-800'><a href="#"><FaLinkedinIn /></a></li>
            <li className='h-20 w-20 flex justify-center items-center bg-stone-100 text-violet-800 rounded-full border-2 border-violet-800'><a href="#"><FaGithub /></a></li>
            <li className='h-20 w-20 flex justify-center items-center bg-stone-100 text-violet-800 rounded-full border-2 border-violet-800'><a href="#"><IoIosMail /></a></li>
          </ul>
        </div>
      </section>

      <div className='text-stone-800 p-4 w-full'>
        <div className='h-[2px] bg-violet-800 mt-4 mb-4'></div>
        <p>© 2024. Desarrollado por <span className='font-semibold'>PaulaVelez</span>.</p>
      </div>
    </footer>
  )
}

export default Footer