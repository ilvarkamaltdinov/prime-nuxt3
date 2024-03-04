<template>
  <section class="section section--title">
    <div class="container">
      <Crumbs v-if="seoTags" :crumbs="seoTags.crumbs"/>
      <!--      <h1 class="heading heading&#45;&#45;h1" v-html="seoTags.h1"></h1>-->
      <h1 class="heading heading--h1">Отзывы</h1>
    </div>
  </section>
  <section class="section section--reviews">
    <div class="container">
      <Reviews/>
    </div>

  </section>
</template>

<script setup lang="ts">
import Reviews from '~/components/Reviews/index.vue'
import {useRoute} from "vue-router";

const route = useRoute()

const seoTags = renderSeoTemplate(`reviews`)
</script>