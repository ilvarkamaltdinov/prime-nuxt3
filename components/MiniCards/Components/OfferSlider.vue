<template>
  <div class="mini-card__slider mini-card__slider--mobile">
    <nuxt-link :to="`/new/${offer.mark.slug}/${offer.folder.slug}/${offer.id}`"
               v-for="(img, index) in offer.images"
               :key="index"
               :class="{'mini-card__offer-slide--render':offer.type.name === 'SITE'}"
               class="mini-card__slider-slide">
<!--      <NuxtImg :src="bank.image" :alt="bank.title" class="banks__item-img"/>-->
      <img class="lazyload"
           :data-src="img.small_webp"
           :alt="offer.mark.title" src=""/>
    </nuxt-link>
  </div>
  <div class="mini-card__slider mini-card__slider--desktop">
    <nuxt-link :to="`/new/${offer.mark.slug}/${offer.folder.slug}/${offer.id}`"
               :class="{'mini-card__offer-slide--render':offer.type.name === 'SITE'}"
               class="mini-card__slider-slide">
      <img :data-src="<string>coverSrc"
           @load="onImgLoad"
           :class="className"
           class="lazyload"
           alt="" src=""/>
      <span class="brazzers__button-container"
            @mouseleave="mouseLeave">
        <span
            class="brazzers__button"
            v-if="photos && photos.length > 0"
            v-for="(photo, index) in photos"
            :key="photo.small_webp"
            @mouseover="mouseOver(photo.small_webp)"
        ></span>
      </span>
    </nuxt-link>
  </div>
</template>
<script setup lang="ts">
import {OfferCatalogType} from "~/app/types/offers";

const props = defineProps<{
  offer: OfferCatalogType;
}>();

let className = ref<string>("");
let limit = ref<number>(10);
let forceCoverPhoto = ref<string | null>(null);

const onImgLoad = () => {
  className.value = "loaded";
};
const mouseOver = (photo: string) => {
  if (forceCoverPhoto.value !== null) {
    className.value = "load";
  }
  forceCoverPhoto.value = photo;
};
const mouseLeave = () => {
  forceCoverPhoto.value = null;
  className.value = "loaded";
};
const photos = computed(() => {
  return props.offer.images;
});
const coverSrc = computed(() => {
  return forceCoverPhoto.value
      ? forceCoverPhoto.value
      : photos.value[0]?.small_webp;
});
</script>
