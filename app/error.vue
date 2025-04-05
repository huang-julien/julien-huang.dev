<template>
    <NuxtLayout name="default">
        <section class="my-auto grid grid-cols-2 gap-4">
            <div class="font-bold text-5xl text-right">
                {{ error?.statusCode }}
            </div>
            <div class="text-3xl">
                <h2>
                    {{ error?.message }}
                </h2>

                <UButton to="/">
                    Go home
                </UButton>
            </div>
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
const error = useError()
</script>