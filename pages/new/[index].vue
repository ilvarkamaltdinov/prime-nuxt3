<template>
  <section class="section section--title">
    <div class="container">
      <Crumbs v-if="seoTags" :crumbs="seoTags.crumbs"/>
      <h1 class="heading heading--h1" v-html="seoTags.h1"></h1>
    </div>
  </section>
  <section class="section section--marks">
    <div class="container">
      <ListMarks :home="false"/>
    </div>
  </section>
  <section class="section section--filters">
    <div class="container">
      <FiltersList/>
    </div>
  </section>
  <!--  <section class="section section&#45;&#45;body-types">-->
  <!--    <div class="container">-->
  <!--      <SetsBodyTypes/>-->
  <!--    </div>-->
  <!--  </section>-->
  <section class="section section--catalog">
    <div class="container">
      <Catalog/>
    </div>
  </section>
</template>

<script setup lang="ts">
import Catalog from "~/components/Catalog/Catalog.vue";
import ListMarks from "~/components/List/Marks.vue";
import FiltersList from "~/components/Filters/List.vue";
import SetsBodyTypes from "~/components/Sets/BodyTypes.vue";

import {renderSeoTemplate} from "~/composables/seo";
import Crumbs from "~/components/Crumbs/index.vue";

const seoTags = renderSeoTemplate('new.catalog')
</script>