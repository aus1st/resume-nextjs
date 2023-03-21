import * as resumeInfo from "@/app/components/models/resumeInfo"


export const personal: resumeInfo.personalData = {
    name: "Ahmed uddin Siddiqui",
    role: "Manager Ancillary Aapplications Development",
    education: ["Masters in Computer Science"],
    contactLinks: [
        "mailto: emailto:aus1st@gmail.com",
        "https://twitter.com/IamAhmedSiddiqui",
        "https://linkedin.com/aus1st",
        "https://github.com/aus1st"
    ]

}

export const about: resumeInfo.aboutMe = {
    title: "About me",
    body: [
        "Dynamic leader of software development team offering 10 years of experience",
        "managing crucial and mission critical projects. Expert in translating business requirements",
        "into technical solutions and keen about quality, usability, security, and scalability"
    ]
}

export const skills: resumeInfo.skill = {
    soft: [
        { icon: "👂", text: "Requirement Gathering" },
        { icon: "🧱", text: "Analysis and Design" },
        { icon: "👍", text: "Collaborative" },
    ],
    tech: [
        { icon: "📺", text: "Javascript" },
        { icon: "👓", text: "Typescript" },
        { icon: "🎨", text: "tailwindcss" },
        { icon: "🈂", text: "Next.js" },

    ]
}

export const professionalExp: resumeInfo.professionalExp = {
    title: "Professional Experience",

    experiences: [
        {
            role: "Manager Ancillary Application Development",
            org: "JS Bank Ltd.",
            description: "Gather requirements from business functions/Business Analysts, prepare Functional specifications for business and translate requirements into tasks for Solution Development/developers",
            current: true
        },
        {
            role: "Techno Functional Team Lead",
            org: " Infobits.co",
            description: "Analyze the system specification and translate requirements to task specifications for developers",
            current: false
        },
        {
            role: "Senior Software Engineer",
            org: "Infobits.co",
            description: "Develop and implement STP (Straight Thru Processing for RTGS) in various banks of Pakistan and UAE",
            current: false
        },

    ]
}