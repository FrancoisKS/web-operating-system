<script setup>
import CommandLineInterface from '@/components/CommandLineInterface.vue'
import GraphicUserInterface from '@/components/GraphicUserInterface.vue'
</script>

<template>
  <main class="operating-system flex min-h-[inherit]">
    <CommandLineInterface class="flex-1 font-primary" />
    <GraphicUserInterface class="flex-1" />
  </main>
</template>
