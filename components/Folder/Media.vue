<template>
  <div class="folder__media" v-if="folder.interior_images.length && folder.exterior_images.length">
    <h2 class="heading heading--h2">
      внешний вид
    </h2>
    <div class="folder__media-tabs">
      <button class="folder__media-tabs-tab" @click="currentButton = 'exterior'" :class="{
        'folder__media-tabs-tab--active': currentButton === 'exterior',
      }">
        Экстерьер
      </button>
      <button class="folder__media-tabs-tab" @click="currentButton = 'interior'" :class="{
        'folder__media-tabs-tab--active': currentButton === 'interior',
      }">
        Интерьер
      </button>
    </div>
    <div v-show="currentButton === 'interior'" class="f-carousel--folder-media f-carousel" id="slider-interior">
      <div class="f-carousel__viewport">
        <div class="f-carousel__track">
          <div class="f-carousel__slide folder__media-slide"
               :class="{'folder__media-slide--one':folder.interior_images.length === 1}"
               v-for="item in folder.interior_images">
            <img @click.right.prevent class="lazyload"
                 data-fancybox="gallery-interior" :data-srcset="item.large_webp"
                 :data-src="item.original"
                 :alt="`Интерьер/салон нового автомобиля ` + folder.mark.title + ` ` + folder.title" src=""/>
          </div>

        </div>
      </div>
    </div>

    <div v-show="currentButton === 'exterior'" class="f-carousel--folder-media f-carousel" id="slider-exterior">
      <div class="f-carousel__viewport">
        <div class="f-carousel__track">
          <div class="f-carousel__slide folder__media-slide"
               :class="{'folder__media-slide--one':folder.exterior_images.length === 1}"
               v-for="item in folder.exterior_images">
            <img @click.right.prevent class="lazyload"
                 data-fancybox="gallery-exterior" :data-srcset="item.large_webp"
                 :data-src="item.original"
                 :alt="`Внешний вид нового автомобиля ` + folder.mark.title + ` ` + folder.title" src=""/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="offer__media" v-else-if="folder.images.length">
    <h2 class="heading heading--h2">Фото</h2>
    <div class="f-carousel--folder-media f-carousel" id="slider-folder">
      <div class="f-carousel__viewport">
        <div class="f-carousel__track">
          <img @click.right.prevent class="f-carousel__slide folder__media-slide lazyload" v-for="item in folder.images"
               :data-srcset="item.large_webp" :data-src="item.original" alt="img" data-fancybox="gallery-folder"
               src=""/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Carousel, Fancybox} from "@fancyapps/ui";
import {onMounted} from "vue";
import {FolderPageType} from "~/app/types/folders";

const props = defineProps<{
  folder: FolderPageType;
}>();
let currentButton = ref<string>("exterior");

const options = {
  infinite: true,
  center: true,
  transition: "slide",
};

const initSlider = () => {
  const container = document.getElementById("slider-folder");
  const fc = new Carousel(container, options);
};
const initSliderExterior = () => {
  const container = document.getElementById("slider-exterior");
  const fc = new Carousel(container, options);
};
const initSliderInterior = () => {
  const container = document.getElementById("slider-interior");
  const fc = new Carousel(container, options);
};

onMounted(() => {
  if (
      props.folder.interior_images.length &&
      props.folder.exterior_images.length
  ) {
    initSliderExterior();
    initSliderInterior();
  } else if (props.folder.images.length) {
    initSlider();
  }

  Fancybox.bind("[data-fancybox]", {
    Hash: false,
    contentClick: "iterateZoom",
    Images: {
      protected: true,
    },
  });
});
</script>