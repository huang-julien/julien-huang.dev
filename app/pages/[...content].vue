<template>
    <div class="my-auto h-full">
        <ContentRenderer v-if="content" :value="content" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log('route', route)
const { data: content } = await useAsyncData(computed(() => route.fullPath),() => queryCollection('content').path(route.path).first())
console.log(await queryCollection('content').all())
  console.log('content', content.value)
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
 