<template>
    <div class="border-solid border-p-yellow border-2 p-5 rounded-xl project-card">
        <NuxtLink external :href="url" :aria-label="name" target="_blank" class="hover:cursor-pointer">
            <article class="flex flex-col gap-3">
                <header class="text-xl  font-bold">{{ name }} <Icon name="mdi:github" /></header>
                <span>{{ description }}</span>
                <span>Language: {{ lang.join(', ') }}</span>
            </article>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    name: string,
    description: string,
    lang: string[],
    url: string
}>() 
</script>

<style lang="scss" scoped> 
.project-card {
    transition: all 0.2s ease-in-out;
    &:hover {
        @apply bg-s-blue;
    }
}
</style>