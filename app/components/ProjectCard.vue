<template>
    <article class="p-5  project-card">
        <NuxtLink external :href="url" :aria-label="name" target="_blank" class="flex flex-col gap-3 justify-between h-full hover:cursor-pointer h-full">
                <header class="text-xl  font-bold">{{ name }} <Icon name="mdi:github" /></header>
                <span>{{ description }}</span>
                <span>Language: {{ lang.join(', ') }}</span>
        </NuxtLink>
    </article>
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
@import '@/assets/mixins';
.project-card {
    @include border-animated(#58afd1, #ffe593, #233a83, 4px, bottom, right, 0.25s);
}
</style>