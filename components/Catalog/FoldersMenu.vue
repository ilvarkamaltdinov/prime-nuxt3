<template>
  <div class="f-carousel f-carousel--folders-menu header__folders-slider" id="catalogFolderSlider">
    <div class="f-carousel__viewport">
      <div class="f-carousel__track">
        <div class="f-carousel__slide header__folders-slider-slide" v-for="folder in folders">
          <CardFolderMenu :folder="folder"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardFolderMenu from "~/components/MiniCards/FolderMenu.vue";
import {requestCatalogFolders} from "~/helpers/request";
import {ref} from "#imports";
import {FolderCatalogType, FoldersInput} from "~/app/types/folders";
import {watch, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {Carousel} from "@fancyapps/ui";

const folders = ref<FolderCatalogType[]>()
const route = useRoute()

let slider: Carousel
const initSlider = () => {
  const container = document.getElementById("catalogFolderSlider");
  const options = {
    infinite: true,
    center: false,
    transition: 'slide',
    getProgress: 'center',
    Thumbs: {
      type: "modern",
    },
  };
  slider = new Carousel(container, options);
}

let loading = ref<boolean>(true)

let variables = ref<FoldersInput>(
    {
      page: 1,
      limit: 10,
      popular: true
    }
)
const request = async () => {
  loading.value = true
  const {pending, data} = await requestCatalogFolders(variables.value)
  folders.value = data.value?.folders.data
  loading.value = pending.value
}

const {pending, data} = await requestCatalogFolders(variables.value)
folders.value = data.value?.folders.data
loading.value = pending.value


watch(data, () => {
  folders.value = data.value?.folders.data
  loading.value = false
  slider.reInit()
})

onMounted(() => {
  initSlider()
})
</script>