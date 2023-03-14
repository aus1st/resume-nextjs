import { personal } from '@/data/personalInfo';

import Image from 'next/image';
import { Envelope } from './icons/envelope';
import { GitHub } from './icons/git';
import { Linkedin } from './icons/linkedin';
import { Twitter } from './icons/twitter';


export default function SideBar() {
 
    const {name,role,education,contactLinks} = personal;
    return (

        <div className='bg-black flex flex-col h-auto sm:h-screen content-between w-full sm:justify-around sm:fixed sm:w-1/3'>
            <div className='text-white p-10 flex flex-col items-center'>
        
        <Image
        priority
        width={300}
        height={300}
        className='rounded-full h-full mb-6' 
        src='/images/profile-pic.jpg' alt='profile picture'
        aria-label='profile picture' /> 

       <div className="text-center">
         
        <h1 className='mb-8 text-4xl'>{name}</h1>
        <h2 className='mb-2'>{role}</h2>
        <p className='mb-2'>{education[0]}</p>
        <div className="text-white text-center mb-4 mt-4 sm:mt-8 ">

        
        <h3 className=''>Contact Me</h3>
        </div>
        <div className='flex flex-row justify-center my-2 gap-2'>
        <a className='icons-contactme' href={contactLinks?.[0]} aria-label="email link"><Envelope/></a>
        <a className='icons-contactme' href={contactLinks?.[1]} aria-label="twitter link"><Twitter/></a>
        <a className='icons-contactme' href={contactLinks?.[2]} aria-label="linkedin link"><Linkedin/></a>
        {/* <a href={contactLinks?.[3]} aria-label="git link"><GitHub/></a> */}
        </div>
        </div>
        </div>
        </div>      
        
    )
} 