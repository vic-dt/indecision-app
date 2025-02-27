import type { chatNuntius } from "@/chat-nuntius.interface";
import { ref } from "vue";

export const useChat = () => {
    const nuntii = ref<chatNuntius[]>([
       
    
    ]);
    
    const cumNovumNuntius = (textus: string) => {
    
        nuntii.value.push({
            id:new Date().getTime(),
            nuntius: textus,
            meusEst: true,
            
        })
    }
    return{
        cumNovumNuntius,
        nuntii,
    }
}