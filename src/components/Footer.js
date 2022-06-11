import React from 'react';
import { FaFacebook,FaGithub,FaInstagram,FaTwitter,FaTwitch} from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-2 px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div className=''>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>

                </ul>
            </div>

            <div className=''>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>

                </ul>
            </div>

            <div className=''>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>

                </ul>
            </div>

            <div className=''>
                <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                <ul>
                    <li className='py-1'>Marketing</li>
                    <li className='py-1'>Analytics</li>
                    <li className='py-1'>Commerce</li>
                    <li className='py-1'>Data</li>
                    <li className='py-1'>Cloud</li>

                </ul>
            </div>

            <div className='col-span-2'>
              <p className='font-bold'>SUBSCRIBE TO OUR NEWS LETTER</p>
              <p className='py-4'> The latest news,article,resources sent to your inbox weekly.</p>
              <form action="flex flex-col sm:flex-grow ">
                  <input className='w-full p-2 mr-4 rounded-md mb-4' type="email" />
                  <button>Subscribe</button>
              </form>
            </div>

        </div>

       <div className='px-2 py-4 flex flex-col max-w-[1240px]  mx-auto justify-between sm:flex-row text-center 
       text-gray-500'>
           <p>2022 LC .All rights reserved</p>
           <div className='flex justify-between  sm:max-w-[300px] pt-4 text-2xl'>
           <FaFacebook/>
           <FaInstagram/>
           <FaGithub/>
           <FaTwitter/>
           <FaTwitch/>
           </div>
           
       </div>

    </div>

    </>
  )
}

export default Footer