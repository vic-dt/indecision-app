<template>

<div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-6 text-white flex justify-between items-center">
       <span>Mi esposa</span> 
    </div>

    <ChatNuntii :nuntii="nuntii"/>


    <TextusArca @mitte-nuntius="($event)=>cumNovumNuntius($event)"/>
   




</div>

</template>

<script lang="ts" setup>

import ChatNuntii from '@/components/chat/ChatNuntii.vue';
import TextusArca from '@/components/chat/TextusArca.vue';


import { useChat } from '@/composables/useChat';

const{nuntii, cumNovumNuntius} = useChat();





// const nuntii = ref<chatNuntius[]>([
//     {
//         id: new Date().getTime(),
//         nuntius: '¿Quiéres ir a tomar café?',
//         meusEst: true,

//     },
//     {
//         id: new Date().getTime() + 1 ,
//         nuntius: 'Si!!',
//         meusEst: false,
//         imago:'https://yesno.wtf/assets/yes/11-a23cbde4ae018bbda812d2d8b2b8fc6c.gif'

//     }

// ]);

// const cumNovumNuntius = (textus: string) => {

//     nuntii.value.push({
//         id:new Date().getTime(),
//         nuntius: textus,
//         meusEst: true,

//     })
// }
</script>