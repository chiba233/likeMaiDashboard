import {useStorage} from '@vueuse/core'
import type {Ref} from "vue";

export const aimeCard: Ref<string> = useStorage("cardNum", "")
export const menuSelect: Ref<number> = useStorage("selectNum", 0)