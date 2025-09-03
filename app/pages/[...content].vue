<template>
    <div class="my-auto h-full">
        <div>
        <NuxtIsland name="ServerContentRenderer" :props="{ fullPath: route.fullPath }" />
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

</script>
 