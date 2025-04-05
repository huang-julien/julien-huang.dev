<template>
    <div class="my-auto h-full">
        <ContentRenderer v-if="home" :value="home" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: home } = await useAsyncData(() => queryCollection('content').path(route.path).first())
  
useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>
 