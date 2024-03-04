<template>
  <div class="sets sets--body-types">
    <div class="sets__item" v-for="item in bodyTypes">
      <img :src="`img/types/${item.slug}/aside.svg`" :alt="item.name">
      <span> {{ item.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSiteConfig} from "~/store/siteConfig";

const sets = useSiteConfig().sets
const bodyTypes = [
  {
    name: 'Седан',
    slug: 'sedan'
  },
  {
    name: 'Универсал',
    slug: 'crossover'
  },
  {
    name: 'Хэтчбек',
    slug: 'hatchback'
  },
  {
    name: 'Внедорожник',
    slug: 'suv'
  },
  {
    name: 'Лифтбек',
    slug: 'liftback'
  },
  {
    name: 'Пикап',
    slug: 'pickup'
  },
  {
    name: 'Фургон',
    slug: 'van'
  },
  {
    name: 'Купе',
    slug: 'coupe'
  },
  {
    name: 'Минивэн',
    slug: 'minivan'
  }

]
</script>
