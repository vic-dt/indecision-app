<template>
    <div class="p-4 flex-1 overflow-y-auto">
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

            <ChatBullula :meus-est="true" nuntius="¿Salimos a dar una vuelta?"/>

            <ChatBullula :meus-est="false" nuntius="No" imago="https://yesno.wtf/assets/yes/11-a23cbde4ae018bbda812d2d8b2b8fc6c.gif"/>
</div>
</div>
</template>

<script lang="ts" setup>
import ChatBullula from './ChatBullula.vue';


</script>