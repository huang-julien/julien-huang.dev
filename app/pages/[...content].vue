<template>
    <div class="my-auto h-full">
        <ContentRenderer v-if="content" :value="content" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: content } = await useAsyncData(() => queryCollection('content').path(route.path).first())
  
useSeoMeta({
  title: content.value?.title,
  description: content.value?.description
})

if(!content.value) {
    showError({
        statusCode: 404,
        message: 'Page not found'
    })
}
</script>
 