<template>
  <section class="section section--title">
    <div class="container">
      <Crumbs v-if="seoTags" :crumbs="seoTags.crumbs"/>
      <h1 class="heading heading--h1" v-html="seoTags.h1"></h1>
    </div>
  </section>
  <section class="section section--contacts">
    <div class="container">
      <Contacts/>
    </div>
  </section>
<!--  <section class="section section&#45;&#45;banks">-->
<!--    <div class="container">-->
<!--      <h2 class="heading heading&#45;&#45;h1">Банки-партнеры</h2>-->
<!--      <Banks/>-->
<!--    </div>-->
<!--  </section>-->
</template>
<script setup lang="ts">
import Contacts from "~/components/Contacts";
import {renderSeoTemplate} from "~/composables/seo";
import Banks from "~/components/Banks/index.vue";

const seoTags = renderSeoTemplate('contacts')
</script>