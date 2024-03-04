<template>
  <div v-if="isRender" class="offer__slider-render">
    <NuxtPicture @click.prevent :src="offer.images[0].original"/>
  </div>
  <div v-else class="offer__slider offer__slider--no-circles">
    <div class="f-carousel f-carousel--no-arrows" id="offerSlider">
      <div class="f-carousel__viewport">
        <div class="f-carousel__track">
          <div class="f-carousel__slide offer__slider-slide" :data-thumb-src="img.tiny_webp"
               v-for="img in offer.images">
            <NuxtImg data-fancybox="gallery" @click.right.prevent :data-src="img.original"
                     :alt="offer.mark.title" :src="img.medium_webp"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">

import {Carousel, Fancybox} from "@fancyapps/ui";
import {onMounted} from "vue";
import {OfferPageType} from "~/app/types/offers";

const props = defineProps<{
  offer: OfferPageType
}>()

const isRender = computed(() => {
  if (props.offer.type) {
    if (props.offer.type.name === 'SITE') {
      return true
    }
  }
})
onMounted(() => {
  if (!isRender.value) {
    const container = document.getElementById("offerSlider");
    const options = {
      infinite: true,
      center: false,
      transition: 'slide',
      preload: 3,
      getProgress: 'center',
    }
    const fc = new Carousel(container, options);
    Fancybox.bind("[data-fancybox]", {
      Hash: false,
      contentClick: "iterateZoom",
      Images: {
        protected: true
      }
    });
  }
})


</script>