<template>
    <div class="page bg-white text-gray-900 p-4 size-[A4] w-[800px] mx-auto flex flex-col gap-4">
        <header class="grid grid-cols-12 gap-8 px-2 pb-2 items-center border-b border-p-yellow">
            <NuxtPicture :modifiers="{}" src="/amsterdam_profile.jpg" class="rounded-full col-span-2 overflow-hidden" />

            <h1 class="col-span-2 text-2xl font-bold text-p-blue">
                Julien Huang
            </h1>

            <div class="col-span-3">
                <h2 class="text-lg">{{ t('title') }}</h2>
            </div> 

            <div class="text-xs col-span-5 flex flex-col justify-around h-full">
                <a href="https://github.com/huang-julien" target="_blank" rel="noopener noreferrer"
                    class="flex items-center gap-2">
                    <Icon name="bi:github" />
                    @huang-julien
                </a>
                <a href="https://linkedin.com/in/julien-huang/" target="_blank" rel="noopener noreferrer"
                    class="flex items-center gap-2">
                    <Icon name="bi:linkedin" />
                    julien-huang
                </a>
                <a href="https://www.julien-huang.dev/" target="_blank" rel="noopener noreferrer"
                    class="flex items-center gap-2">
                    <Icon name="mdi:web" />
                    https://www.julien-huang.dev/
                </a>
            </div>
        </header>

        <section>
            <p class="text-xs text-gray-500 text-justify whitespace-pre-wrap">
                {{ t('introduction') }}
            </p>
        </section>

        <main class="grid gap-8 text-lg">
            <div class="flex flex-col gap-4">
                <section>
                    <h2 class="flex items-center gap-2 border-b border-p-yellow pb-1 px-4 w-fit font-bold text-lg">
                        <Icon name="material-symbols:work" />

                        {{ t('work.title') }}
                    </h2>
                    <div class="flex flex-col gap-4 mt-4">
                        <div class="flex flex-col gap-2">
                            <ul class="list-disc pl-5">
                                <li v-for="work in workExperience" :key="work.company" class="mb-2 flex flex-col gap-1">
                                    <span class="text-sm font-bold">{{ work.company }} - {{ work.country }}</span>
                                    <span class="inline-flex justify-between items-center">
                                        <span class="text-xs text-gray-500">{{ work.title }}</span>
                                        <span class="text-xs text-gray-500">{{ work.timeline[0] }} - {{
                                            work.timeline[1] }}</span>
                                    </span>
                                    <span class="text-2xs text-gray-500">{{ work.subtitle }}</span>
                                    <ul class="list-disc pl-5">
                                        <li v-for="desc in work.description" :key="desc" class="text-2xs text-gray-500">
                                            {{ desc }}
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div class="flex flex-col gap-4">
                <section class="flex flex-col gap-4">
                    <h2 class="flex items-center gap-2 border-b border-p-yellow pb-1 px-4 w-fit font-bold text-lg">
                        <Icon name="bi:github" />

                        Open-source
                    </h2>
                    <div class="flex flex-col gap-2 text-sm pl-5">
                        <!-- <section class="flex flex-col gap-1">
                            <h3 class="text-sm font-bold">Teams</h3>
                            <ul class="list-disc pl-2">
                                <li v-for="team in ossTeams" :key="team.title" class="text-xs flex flex-col gap-1">
                                    <span>{{ team.title }}</span>
                                    <span class="text-gray-500">{{ team.timeline[0] }} - {{ team.timeline[1]
                                        }}</span>
                                </li>
                            </ul>
                        </section> -->
                        <section class="grid gap-1">
                            <h3 class="text-sm font-bold">{{ t('oss.projects.title') }}</h3>
                            <ul class="list-disc text-xs grid grid-cols-2 grid gap-2">
                                <li v-for="project in ossProjects" :key="project.name" class="flex">
                                    <NuxtLink external :href="project.url" target="_blank" rel="noopener noreferrer"
                                        class="flex flex-col ">
                                        <span class="mb-1">{{ project.name }}</span>
                                        <span class="text-2xs text-gray-500">{{ project.role.join(', ') }}</span>
                                        <span class="text-2xs text-gray-500">{{ project.description }}</span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
            </div>
                <section>
                    <h2 class="flex items-center gap-2 border-b border-p-yellow pb-1 px-4 w-fit font-bold text-lg">
                        <Icon name="carbon:skill-level" />

                        {{ t('skills.title') }}
                    </h2>

                    <div class="mt-4 text-xs">
                        <ul class="list-disc grid grid-cols-4 pl-5 gap-x-4">
                            <li v-for="skill in skills" class="flex justify-between">
                                <span>{{ skill.name }}</span> 
                            </li>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2 class="flex items-center gap-2 border-b border-p-yellow pb-1 px-4 w-fit font-bold text-lg">
                        <Icon name="material-symbols:school" />

                        {{ t('education.title') }}
                    </h2>
                    <div class="mt-4 text-xs">
                        <ul class="list-disc pl-5">
                            <li v-for="edu in education" class="flex flex-col gap-1">
                                <span class="font-bold">{{ edu.title }}</span>
                                <span>
                                    {{ edu.place }} - {{ edu.date }}
                                </span>
                            </li>
                        </ul>
                    </div>
                </section>

            </div>
        </main>

        <footer class="flex gap-4">
            <section>
                <h2 class="flex items-center gap-2 border-b border-p-yellow pb-1 px-4 w-fit font-bold text-lg">
                    <Icon name="mdi:contact" />

                    Contact
                </h2>

                <div class="mt-4 text-xs">
                    <ul class="list-disc pl-5">
                        <li class="flex flex-col gap-1">
                            <a :href="`mailto:${contact.email}`">
                                {{ contact.email }}
                            </a>
                            <span class="text-xs text-gray-500">{{ contact.phone }}</span>
                            <span class="text-xs text-gray-500">{{ contact.address }}</span>
                        </li>
                    </ul>
                </div>

            </section>

            <section class="flex-1">
                <h2 class="flex items-center gap-2 border-b border-p-yellow pb-1 px-4 w-fit font-bold text-lg">
                    <Icon name="proicons:game" />

                    Hobbies
                </h2>
                <div class="mt-4 text-xs">
                    <ul class="list-disc pl-5 grid grid-cols-2">
                        <li v-for="hobby in tm('hobbies')">
                            {{ rt(hobby) }}
                        </li>
                    </ul>
                </div>
            </section>
        </footer>
    </div>
