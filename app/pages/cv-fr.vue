

<template>
    <CV :oss-teams :oss-projects :work-experience :education />
</template>

<script setup lang="ts">
import type { OssTeams, OssProjects, WorkExperience } from '~/types/CV'


definePageMeta({
    layout: false
})

const education: string[] = [
    'Formation Devéloppeur Web - OpenClassrooms',
    'Licence en langues étrangères appliquées - UPJV, Amiens',
    'Baccaulauréat Scientifique Spé Math - Lycée Robert de luzarches, Amiens'
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
        role: ['Core Team', 'Mainteneur', 'Issue Triage'],
        url: 'https://nuxt.com',
        description: 'Membre de la Core Team, travaillant sur le framework Nuxt et son écosystème.'
    },
    {
        name: 'nuxt-applicationinsights',
        role: ['Auteur', 'Mainteneur'],
        url: 'https://github.com/huang-julien/nuxt-applicationinsights',
    },
    {
        name: 'nitro-applicationinsights',
        role: ['Auteur', 'Mainteneur'],
        url: 'https://github.com/huang-julien/nitro-applicationinsights',
    },
    {
        name: 'nitro-opentelemetry',
        role: ['Auteur', 'Mainteneur'],
        url: 'https://github.com/huang-julien/nitro-opentelemetry',
    },
    {
        name: '@nuxt/scripts',
        role: ['Co-Auteur', 'Mainteneur'],
        url: 'https://scripts.nuxt.com/',
        description: 'Module créé en collaboration entre l\'équipe Aurora et l\'équipe Nuxt WebPerf, fournissant les meilleures pratiques pour les scripts tiers dans Nuxt.'
    }
]

const workExperience: WorkExperience[] = [
    {
        company: 'Leetchi',
        country: 'France',
        title: 'Développeur Frontend',
        timeline: ['2022', 'Present'],
        subtitle: 'Référent Front',
        stack: ['Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Cypress', 'ASP.NET'],
        description: [
            "Développement de la refonte complète du frontoffice de Leetchi en utilisant Nuxt 3",
            "Développement de nouvelles fonctionnalités et maintenance du frontoffice et du backoffice",
            "Montée en compétence sur ASP.NET",
            "Support de l'équipe QA avec les tests Cypress",
            "Participation aux décisions techniques et à la conception",
            "Responsable des décisions d'architecture frontend",
            "Formation et mentorat des autres développeurs frontend",
        ]
    },
    {
        company: 'HSK Digital',
        country: 'France',
        title: 'Développeur Frontend',
        timeline: ['2020', '2022'],
        stack: ['Nuxt 2', 'Vue 2', 'Vue 3', 'Magento'],
        description: [
            'Développement d\'un projet interne from scratch en utilisant Vue.js',
            'Intégrateur Magento 2'
        ]
    }
]


</script>