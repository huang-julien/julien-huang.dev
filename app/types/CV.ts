
export interface OssTeams {
    title: string
    timeline: [string, string]
}

export interface OssProjects {
    name: string
    role: string[]
    url?: string
    description?: string
}

export interface WorkExperience {
    company: string
    country: string
    title: string
    subtitle?: string
    timeline: [string, string]
    description?: string[]
    stack: string[]
}

export interface Skills {
    name: string
    level: number
}

export interface Education {
    title: string
    place: string
    date: string
}