</template>

<script setup lang="ts">
import type { OssTeams, OssProjects, WorkExperience, Skills, Education } from '~/types/CV';
import type { VueMessageType } from 'vue-i18n';

const { t, tm, rt } = useI18n({
    useScope: 'local'
})

const skills: Skills[] = [
    {
        name: 'TypeScript',
        level: 5
    },
    {
        name: 'Vue.js',
        level: 5
    },
    {
        name: 'Nuxt.js',
        level: 5
    },
    {
        name: 'NodeJS',
        level: 5
    },
    {
        name: 'Playwright',
        level: 4
    },
    {
        name: 'Cypress',
        level: 3
    },
    {
        name: 'React',
        level: 3
    },
    {
        name: '.NET/C#',
        level: 3
    },
    {
        name: 'Azure DevOps',
        level: 4
    },
    {
        name: 'Cloudflare Workers',
        level: 4
    }, 
    {
        name: 'Microservices',
        level: 4
    }, 
    {
        name: 'OpenTelemetry',
        level: 4
    }, 
]

interface Contact {
    email: string
    phone: string
    address: string
}

const contact: Contact = {
    email: 'julien.huang@outlook.fr',
    phone: '+33 6 52 14 92 22',
    address: 'Asnière-sur-seine, 92600, France'
}

const education = computed<Education[]>(() => [
    {
        title: t('education.devweb.title'),
        place: t('education.devweb.place'),
        date: '2020',
    },
    {
        title: t('education.lea.title'),
        place: t('education.lea.place'),
        date: '2018',
    },
    {
        title: t('education.bac.title'),
        place: t('education.bac.place'),
        date: '2015',
    }
])

