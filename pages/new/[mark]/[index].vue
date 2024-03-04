<template>
  <section class="section section--title">
    <div class="container">
      <Crumbs v-if="seoTags" :crumbs="seoTags.crumbs"/>
      <h1 class="heading heading--h1 visually-hidden" v-html="seoTags.h1"></h1>
    </div>
  </section>
  <section class="section section--mark">
    <MarkInfo v-if="currentMark" :mark="currentMark"/>
  </section>
  <section class="section">
    <div class="container">
      <CatalogFolders/>
    </div>
  </section>
  <section class="section section--services">
    <div class="container">
      <h2 class="heading heading--h1">Услуги</h2>
      <Services/>
    </div>
  </section>
</template>

<script setup lang="ts">
import {definePageMeta} from '#imports'
import {renderSeoTemplate} from "~/composables/seo";
import {useSiteConfig} from "~/store/siteConfig";
import CatalogFolders from "~/components/Catalog/CatalogFolders.vue";
import Crumbs from "~/components/Crumbs/index.vue";
import MarkInfo from "~/components/Mark/Info.vue";
import Services from "~/components/Services/index.vue";
import {MarkType} from "~/app/types/marks";

const route = useRoute()
const marks = useSiteConfig().catalog
const currentMark = computed<MarkType | undefined>(() => {
  return marks.find(item => item.slug === route.params.mark)
})

definePageMeta({
  validate: async (route) => {
    return !!useSiteConfig().catalog.find(item => item.slug === route.params.mark);
  }
})

const seoTags = renderSeoTemplate('new.mark', {
  mark: marks.find(item => item.slug === route.params.mark),
}, `${useSiteConfig().site.link}/img/marks/${currentMark.value?.slug}/car@2x.png`)
</script>