<template>
    <header class="flex w-full items-center p-4 gap-10 backdrop-blur-sm sticky top-0">
        <NuxtLink to="/">
            <NuxtPicture src="/profile.jpg" sizes="64px" alt="Julien Huang profile picture" class="rounded-full aspect-square" :img-attrs="{
                class: 'rounded-full aspect-square',
                loading: 'lazy',
                decoding: 'async',
                width: 64,
                height: 64
            }"  />
        </NuxtLink>

        <nav class="ml-auto">
            <ul class="flex">
                <li class="my-5">
                    <NuxtLink to="/work">Work</NuxtLink>
                </li>
            </ul>
        </nav>

        <ul class="flex"> 
            <li v-for="(link, index) in iconLinks" :key="index" class="ml-5">
                <NuxtLink :to="link.url" external class="text-[2rem]" :title="link.title" target="_blank" rel="noopener noreferrer">
                    <Icon :name="link.icon" />
                </NuxtLink>
            </li>
        </ul>
    </header>
</template>

<script setup lang="ts">
const iconLinks = [
    {
        icon: 'fa6-brands:bluesky',
        url: 'https://bsky.app/profile/julienhuang-dev.bsky.social',
        title: 'Bluesky',
    },
    {
        icon: 'fa6-brands:linkedin',
        url: 'https://www.linkedin.com/in/julien-huang/',
        title: 'LinkedIn',
    }, 
    {
        icon: 'bi:github',
        url: 'https://github.com/huang-julien',
        title: 'GitHub',
    },
]
</script>