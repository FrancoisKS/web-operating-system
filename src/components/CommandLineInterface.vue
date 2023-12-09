<template>
  <section class="command-line-interface bg-primary flex flex-col p-2">
    <div class="command-line-interface__list text-lg font-bold text-white flex flex-col-reverse flex-1 mb-2">
      <ul>
        <li v-for="(command, index) in history" :key="index">
          {{ command.value }}
        </li>
      </ul>
    </div>
    <div class="command-line-interface__input flex">
      <span class="text-secondary text-lg mr-2 font-bold select-none">root@root:~$ </span>
      <input
        v-model="input"
        class="appearance-none text-lg font-bold text-white caret-white bg-transparent flex-1 focus:outline-none"
        type="text"
        @keyup.enter="submit()"
      >
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const input = ref(null)
const history = reactive([])

function submit() {
  history.push({ timestamp: Date.now(), value: input.value })
}
</script>