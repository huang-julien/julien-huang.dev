<template>
    <CV :oss-teams :oss-projects :work-experience :education />
</template>

<script setup lang="ts">
import type { OssTeams, OssProjects, WorkExperience } from '~/types/CV'


definePageMeta({
    layout: false
})

const education: string[] = [
    'Web Developer Training - OpenClassrooms',
    'Bachelor\'s Degree in Applied Foreign Languages - UPJV, Amiens',
    'Scientific Baccalaureate with Mathematics Specialization - Lycée Robert de Luzarches, Amiens'
]

const ossTeams: OssTeams[] = [
    {
        title: 'Nuxt Core Team',
        timeline: ['02/2024', 'Present']
    },
    {
        title: 'Nuxt Insider Team',
        timeline: ['2023', '2024']
    },
    {
        title: 'VueUse PR&Triage Team',
        timeline: ['2024', 'Present']
    },
]

const ossProjects: OssProjects[] = [
    {
        name: 'Nuxt',
        role: ['Core Team', 'Maintainer', 'Issue Triage'],
        url: 'https://nuxt.com',
        description: 'Part of the Nuxt Core Team, working on the Nuxt framework and its ecosystem.'
    },
    {
        name: 'nuxt-applicationinsights',
        role: ['Author', 'Maintainer'],
        url: 'https://github.com/huang-julien/nuxt-applicationinsights',
    },
    {
        name: 'nitro-applicationinsights',
        role: ['Author', 'Maintainer'],
        url: 'https://github.com/huang-julien/nitro-applicationinsights',
    },
    {
        name: 'nitro-opentelemetry',
        role: ['Author', 'Maintainer'],
        url: 'https://github.com/huang-julien/nitro-opentelemetry',
    },
    {
        name: '@nuxt/scripts',
        role: ['Co-author', 'Maintainer'],
        url: 'https://scripts.nuxt.com/',
        description: 'A module created in collaboration between the (former) Aurora Team and the Nuxt WebPerf team, providing best practices for third-party scripts in Nuxt.'
    }
]

const workExperience: WorkExperience[] = [
    {
        company: 'Leetchi',
        country: 'France',
        title: 'Frontend Developer',
        timeline: ['2022', 'Present'],
        subtitle: 'Frontend Lead, responsible for guiding and mentoring other developers.',
        stack: ['Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Cypress', 'ASP.NET'],
        description: [
            "Developed the complete redesign of Leetchi's front office using Nuxt 3",
            "Developed new features and maintained both the front office and back office",
            "Gained expertise in ASP.NET",
            "Supported QA with Cypress testing",
            "Participated in technical decisions and design",
            "Responsible for frontend architecture decisions",
        ]
    },
    {
        company: 'HSK Digital',
        country: 'France',
        title: 'Frontend Developer',
        timeline: ['2020', '2022'],
        stack: ['Nuxt 2', 'Vue 2', 'Vue 3', 'Magento'],
        description: [
            'development of an internal project from scratch using Vue.js',
            'Contributed to Magento 2 integration and customization efforts'
        ]
    }
]
</script>