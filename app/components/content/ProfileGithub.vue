<template>
  <div
    class="w-1/2 md:w-1/4 mx-auto mb-10 lg:md-10 rounded-full relative wrapper border-5 bg-clip-padding border-solid border-transparent z-5 aspect-square flex before:bg-gradient-to-br ">

    <div
      class="absolute top-[70%] left-[70%] z-4 rounded-full wrapper  bg-clip-padding w-1/2 border-solid border-transparent before:bg-gradient-to-tl ">
      <div class=" bg-p-blue relative rounded-full w-full aspect-square flex">
        <NuxtLink external aria-label="github profile" target="_blank" class="flex w-full h-full aspect-square" href="https://github.com/huang-julien">
          <Icon name="bi:github" class="m-auto text-white !block text-[3rem]" />
        </NuxtLink>
      </div>
    </div>
    <NuxtPicture src="/profile.jpg"  sizes="180px lg:20vw" alt="Profile picture" class="rounded-full z-5 relative  m-auto w-full" :img-attrs="{ class: 'rounded-full w-full'}" />
  </div>
</template>

<style scoped lang="scss">
.wrapper::before {
  @apply from-p-yellow to-s-blue absolute -top-[2px] -left-[2px] -right-[2px] -bottom-[2px] rounded-full;
  content: " ";
  inset: 0;
  z-index: 0;
  padding: 5px;
}
</style>

