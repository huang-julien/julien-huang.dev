<script setup lang="ts">
defineProps<{
    leftClass?: string;
    rightClass?: string;
}>()
</script>

<template>
    <div class="lg:grid lg:grid-cols-2">
        <div :class="leftClass">
            <slot name="left" />
        </div>
        <div :class="rightClass">
            <slot name="right" />
        </div>
    </div>
</template>