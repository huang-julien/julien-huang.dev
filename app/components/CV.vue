<template>
    <div class="bg-white text-gray-900 p-8 size-[A4] h-[1131px] w-[800px] mx-auto flex flex-col gap-6">
        <header class="grid grid-cols-12 gap-8 px-2 pb-5 items-center border-b border-p-yellow">
            <NuxtPicture src="/amsterdam_profile.jpg" class="rounded-full col-span-2 overflow-hidden" />

            <h1 class="col-span-2 text-2xl font-bold text-p-blue">
                Julien Huang
            </h1>

            <div class="col-span-3">
                <h2 class="text-lg">JS Developer</h2>
            </div>

            <div class="text-xs col-span-5 flex flex-col justify-around h-full">
                <a href="https://github.com/huang-julien" target="_blank" rel="noopener noreferrer">
                    <Icon name="bi:github" />
                    https://github.com/huang-julien
                </a>
                <a href="https://linkedin.com/in/julien-huang/" target="_blank" rel="noopener noreferrer">
                    <Icon name="bi:linkedin" />
                    https://linkedin.com/in/julien-huang
                </a>
                <a href="https://www.julien-huang.dev/" target="_blank" rel="noopener noreferrer">
                    <Icon name="mdi:web" />
                    https://www.julien-huang.dev/
                </a>
            </div>
        </header>

        <main class="grid grid-cols-2 gap-8 text-xl">
            <div class="flex flex-col gap-4">
                <section class="flex flex-col gap-4">
                    <h2 class="column-title">
                        <Icon name="bi:github" />

                        Open-source
                    </h2>
                    <div class="flex flex-col gap-4 text-sm">
                        <section class="flex flex-col gap-2">
                            <h3 class="text-sm font-bold">OSS Teams</h3>
                            <ul class="list-disc pl-5">
                                <li v-for="team in ossTeams" :key="team.title" class="flex flex-col gap-1">
                                    <span>{{ team.title }}</span>
                                    <span class="text-xs text-gray-500">{{ team.timeline[0] }} - {{ team.timeline[1]
                                    }}</span>
                                </li>
                            </ul>
                        </section>
                        <section class="flex flex-col gap-2">
                            <h3 class="text-sm font-bold">OSS Projects</h3>
                            <ul class="list-disc pl-5">
                                <li v-for="project in ossProjects" :key="project.name" class="flex my-2">
                                    <NuxtLink external :href="project.url" target="_blank" rel="noopener noreferrer"
                                        class="flex flex-col gap-1">
                                        <span>{{ project.name }}</span>
                                        <span class="text-xs text-gray-500">{{ project.url }}</span>
                                        <span class="text-xs text-gray-500">{{ project.role.join(', ') }}</span>
                                        <span class="text-xs text-gray-500">{{ project.description }}</span>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
                <section>
                    <h2 class="column-title">
                        <Icon name="mdi:contact" />

                        Contact
                    </h2>
                    
                    <div class="mt-4 text-sm">
                        <ul class="list-disc pl-5">
                            <li class="flex flex-col gap-1">
                                <span>{{ contact.email }}</span>
                                <span class="text-xs text-gray-500">{{ contact.phone }}</span>
                                <span class="text-xs text-gray-500">{{ contact.address }}</span>
                            </li>
                        </ul>
                    </div>
                    
                </section>
            </div>
            <div class="flex flex-col gap-4">
                <section>

                    <h2 class="column-title">
                        <Icon name="material-symbols:work" />

                        work experience
                    </h2>
                    <div class="flex flex-col gap-4 mt-4 text-sm">
                        <div class="flex flex-col gap-2">
                            <ul class="list-disc pl-5">
                                <li v-for="work in workExperience" :key="work.company" class="mb-2 flex flex-col gap-1">
                                    <span class="font-bold">{{ work.company }} - {{ work.country }}</span>
                                    <span class="text-xs text-gray-500">{{ work.title }}</span>
                                    <span class="text-xs text-gray-500">{{ work.timeline[0] }} - {{ work.timeline[1]
                                        }}</span>
                                    <span class="text-xs text-gray-500">{{ work.subtitle }}</span>
                                    <ul class="list-disc pl-5">
                                        <li v-for="desc in work.description" :key="desc" class="text-xs text-gray-500">
                                            {{
                                                desc }}</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 class="column-title">
                        <Icon name="carbon:skill-level" />

                        Skills
                    </h2>

                    <div class="mt-4 text-sm">
                        <ul class="list-disc grid grid-cols-2 pl-5">
                            <li v-for="skill in skills" class="flex flex-col gap-1">
                                <span>{{ skill.name }}</span>
                                <span class="text-xs text-gray-500">{{ skill.level }}/5</span>
                            </li>
                        </ul>
                    </div>
                </section>
 
                <section>
                    <h2 class="column-title">
                        <Icon name="material-symbols:school" />

                        Education
                    </h2>
                    <div class="mt-4 text-sm">
                        <ul class="list-disc pl-5">
                            <li v-for="education in education" :key="education" class="flex flex-col gap-1">
                                <span>{{ education }}</span>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import type { OssTeams, OssProjects, WorkExperience, Skills } from '~/types/CV';

defineProps<{
    ossTeams: OssTeams[]
    ossProjects: OssProjects[]
    workExperience: WorkExperience[]
    education: string[]
}>()

const skills: Skills[] = [
    {
        name: 'JavaScript',
        level: 5
    },
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
        name: 'Tailwind CSS',
        level: 4
    },
    {
        name: 'Cypress',
        level: 3
    },
    {
        name: 'ASP.NET',
        level: 2
    },
    {
        name:'Playwright',
        level: 4
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
</script>

<style scoped lang="scss">
@page {
    margin: 0;
    padding: 0;
    size: A4 portrait;
}

.column-title {
    @apply flex items-center gap-2 border-b border-p-yellow pb-2 px-4 w-fit font-bold text-lg;
}
</style>