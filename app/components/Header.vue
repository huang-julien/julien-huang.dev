<template>
    <header class="flex items-center p-4 gap-10 backdrop-blur-sm fixed top-0 left-0 right-0 h-20">
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
            <ul class="flex gap-3">
                <li class="my-5">
                    <NuxtLink to="/sponsors">Sponsors</NuxtLink>
                </li>
                <li class="my-5">
                    <NuxtLink to="/work">Work</NuxtLink>
                </li>
                <li class="my-5">
                    <NuxtLink to="/cv" :prefetch="false">CV</NuxtLink>
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