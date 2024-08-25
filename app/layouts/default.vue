<template>
  <div class="min-h-screen bg-p-blue flex   text-light-gray w-screen">
    <div class="lg:w-1/6 relative">


      <USlideover v-model="isOpen" side="left" class="lg:hidden">
        <button class=" lg:hidden text-4xl  z-10 absolute top-2 left-4" aria-label="sidebar menu" @click="isOpen = !isOpen">
          <Icon name="ci:hamburger" />
        </button>
        <SideBar />
      </USlideover>

      <SideBar class="hidden lg:grid" />
    </div>
    <main class="lg:w-5/6 w-full flex flex-col">
      <div>
        <button class=" lg:hidden text-4xl ml-4 "  aria-label="sidebar menu"  @click="isOpen = !isOpen">
          <Icon name="ci:hamburger" />
        </button>
      </div>

      <div class="flex-1 w-full">
        <slot />

      </div>
    </main>

  </div>
</template>

<script lang="ts" setup>
const isOpen = useState('navbar', () => false)
</script>

<style></style>

