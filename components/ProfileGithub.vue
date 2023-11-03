<template>
  <div
    class="rounded-full relative wrapper border-5 bg-clip-padding border-solid border-transparent z-5 aspect-square flex before:bg-gradient-to-br ">

    <div
      class="absolute top-[70%] left-[70%] z-4 rounded-full wrapper  bg-clip-padding w-1/2 border-solid border-transparent before:bg-gradient-to-tl ">
      <div class=" bg-primary relative rounded-full w-full aspect-square flex">
        <NuxtLink
         external 
         alt="github profile"
         class="flex w-full h-full"
           href="https://github.com/huang-julien">
          <Icon name="bi:github"   
          class="m-auto  text-white !block h-1/2 flex-1" />

        </NuxtLink>
      </div>
    </div>
    <img src="/profile.jpg" alt="Profile picture" class="rounded-full z-5 relative  m-auto" />

  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.wrapper::before {
  content: " ";
  inset: 0;
  z-index: 0;
  padding: 5px;
  @apply from-tertiary to-secondary absolute -top-[2px] -left-[2px] -right-[2px] -bottom-[2px] rounded-full;
}
</style>

