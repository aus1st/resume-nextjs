export interface personalData {
    name: string,
    role: string,
    education: string[],
    contactLinks: string[]
}

export interface aboutMe {
    title: string,
    body: string[],
}

export interface skill {
    soft: skillType[],
    hard: skillType[],
}



export interface skillType {
    icon: string,
    text: string
}


export interface professionalExp {
    title: string,

    experiences: experienceInfo[]
}

interface experienceInfo {
    role: string,
    org: string,
    description: string,
    current: boolean
}