const ossTeams: OssTeams[] = [
    {
        title: 'Nuxt Core Team',
        timeline: ['02/2024', t('today')]
    },
    {
        title: 'Nuxt Ecosystem Team',
        timeline: ['2023', t('today')]
    }, 
]

const ossProjects = computed<OssProjects[]>(() => [
    {
        name: 'Nuxt',
        role: [t('oss.role.coreTeam'), t('oss.role.maintainer')],
        url: 'https://nuxt.com',
        description: t('oss.projects.nuxt.description')
    },
    {
        name: 'nuxt-applicationinsights',
        role: [t('oss.role.author'), t('oss.role.maintainer')],
        url: 'https://github.com/huang-julien/nuxt-applicationinsights',
    },
    {
        name: 'nitro-applicationinsights',
        role: [t('oss.role.author'), t('oss.role.maintainer')],
        url: 'https://github.com/huang-julien/nitro-applicationinsights',
    },
    {
        name: 'nitro-opentelemetry',
        role: [t('oss.role.author'), t('oss.role.maintainer')],
        url: 'https://github.com/huang-julien/nitro-opentelemetry',
    },
    {
        name: '@nuxt/scripts',
        role: [t('oss.role.co-author'), t('oss.role.maintainer')],
        url: 'https://scripts.nuxt.com/',
        description: t('oss.projects.nuxtScripts.description')
    },
    {
        name: '@nuxt/hints',
        role: [t('oss.role.co-author'), t('oss.role.maintainer')],
        description: t('oss.projects.nuxtHints.description')
    },
    {
        name: 'vue-onigiri',
        role: [t('oss.role.author'), t('oss.role.maintainer')],
        description: t('oss.projects.vueOnigiri.description')
    }
])

const workExperience = computed<WorkExperience[]>(() => [
    {
        company: 'Nuxt',
        country: 'Open Source',
        title: [t('oss.role.coreTeam'), t('oss.role.maintainer')].join(' - '),
        timeline: ['2022', t('today')],
        subtitle: t('work.experience.nuxt.subtitle'),
        stack: ['Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Cypress', 'ASP.NET'],
        description: (tm('work.experience.nuxt.description') as VueMessageType[]).map((desc) => rt(desc))
    },
    {
        company: 'Leetchi',
        country: 'France',
        title: t('work.experience.leetchi.title'),
        timeline: ['2022', t('today')],
        subtitle: t('work.experience.leetchi.subtitle'),
        stack: ['Nuxt 3', 'TypeScript', 'Tailwind CSS', 'Cypress', 'ASP.NET'],
        description: (tm('work.experience.leetchi.description') as VueMessageType[]).map((desc) => rt(desc))
    },
    {
        company: 'HSK Digital',
        country: 'France',
        title: t('work.experience.hskDigital.title'),
        timeline: ['2020', '2022'],
        stack: ['Nuxt 2', 'Vue 2', 'Vue 3', 'Magento'],
        description: (tm('work.experience.hskDigital.description') as VueMessageType[]).map((desc) => rt(desc))
    }
]
)

</script>

<style scoped lang="scss">
@media print { 
    @page {
        margin: 0;
        padding: 0;
        size: A4 portrait;
        margin-top: 25px;
    }

    @page :first {
        margin-top: 0;
    }
    
    li {
        break-inside: avoid;
    }
}

p {
    margin: 0;
}

.text-2xs {
    font-size: 0.625rem;
}
</style>


