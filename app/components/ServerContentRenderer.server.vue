<template> 
        <ContentRenderer v-if="content" :value="content" />
 
</template>

<script setup lang="ts">
const props = defineProps<{
  fullPath: string
}>()
const { data: content } = await useAsyncData(computed(() => props.fullPath),() => queryCollection('content').path(props.fullPath).first())


if(!content.value) {
    showError({
        statusCode: 404,
        message: 'Page not found'
    })
}
</script>
 