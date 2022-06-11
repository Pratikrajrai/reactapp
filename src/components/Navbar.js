import React,{useState} from 'react';

import {MenuIcon,XIcon} from '@heroicons/react/outline';
import { Link,animateScroll as scroll } from 'react-scroll'



function Navbar() {
  const[nav,setNav]=useState(false);
  const handleClick=()=>setNav(!nav)
  return (
    <>
 <div className="w-screen h-[80px] fixed  z-10 bg-zinc-200 drop-shadow-lg">
 <div className='px-2 flex justify-between items-center w-full h-full'>
   <div className="flex items-center">
 <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>BRAND.</h1>
<ul className='hidden md:flex'>

<li><Link to="home" smooth={true} offset={-100} duration={500} >Home</Link></li>
<li><Link to="about" smooth={true} offset={-200} duration={500} >About</Link></li>
<li><Link to="support" smooth={true} offset={-50} duration={500} >Support</Link></li>
<li><Link to="platforms" smooth={true} offset={-100} duration={500} >Platforms</Link></li>
<li><Link to="pricing" smooth={true} offset={-50} duration={500} >Pricing</Link></li>


</ul>
   </div>

<div className="hidden md:flex pr-4">
<button className="border-none bg-transparent text-black mr-4">Sign In</button>
<button className='px-8 py-3'>Sign Up</button>
</div>

{/* menu icon */}
<div onClick={handleClick} className="md:hidden mr-4">
{!nav?<MenuIcon className='w-5'/>:<XIcon className='w-5'/>}
</div>
</div>
<ul className={!nav?'hidden':'absolute bg-zinc-200 w-full px-8'}>
<li><Link to="home" smooth={true} duration={500} >Home</Link></li>
<li><Link to="about" smooth={true} offset={50} duration={500} >About</Link></li>
<li><Link to="support" smooth={true} offset={50} duration={500} >Support</Link></li>
<li><Link to="platforms" smooth={true} offset={50} duration={500} >Platforms</Link></li>
<li><Link to="pricing" smooth={true} offset={50} duration={500} >Pricing</Link></li>
<div className='flex flex-col'>
<button className="bg-transparent py-3 px-8 text-black mb-4">Sign In</button>
<button className='px-8 py-3'>Sign Up</button>  
</div>
</ul>
</div>
    </>
  )
} 

export default Navbar