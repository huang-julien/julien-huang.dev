

<template>
    <div>
        <div class="text-white print:hidden flex">
            <USelect v-model="locale" :items="locales" class="mx-auto my-3 w-fit" />
        </div>
        <CV  />
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false
})

const { locales, locale } = useI18n()
</script>