<template>
    <div class=" md:grid md:grid-cols-2">
        <div class="m-4" v-for="project of projects">
            <ProjectCard :name="project.full_name" :description="project.description" :lang="[project.language]" :url="project.html_url" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    projects: {
        org: string,
        repo: string
    }[]
}>()

const runtimeConfig = useRuntimeConfig()

interface GithubApiRepoResponse {
    name: string,
    full_name: string,
    description: string,
    language: string,
    html_url: string
}
const headers: HeadersInit = {}

if(runtimeConfig.github.token) {
    headers.Authorization = `Bearer ${runtimeConfig.github.token}`
}

const projects = await Promise.all(props.projects.map((p) => $fetch<GithubApiRepoResponse>(`https://api.github.com/repos/${p.org}/${p.repo}`, {
   headers
})))
</script>