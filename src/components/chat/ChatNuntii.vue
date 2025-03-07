<template>
  <div ref="chatRef" class="p-4 flex-1 overflow-y-auto">
    <div class="flex flex-col space-y-2">
      <!-- <div class="flex justify-end">
        <div class="bg-blue-200 text-black p-2 max-w-xs rounded-lg">
            Hola, ¿como te va el día?
        </div>
    </div>

    <div class="flex justify-start">
        <div class="bg-gray-300 text-black p-2 max-w-xs rounded-lg">
            Muy bien, estoy en casa. ¿Y tú?
        </div>
    </div> -->

      <!-- <ChatBullula :meus-est="true" nuntius="¿Salimos a dar una vuelta?"/> -->

      <!-- <ChatBullula 
            v-for="nuntius in nuntii"
            :key="nuntius.id"
            :meus-est="nuntius.meusEst" 
            :nuntius="nuntius.nuntius" 
            :imago="nuntius.imago"/> -->

      <ChatBullula v-for="nuntius in nuntii" :key="nuntius.id" v-bind="nuntius" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { chatNuntius } from '@/interfaces/chat-nuntius.interface';
import ChatBullula from './ChatBullula.vue';
import { ref, watch } from 'vue';

interface Props {
  nuntii: chatNuntius[];
}
const props = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watch(props.nuntii, () => {
  console.log('nuntii cambio');
  setTimeout(() => {
    chatRef.value?.scrollTo({
      top: chatRef.value.scrollHeight,
      behavior: 'smooth',
    })
  });
});
</script>
