<template>
  <div class="px-4 h-full flex w-full">
    <div class="mt-5 lg:my-auto w-full">
      <MainTitle class="w-1/2 md:w-1/4">Work</MainTitle>
      <section class="my-5">
        <h2 class="text-2xl text-p-yellow font-bold">Projects</h2>
        <div class="mx-auto md:px-[4rem] w-full ">
          <ProjectsList :projects="myProjects" />
        </div>

      </section>
      <section class="my-5">
        <h2 class="text-2xl text-p-yellow font-bold">Actively contributing to</h2>
        <div class="mx-auto md:px-[4rem] w-full">
          <ProjectsList :projects="contributingToProjects" />
        </div>
      </section>
    </div>

  </div>
</template>

<script lang="ts" setup>

const myProjects = ['nitro-applicationinsights', 'nuxt-applicationinsights', 'nitro-opentelemetry', 'nuxt-hydration'].map((p) => ({
  org: 'huang-julien',
  repo: p
}))

const contributingToProjects = [{
  org: 'nuxt',
  repo: 'nuxt'
},{
  org: 'nuxt',
  repo: 'scripts'
},]

</script>

<style></style>