<i18n lang="json">{
    "en": {
        "today": "today",
        "title": "Web Developer",
        "introduction": "Web developer passionate about open source. I love challenges and working in collaboration with product teams. \nAs a Core member of the Nuxt Team, sharing my knowledge and learning from others is what motivates me on a daily basis.",
        "education": {
            "title": "Education",
            "devweb": {
                "title": "Web Developer Training",
                "place": "OpenClassrooms"
            },
            "lea": {
                "title": "Bachelor's Degree in Applied Foreign Languages",
                "place": "UPJV, Amiens"
            },
            "bac": {
                "title": "Scientific Baccalaureate with Mathematics Specialization",
                "place": "Lycée Robert de luzarches, Amiens"
            }
        },
        "hobbies": [
            "Conferences",
            "Video Games",
            "Programming",
            "Piano",
            "Flute",
            "Powerlifting"
        ],
        "oss": {
            "role": {
                "coreTeam": "Core Team",
                "maintainer": "Maintainer",
                "author": "Author",
                "co-author": "Co-author"
            },
            "projects": {
                "title": "Projects",
                "nuxt": {
                    "description": "Part of the Nuxt Core Team, maintaining and developing Nuxt and its ecosystem."
                },
                "nuxtScripts": {
                    "description": "A module created in collaboration between the Aurora Team of Google Chrome and the Nuxt WebPerf team, providing best practices for third-party scripts in Nuxt."
                },
                "nuxtHints": {
                    "description": "To be released. Nuxt module to actively detect bad development and performance practices in Nuxt."
                },
                "vueOnigiri": {
                    "description": "To be released. Low-level Vue library to provide advanced VNode serialization and deserialization which can allow Server Components."
                }
            }
        },
        "work": {
            "title": "Work Experience",
            "experience": {
                "nuxt": {
                    "name": "Nuxt",
                    "title": "Core Team Member",
                    "subtitle": "After a few months of contributing to Nuxt, I was invited to join the Insiders Team in early 2022 then the Core Team in early 2023. As a member of the Core Team, I participate in the maintenance and development of Nuxt and its ecosystem as well as representing Nuxt at conferences, meetups and in collaborations with other teams.",
                    "description": [
                        "Member of the Nuxt Core Team, maintaining and developing Nuxt and its ecosystem.",
                        "Maintainer of several open-source projects related to Nuxt and Nitro.",
                        "Speaker at various conferences and meetups about Nuxt and web development.",
                        "Active decision-maker on the core repository for future features."
                    ]
                },
                "leetchi": {
                    "name": "Leetchi",
                    "title": "Frontend Developer - Frontend Technical Lead",
                    "subtitle": "Joined the team as a Frontend developer in a 25 persons team, part of the complete remake of the Leetchi platform into a microservices architecture (Azure Cloud), this was a project with high technical and strategic stakes, involving challenges related to scalability, technical debt, and a major technology migration. Then I took the role of frontend technical lead in run phase and became more versatile as a support for Backend developers and QA. The build phase lasted 8 months, followed by a run/build phase to ensure continuous delivery for upcoming features and maintenance.",
                    "description": [
                        "Participation in technical decisions and design of features",
                        "Training and mentoring other frontend developers",
                        "Developed the complete redesign of Leetchi's front office using Nuxt 2 (bridge) with technical debt management",
                        "Nuxt 2 to Nuxt 3 migration",
                        "Feature development and maintenance of the front office and back office",
                        "C# .NET feature development and maintenance",
                        "Supporting the QA team with Cypress tests",
                        "Design Core Team - Dev reviewer"
                    ]
                },
                "hskDigital": {
                    "name": "HSK Digital",
                    "title": "Frontend Developer",
                    "description": [
                        "Development of an internal project from scratch using Vue.js",
                        "Magento 2 integrator",
                        "Development of Visual prospect for Stellantis using Laravel and Vue.JS",
                        "R&D on a future CMS based on NuxtJS to allows users to create drop-shipping websites with customizable products"
                    ]
                }
            }
        },
        "skills": {
            "title": "Skills"
        }
    },
    "fr": {
        "today": "Aujourd'hui",
        "title": "Web Développeur",
        "introduction": "Développeur web passionné par l'open source. J'adore les défis qui me sont donnés et co-construire avec les équipes produits. \nEn tant que membre de la Nuxt Core Team, partager mes connaissances et apprendre des autres est ce qui me motive au quotidien.",
        "education": {
            "title": "Formations",
            "devweb": {
                "title": "Formation Développeur Web",
                "place": "OpenClassrooms"
            },
            "lea": {
                "title": "Licence en langues étrangères appliquées",
                "place": "UPJV, Amiens"
            },
            "bac": {
                "title": "Baccaulauréat Scientifique Spé Math",
                "place": "Lycée Robert de luzarches, Amiens"
            }
        },
        "hobbies": [
            "Conférencier",
            "Jeux Vidéo",
            "Programmation",
            "Piano",
            "Flute",
            "Force athlétique"
        ],
        "oss": {
            "role": {
                "coreTeam": "Core Team",
                "maintainer": "Mainteneur",
                "author": "Auteur",
                "co-author": "Co-auteur"
            },
            "projects": {
                "title": "Projets",
                "nuxt": {
                    "description": "Membre de la Core Team, maintenance et développement de Nuxt et de son écosystème."
                },
                "nuxtScripts": {
                    "description": "Module créé en collaboration entre l'équipe Aurora de Google Chrome et l'équipe Nuxt WebPerf, fournissant les meilleures pratiques pour les scripts tiers dans Nuxt."
                },
                "nuxtHints": {
                    "description": "Module Nuxt pour activement détecter les mauvaises pratiques de développement et de performance dans Nuxt."
                },
                "vueOnigiri": {
                    "description": "In progress. Bibliothèque Vue de bas niveau pour fournir une sérialisation et une désérialisation avancées des VNode, ce qui peut permettre les Server Components dans VueJS."
                }
            }
        },
        "work": {
            "title": "Expérience professionnelle",
            "experience": {
                "nuxt": {
                    "name": "Nuxt",
                    "title": "Core Team Member",
                    "description": [
                        "Membre de la Core Team, maintenance et développement de Nuxt et de son écosystème.",
                        "Mainteneur de plusieurs projets open-source liés à Nuxt et Nitro.",
                        "Speaker lors de diverses conférences et meetups à propos de Nuxt et du développement web.",
                        "Décideur actif sur les futures fonctionnalités de Nuxt."
                    ],
                    "subtitle": "Après quelques mois de contributions sur Nuxt, j'ai été invité à rejoindre l'équipe Insiders en 2022 puis la Core Team début 2023. En tant que membre de la Core Team, je participe à la maintenance et au développement de Nuxt et de son écosystème et représente Nuxt lors de conférences, meetups et sur des projets en collaboration avec d'autres équipes tels que Google ou Github."
                },
                "leetchi": {
                    "title": "Développeur frontend - Référent Frontend",
                    "subtitle": "J'ai rejoint l'équipe en tant que développeur frontend dans une équipe de 25 personnes, dans le cadre de la refonte complète de la plateforme Leetchi vers une architecture microservices (Azure Cloud). Ce fut un projet à forts enjeux techniques et stratégiques, impliquant des défis liés à la scalabilité, la dette technique, et une migration technologique majeure. Puis j'ai pris le rôle de référent technique frontend en phase de run et suis devenu plus polyvalent en support aux développeurs Backend et à l'équipe QA. La phase de build a duré 8 mois, suivie d'une phase run/build (avec une réduction des équipes pour revenir à 10 devs) pour assurer la livraison continue des futures fonctionnalités et la maintenance.",
                    "description": [
                        "Participation aux décisions et à la conception technique des features",
                        "Formation et mentorat des autres développeurs frontend",
                        "Développement de la refonte complète du front office de Leetchi en Nuxt 2 (bridge) avec gestion de la dette technique",
                        "Migration Nuxt 2 vers Nuxt 3",
                        "Développement de features et maintenance du front office et back office",
                        "Développement de features et maintenance en C# .NET",
                        "Support à l'équipe QA avec des tests Cypress",
                        "Design Core Team - Dev reviewer"
                    ]
                },
                "hskDigital": {
                    "title": "Développeur Frontend",
                    "description": [
                        "Développement d'un projet interne from scratch en utilisant Vue.js",
                        "Intégrateur Magento 2",
                        "Développement de Visual prospect pour Stellantis en utilisant Laravel et Vue.JS"
                    ]
                }
            }
        },
        "skills": {
            "title": "Compétences"
        }
    }
}</i18n>