<template>
    <article class="p-5  project-card">
        <NuxtLink external :href="url" :aria-label="name" target="_blank" class="flex flex-col gap-3 justify-between h-full hover:cursor-pointer">
                <header class="text-xl  font-bold">{{ name }} <Icon name="mdi:github" /></header>
                <span>{{ description }}</span>
        </NuxtLink>
    </article>
</template>

<script lang="ts" setup>
defineProps<{
    name: string,
    description: string,
    url: string
}>() 
</script>

<style lang="scss" scoped>
@use '@/assets/mixins' as *;
.project-card {
    @include border-animated(#58afd1, #ffe593, #233a83, 2px, bottom, right, 0.25s);
}
</style>