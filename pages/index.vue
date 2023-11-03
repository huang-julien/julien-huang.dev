<template>
    <main class="lg:grid grid-cols-2 my-auto h-full px-4 md:px-20">
        <div class="my-auto">
            <ProfileGithub class="w-1/2 md:w-1/4 mx-auto mb-10 lg:md-10" />
        </div>
        <div class="h-full text-lg">
            <div class="w-fit">

                <h1 class="text-5xl text-tertiary font-bold">Julien Huang</h1>

                <div class="bg-gradient-to-r from-tertiary to-primary h-1 my-4 w-full" />
            </div>

            <p class="text-3xl font-bold">Hello ! 👋</p>

            <p><span class="font-bold">I'm Julien.</span> <br>Frontend developer by day, open-source contributor by night.</p>
 
            <p>I'm currently working for Leetchi in France as a frontend developer.</p>
            <p>Outside my day job, i'm also part of the Nuxt Insiders Team. And as a self taught developer, open-source is
                my way to learn and improve myself. <br>When i'm not programming, I like to spend time playing video games, music and workout.</p>
        </div>
    </main>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
p {
    @apply my-5;
    line-height: 150%;
}
</style>