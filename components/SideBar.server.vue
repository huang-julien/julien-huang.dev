<template>
  <div class="h-screen grid relative">
    <nav class="h-[50vh] my-auto text-2xl font-bold  border-quaternary border-solid border-r-[1px] px-2">
      <ul>
        <li>
          <NuxtLink nuxt-client href="/" class="text-tertiary text-4xl">J-Huang</NuxtLink>
        </li>
        <li>
          <NuxtLink nuxt-client href="/work">Work</NuxtLink>
        </li>
      </ul>
    </nav>

    <p class="mt-auto text-sm px-2 absolute bottom-0">© 2023-2024 Julien Huang. CC BY-SA 4.0</p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>
li {
  @apply my-5;
}
</style>

