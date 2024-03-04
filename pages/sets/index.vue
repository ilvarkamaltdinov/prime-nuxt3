<template>
  <section class="section section--title">
    <div class="container">
      <Crumbs v-if="seoTags" :crumbs="seoTags.crumbs"/>
      <h1 class="heading heading--h1" v-html="seoTags.h1"></h1>
    </div>
  </section>
  <section class="section section--marks">
    <div class="container">
      <ListMarksHome/>
    </div>
  </section>
  <section class="section section--sets">
    <div class="container">
      <Sets/>
    </div>
  </section>
  <section class="section section--services">
    <div class="container">
      <h2 class="heading heading--h2">Услуги</h2>
      <Services/>
    </div>
  </section>
</template>

<script setup lang="ts">
import Sets from '~/components/Sets/index.vue'
import {renderSeoTemplate} from "~/composables/seo";
import Services from "~/components/Services/index.vue";

const seoTags = renderSeoTemplate('new.sets')
</script>