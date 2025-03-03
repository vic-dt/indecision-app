import { somnum } from '@/helpers/somnum';
import type { chatNuntius } from '@/interfaces/chat-nuntius.interface';
import type { YesNoResponsio } from '@/interfaces/yes-no.responsio';
import { ref } from 'vue';

export const useChat = () => {
  const nuntii = ref<chatNuntius[]>([]);

  const hicTibiResponsum = async () => {

    const resp = await fetch('https://yesno.wtf/api');

    const data = (await resp.json()) as YesNoResponsio;

    return data
  };

  const cumNovumNuntius = async(textus: string) => {
    if (textus.length === 0) return;

    if (!textus.endsWith('?')) return;

    nuntii.value.push({
        id: new Date().getTime(),
        nuntius: textus,
        meusEst: true,
        
      });

    await somnum(1.5)

    const {answer, image} = await hicTibiResponsum();

    nuntii.value.push({
      id: new Date().getTime(),
      nuntius: answer,
      meusEst: false,
      imago: image,
    });
  };
  return {
    cumNovumNuntius,
    nuntii,
  };
};
