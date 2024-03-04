<template>
  <section class="section section--home home">
    <h1 class="visually-hidden" v-html="seoTags.h1"></h1>
    <div class="container">
      <div class="home__content">
        <h2 class="heading heading--h1">
          Автокредит от 4.9%
        </h2>
        <nuxt-link to="/new" class="button home__button button--white">
          Перейти к акции
        </nuxt-link>
      </div>

      <NuxtPicture loading="lazy" class="home__image" format="avif,webp" src="/img/home/home.jpg"/>
    </div>
  </section>
  <section class="section section--filters section--filters-home">
    <div class="container">
      <FiltersList/>
    </div>
  </section>
  <section class="section section--marks">
    <div class="container">
      <ListMarks home/>
    </div>
  </section>
  <section class="section section--home-folders">
    <div class="container">
      <h2 class="heading heading--h2">
        Популярные модели
      </h2>
      <CatalogFoldersHome :popular="true"/>
    </div>
  </section>
  <section class="section section--services">
    <div class="container">
      <h2 class="heading heading--h2">Акции</h2>
      <Services/>
    </div>
  </section>
<!--  <section class="section section&#45;&#45;sets">-->
<!--    <div class="container">-->
<!--      <h2 class="heading heading&#45;&#45;h2">Подборки</h2>-->
<!--      <Sets/>-->
<!--    </div>-->
<!--  </section>-->
  <section class="section section--banks">
    <div class="container">
      <h2 class="heading heading--h2">Банки-партнеры</h2>
      <Banks/>
    </div>
  </section>
  <section class="section section--contacts">
    <div class="container">
      <h2 class="heading heading--h2">Контакты</h2>
      <Contacts/>
    </div>
  </section>

</template>
<script setup lang="ts">
import FiltersList from '~/components/Filters/List.vue'
import CatalogFoldersHome from '~/components/Catalog/FoldersHome.vue'
import Services from '~/components/Services'
import Sets from '~/components/Sets/index.vue'
import ListMarks from '~/components/List/Marks.vue'

import Contacts from "~/components/Contacts/index.vue";
import {useSiteConfig} from "~/store/siteConfig";

const settings = useSiteConfig().settings
const seoTags = renderSeoTemplate('index')
</script>
