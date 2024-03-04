<template>
  <section class="section section--title">
    <div class="container">
      <Crumbs v-if="seoTags" :crumbs="seoTags.crumbs"/>
      <h1 class="heading heading--h1" v-html="seoTags.h1"></h1>
    </div>
  </section>
  <section class="section section--banner">
    <FormBanner type="taxi"/>
  </section>
  <section class="section section--benefits">
    <div class="container">
      <Benefits type="credit"/>
    </div>
  </section>
  <section class="section section--home-folders">
    <div class="container">
      <h2 class="heading heading--h2">
        Авто под такси
      </h2>
      <CatalogFoldersHome :taxi="true"/>
    </div>
  </section>
  <section class="section section--catalog">
    <div class="container">
      <h2 class="heading heading--h2">
        В наличии
      </h2>
      <Catalog :taxi="true"/>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <FormCredit :taxi="true"/>
    </div>
  </section>
  <section class="section section--services">
    <div class="container">
      <h2 class="heading heading--h2">Услуги</h2>
      <Services/>
    </div>
  </section>
  <section class="section section--banks">
    <div class="container">
      <h2 class="heading heading--h2">Банки-партнеры</h2>
      <Banks/>
    </div>
  </section>
</template>

<script setup lang="ts">
import FormBanner from '~/components/Form/Banner.vue'
import Benefits from '~/components/Benefits/index.vue'
import FormCredit from '~/components/Form/Credit.vue'
import {useRoute} from "vue-router";
import Services from "~/components/Services/index.vue";
import Banks from "~/components/Banks/index.vue";
import CatalogFoldersHome from "~/components/Catalog/FoldersHome.vue";
import Catalog from "~/components/Catalog/Catalog.vue";

const route = useRoute()

// definePageMeta({
//   validate: async (route) => {
//     // return route.params.category === 'u' || route.params.category === 'n';
//     return route.params.category === 'n';
//   }
// })

// onMounted(() => {
//   if (route.query.category) {
//     scrollToElement('#form', 0)
//   }
// })


const seoTags = renderSeoTemplate(`taxi`)
</script>