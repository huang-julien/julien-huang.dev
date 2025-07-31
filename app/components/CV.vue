<template>
    <div class="page bg-white text-gray-900 p-4 size-[A4] h-[1131px] w-[800px] mx-auto flex flex-col gap-6">
        <header class="grid grid-cols-12 gap-8 px-2 pb-4 items-center border-b border-p-yellow">
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

        <main class="grid gap-8 text-lg grid-cols-[30%_1fr]">
            <div class="flex flex-col gap-4">
                <section class="flex flex-col gap-4">
                    <h2 class="flex items-center gap-2 border-b border-p-yellow pb-1 px-4 w-fit font-bold text-lg">
                        <Icon name="bi:github" />

                        Open-source
                    </h2>
                    <div class="flex flex-col gap-2 text-sm">
                        <section class="flex flex-col gap-1">
                            <h3 class="text-sm font-bold">Teams</h3>
                            <ul class="list-disc pl-2">
                                <li v-for="team in ossTeams" :key="team.title" class="text-xs flex flex-col gap-1">
                                    <span>{{ team.title }}</span>
                                    <span class="text-gray-500">{{ team.timeline[0] }} - {{ team.timeline[1]
                                        }}</span>
                                </li>
                            </ul>
                        </section>
                        <section class="flex flex-col gap-1">
                            <h3 class="text-sm font-bold">{{ t('oss.projects.title') }}</h3>
                            <ul class="list-disc pl-2 text-xs grid gap-2">
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
        name: 'ASP.NET',
        level: 2
    },
    {
        name: 'React Native',
        level: 2
    }
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
    }
])

const workExperience = computed<WorkExperience[]>(() => [
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
@page {
    margin: 0;
    padding: 0;
    size: A4 portrait;
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
        "title": "JS Developer",
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
                    "description": "A module created in collaboration between the (former) Aurora Team and the Nuxt WebPerf team, providing best practices for third-party scripts in Nuxt."
                },
                "nuxtHints": {
                    "description": "In progress. Nuxt module to actively detect bad development and performance practices in Nuxt."
                }
            }
        },
        "work": {
            "title": "Work Experience",
            "experience": {
                "leetchi": {
                    "name": "Leetchi",
                    "title": "Frontend Developer - Frontend Technical Lead",
                    "subtitle": "Joined the team as part of the complete redesign of the Leetchi platform, within an Agile environment based on microservices architecture. The build phase lasted 8 months, followed by a run/build phase to ensure continuous delivery and maintenance. A project with high technical and strategic stakes, involving challenges related to scalability, technical debt, and a major technology migration",
                    "description": [
                        "Responsible for frontend architecture decisions",
                        "Participation in technical decisions and design of features",
                        "Training and mentoring other frontend developers",
                        "Developed the complete redesign of Leetchi's front office using Nuxt 2 (bridge) with technical debt management",
                        "Nuxt 2 to Nuxt 3 migration",
                        "Feature development and maintenance of the front office and back office",
                        "ASP.NET skill development",
                        "QA support with Cypress E2E testing",
                        "Design Core Team - Dev reviewer"
                    ]
                },
                "hskDigital": {
                    "name": "HSK Digital",
                    "title": "Frontend Developer",
                    "description": [
                        "Development of an internal project from scratch using Vue.js",
                        "Magento 2 integrator"
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
        "title": "Développeur JS",
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
                    "description": "Module créé en collaboration entre l'équipe Aurora et l'équipe Nuxt WebPerf, fournissant les meilleures pratiques pour les scripts tiers dans Nuxt."
                },
                "nuxtHints": {
                    "description": "In progress. Module Nuxt pour activement détecter les mauvaises pratiques de développement et de performance dans Nuxt."
                }
            }
        },
        "work": {
            "title": "Expérience professionnelle",
            "experience": {
                "leetchi": {
                    "title": "Développeur frontend - Référent Frontend",
                    "subtitle": "Arrivé dans le cadre de la refonte complète de la plateforme Leetchi, dans un environnement agile organisé autour de microservices. La phase build s'est étalée sur 8 mois, avant de passer en mode \"run/build\" pour assurer la continuité évolutive et corrective. Projet à fort enjeu technique et stratégique, avec des problématiques de scalabilité, dette technique et migration technologique",
                    "description": [
                        "Responsable des décisions d'architecture frontend",
                        "Participation aux décisions et à la conception technique des features",
                        "Formation et mentorat des autres développeurs frontend",
                        "Team Design Core - Dev reviewer",
                        "Développement de la refonte complète du frontoffice de Leetchi en Nuxt 2 (bridge) avec la gestion de la dette technique",
                        "Résponsable de la migration de Nuxt 2 vers Nuxt 3 suite à la refonte",
                        "Développement de nouvelles fonctionnalités et maintenance du frontoffice et du backoffice",
                        "Montée en compétence sur ASP.NET",
                        "Support de l'équipe QA avec les tests Cypress"
                    ]
                },
                "hskDigital": {
                    "title": "Développeur Frontend",
                    "description": [
                        "Développement d'un projet interne from scratch en utilisant Vue.js",
                        "Intégrateur Magento 2"
                    ]
                }
            }
        },
        "skills": {
            "title": "Compétences"
        }
    }
}</i18n>