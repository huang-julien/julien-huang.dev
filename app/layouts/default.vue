<template>
  <div class="min-h-screen bg-p-blue text-light-gray w-screen flex flex-col">
    <Header />
    <main class="mx-auto lg:max-w-3/4 flex-1 flex flex-col my-auto px-8"> 
        <slot /> 
    </main>
  </div>
</template>

<style lang="scss">
p {
    @apply my-5;
    line-height: 150%;
}
</style>