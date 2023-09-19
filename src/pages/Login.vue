<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col justify-center w-full min-h-screen overflow-hidden lg:flex-row">
      <div class="flex flex-col items-center justify-center w-full lg:w-1/2">
        <form class="w-full px-8 space-y-6 sm:w-[480px]">
          <h1 class="text-4xl font-medium">Welcome</h1>
          <div>
            <input type="text" placeholder="E-mail" class="w-full px-4 py-3 border-2 rounded-md" required />
          </div>
          <div>
            <input type="password" placeholder="Parol" class="w-full px-4 py-3 border-2 rounded-md" required />
          </div>
          <button type="submit" class="w-full px-4 py-3 text-white rounded-md bg-primary">
          </button>
        </form>
      </div>
    </div>
</template>
