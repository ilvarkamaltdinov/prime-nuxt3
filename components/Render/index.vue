<template>
  <div class="render">
    <NuxtPicture @click.right.prevent loading="lazy" :src="activeColor.image.large"/>
  </div>
</template>
<script setup lang="ts">
import {FolderColorType} from "~/app/types/folders";

const props = defineProps<{
  activeColor: FolderColorType
  alt: string
}>();


</script>