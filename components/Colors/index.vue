<template>
  <div class="colors" :class="{'colors--form':form}">
    <div class="colors__item"
         :class="{'colors__item--active':props.activeColor?.id === color.id}"
         @click="emit('changeColor', index)"
         v-show="!color.taxi"
         v-for="(color, index) in colors">
      <div class="color__item-name">{{ color.title }}</div>
      <div :style="getHexColor(color)" class="color__item-color"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FolderColorType} from "~/app/types/folders";

const emit = defineEmits(["changeColor"]);
const props = defineProps<{
  colors: FolderColorType[];
  taxi?: boolean,
  activeColor: FolderColorType,
  form?: boolean
}>();
const getHexColor = (color: FolderColorType) => {
  let bg
  if (color && color.roof_hex_code) {
    bg = {
      background: `linear-gradient(50deg, ${color.hex_code} 50%, ${color.roof_hex_code} 50%)`
    }
  } else {
    bg = {
      backgroundColor: color.hex_code
    }
  }
  return bg
}
</script>