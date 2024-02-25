<template>
    <div class=" md:grid md:grid-cols-2">
        <div class="m-4" v-for="project of repos">
            <ProjectCard class="project-card h-full" :name="project.data.name" :description="project.data.description"
                :lang="[project.data.language ?? '']" :url="project.data.html_url" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Octokit } from "octokit"

const props = defineProps<{
    projects: {
        org: string,
        repo: string
    }[]
}>()

const octokit = new Octokit()
const runtimeConfig = useRuntimeConfig()

interface GithubApiRepoResponse {
    name: string,
    full_name: string,
    description: string,
    language: string,
    html_url: string
}
const headers: HeadersInit = {}

if (runtimeConfig.github.token) {
    headers.Authorization = `Bearer ${runtimeConfig.github.token}`
}

const repos = await Promise.all(props.projects.map((p) =>

    octokit.rest.repos.get({
        owner: p.org,
        repo: p.repo,
         
    }))
    )
</script>

<style lang="scss" scoped>
// temporary fix, seems like sub components styles are not send to the client
@import '@/assets/mixins';

.project-card {
    @include border-animated(#58afd1, #ffe593, #233a83, 4px, bottom, right, 0.25s);
}
</style>