import { about } from "@/data/personalInfo"
import { useId } from "react";
import Skills from "./skills";
export default function AboutMe(){
    const {title,body} = about;
    const id = useId();
    return (
        <>
        <h2 className="text-2xl mb-6">{title}</h2>
        {body?.map((el,i)=> (
            <p key={`${id}_${i}`} className=''>{el}</p>
        ) )}
        <Skills></Skills>
        </>
    )
}