<template>
  <section class="section section--title">
    <div class="container">
              <Crumbs v-if="seoTags" :crumbs="seoTags.crumbs"/>
      <h1 class="heading heading--h1" v-html="seoTags.h1"></h1>
    </div>
  </section>
  <section class="section section--banner">
    <FormBanner type="exchange"/>
  </section>
  <section class="section section--benefits">
    <div class="container">
      <Benefits type="exchange"/>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <FormExchange/>
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
import FormExchange from '~/components/Form/Exchange.vue'
import {scrollToElement} from "~/helpers/scroll";
import {onMounted} from "vue";
import {renderSeoTemplate} from "~/composables/seo";
import {useRoute} from "vue-router";
import FormBanner from "~/components/Form/Banner.vue";
import Benefits from "~/components/Benefits/index.vue";
import Services from "~/components/Services/index.vue";
import Banks from "~/components/Banks/index.vue";


const seoTags = renderSeoTemplate(`tradein`)
</script>