<template>
  <div class="sets sets--mobile f-carousel f-carousel--sets " id="setsSlider">
    <div class="f-carousel__viewport">
      <div class="f-carousel__track">
        <nuxt-link class="sets__item f-carousel__slide" v-for="set in currentSets" :to="`/sets/${set.slug}`">
          <span class="sets__item-title">
            {{ set.title }}
          </span>
          <NuxtPicture :src="`/img/sets/${set.image}.png`"/>
        </nuxt-link>
      </div>
    </div>
  </div>
  <div class="sets sets--desktop">
    <div class="sets__line">
      <nuxt-link class="sets__item" v-for="set in currentSets" :to="`/sets/${set.slug}`">
        <span class="sets__item-title">
          {{ set.title }}
        </span>
        <NuxtPicture :src="`/img/sets/${set.image}.png`"/>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSiteConfig} from "~/store/siteConfig";
import {onMounted} from "vue";
import {Carousel} from "@fancyapps/ui";

type LocalSetType = {
  title: string;
  slug: string;
  number: string;
  image: string;
};

const localSets = ref<LocalSetType[]>([
  {
    title: "семейные",
    slug: "for-family",
    image: 'family',
    number: "01",
  },
  {
    title: "для такси",
    slug: "for-taxi",
    number: "02",
    image: 'taxi',
  },
  {
    title: "китайские новинки",
    slug: "china-new",
    number: "03",
    image: 'china',
  },
  {
    title: "седаны",
    slug: "sedan",
    number: "04",
    image: 'sedan',
  },
  {
    title: "внедорожники",
    slug: "suv",
    number: "05",
    image: 'suv',
  },
]);
const sets = useSiteConfig().sets;
const currentSets = ref<LocalSetType[]>();
currentSets.value = localSets.value.filter((item) => {
  return sets.find((i) => i.slug === item.slug);
});


let slider: Carousel
const initSlider = () => {
  const container = document.getElementById("setsSlider");
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

onMounted(() => {
  initSlider()
})
</script>