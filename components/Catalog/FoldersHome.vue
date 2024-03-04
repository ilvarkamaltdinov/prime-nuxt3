<template>
  <div class="f-carousel f-carousel--folders catalog__folders" id="catalogFolderSlider">
    <div class="f-carousel__viewport">
      <div class="f-carousel__track">
        <div class="f-carousel__slide catalog__folder-slide" v-for="folder in folders">
          <CardFolder :folder="folder"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CardFolder from "~/components/MiniCards/Folder.vue";
import {requestCatalogFolders} from "~/helpers/request";
import {ref} from "#imports";
import {FolderCatalogType, FoldersInput} from "~/app/types/folders";
import {watch} from 'vue';
import {useRoute} from 'vue-router';
import {Carousel} from "@fancyapps/ui";

const props = defineProps<{
  taxi?: boolean;
  popular?: boolean;
}>();
const folders = ref<FolderCatalogType[]>()
const route = useRoute()
let slider: Carousel
function initSlider() {
  if (process.client) {
    const container = document.getElementById("catalogFolderSlider");
    const options = {
      infinite: true,
      center: false,
      transition: 'slide',
      getProgress: 'center',
    };
    slider = new Carousel(container, options);
  }
}

let loading = ref<boolean>(true)

let variables = ref<FoldersInput>(
    {
      page: 1,
      limit: 10,
      popular: props.popular,
      taxi: props.taxi
    }
)
const {data} = await requestCatalogFolders(variables.value)
folders.value = data.value?.folders.data
const getFolders = async () => {
  const {data} = await requestCatalogFolders(variables.value)
  folders.value = data.value?.folders.data
  initSlider()
}


watch(data, async () => {
  folders.value = data.value?.folders.data
  loading.value = false
  slider.reInit()
})


onMounted(() => {
  initSlider()
})
</script>