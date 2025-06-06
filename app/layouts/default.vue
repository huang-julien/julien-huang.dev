<template>
  <div class="min-h-screen bg-p-blue text-light-gray flex flex-col">
    <Header />
    <main class="mx-auto lg:max-w-[75vw] flex-1 flex flex-col my-auto px-8 mt-20 lg:mt-0"> 
        <slot /> 
    </main>
  </div>
</template>
 