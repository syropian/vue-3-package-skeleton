<template>
  <div class="px-8 mt-16 mb-6 sm:mt-32 sm:mb-6 md:px-0">
    <div class="flex items-center justify-between w-full mx-auto mt-8 max-w-prose">
      <h1 class="flex items-center text-3xl font-bold sm:text-4xl">
        <span class="inline-block text-gray-600 dark:text-gray-300">my-lib</span>
      </h1>
      <nav class="absolute top-[20px] right-[20px] flex items-center sm:relative sm:top-0 sm:right-0">
        <a
          href="https://github.com/syropian/my-lib"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block text-black transition-colors hover:text-purple-500 dark:text-gray-300"
          aria-label="GitHub"
        >
          <GitHubIcon class="w-6 h-6 stroke-current" aria-hidden="true" />
        </a>
      </nav>
    </div>
    <div class="w-full mx-auto mt-4 prose max-w-prose prose-a:text-purple-500 dark:prose-dark">
      <h2 class="pb-6 border-b border-gray-800">A description for your new library</h2>
      <div class="mt-16 space-y-10"></div>
    </div>
    <footer class="w-full pt-4 mx-auto mt-8 border-t border-gray-200 max-w-prose dark:border-gray-700 sm:mt-12">
      <p class="text-gray-500">
        &copy; {{ new Date().getFullYear() }}
        <a
          href="https://syropia.net"
          target="blank"
          rel="noopener noreferrer"
          class="font-semibold text-purple-500 hover:underline"
          >Collin Henderson</a
        >
      </p>
    </footer>
  </div>
</template>
<script setup lang="ts">
import GitHubIcon from './GitHubIcon.vue'
</script>
