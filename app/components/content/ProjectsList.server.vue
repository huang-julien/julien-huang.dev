<template>
    <div class=" md:grid md:grid-cols-2">
        <div class="m-4" v-for="project of projects">
            <ProjectCard class="project-card h-full" :name="project.name"
                :description="project.description ?? ''"
                :url="project.url" />
        </div>
    </div>
</template>

<script setup lang="ts">
const projects = [
    {
        name: 'nuxt-applicationinsights',
        description: 'ApplicationInsights module for Nuxt.',
        url: 'https://github.com/huang-julien/nuxt-applicationinsights'
    },
    
    {
        name: 'nuxt-applicationinsights',
        description: 'ApplicationInsights module for Nitro.',
        url: 'https://github.com/huang-julien/nitro-applicationinsights'
    },
    
    {
        name: 'nitro-opentelemetry',
        description: 'opentelemetry integration for nitro',
        url: 'https://github.com/huang-julien/nitro-opentelemetry'
    },

    {
        name: 'nuxt/nuxt',
        description: 'The Intuitive Vue Framework.',
        url: 'https://github.com/nuxt/nuxt'
    }
]

</script>
 