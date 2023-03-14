import { professionalExp } from "@/data/personalInfo";
import { useId } from "react";

export default function ProfExp() {
    const profExpData= professionalExp;

    return (
        <section>
        <h2 className="font-bold my-4">{profExpData.title}</h2>
        
        <div className="flex flex-col gap-3">
            
            {profExpData.experiences.map( (e,i)=> (
             
            <div key={`${e.org}_${i}`} className="flex flex-col rounded-lg">        
      
            <span  className={`h-2 ${e.current ? 'bg-green-400':'bg-gray-400'}`}/>
                    
            <div className="bg-slate-100 p-6 drop-shadow-md rounded-md">
                <h3 className="text-2xl font-semibold">{e.org}</h3>
                 <h3 className="text-lg font-semibold">{e.role}</h3>
                 <p>{e.description}</p>
            </div>
            
            </div>
            ))}

        </div>   


        </section>       
    )
}