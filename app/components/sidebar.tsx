import { personal } from '@/data/personalInfo';

import Image from 'next/image';


export default function SideBar() {
 
    const {name,role,education} = personal;
    return (
        <>
        <Image src="" alt="" /> 
        <h2>{name}</h2>
        <h2>{role}</h2>
        <p>{education[0]}</p>
        <h3>Contact Me</h3>
        <a href=""></a>
        <p></p>
        </>
    )
}