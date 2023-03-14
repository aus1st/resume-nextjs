"use client";
import { skills } from "@/data/personalInfo";
import { useState } from "react"
import { skillType } from "./models/resumeInfo";

function activeSkills(sType: string) : skillType[] {
    return sType === 'soft' ? skills.soft : skills.hard;
}


export default function Skills() {
    const [activeTab, setActiveTab] = useState('soft');
       
   

    const setBg = (active: string) => activeTab === active? 'bg-yellow-500': 'bg-gray-200';
    const setTextAlign = (tab: string) => tab === 'soft'? 'text-left': 'text-right';
    const tabs = (
        <div>
                <div className="flex gap-1">
               {["soft","hard"].map((el)=>(
                 <button key={el} 
                 className={`btn ${setBg(el)} ${setTextAlign(el)}`} 
                 onClick={()=> setActiveTab(el)}>{el} Skills
                 </button>
               ))}
         </div>
         </div>)   
    
    const content = (
        <ul className={`flex flex-row flex-wrap gap-2 list-none py-2 ${activeTab==='soft'?'justify-start':'justify-end'}`}>
       {activeSkills(activeTab).map(el=>(
        <li className="skill" key={el.text}>
            <span>{el.icon}</span> {el.text}
        </li>
       ))}
      </ul>

    )
    
    return (
       <div>
      {tabs}
    {content}
      

      </div>
     
    )
}