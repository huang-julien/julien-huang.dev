<template>
    <div>
        
    </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
    name: string,
    description: string,
    lang: string[],
    useLangIcon: boolean,
}>(), {
    useLangIcon: true
}) 
</script>

<style lang="scss">

</style>