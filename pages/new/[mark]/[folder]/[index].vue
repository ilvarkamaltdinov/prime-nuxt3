<template>
  <section class="section section--title">
    <div class="container">
      <Crumbs v-if="seoTags" :crumbs="seoTags.crumbs"/>
      <h1 class="heading heading--h1 visually-hidden" v-html="seoTags.h1"></h1>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <Folder/>
    </div>
  </section>
  <section class="section section--folders-catalog">
    <div class="container">
      <Catalog class="offer__catalog" folder-page/>
    </div>
  </section>
</template>

<script setup lang="ts">
import Folder from "~/components/Folder/index.vue";
import Catalog from "~/components/Catalog/Catalog.vue";

const route = useRoute()
const marks = useSiteConfig().catalog
const folders = marks.find(item => item.slug === route.params.mark)?.folders
import {renderSeoTemplate} from "~/composables/seo";
import Crumbs from "~/components/Crumbs/index.vue";
import {useSiteConfig} from "~/store/siteConfig";

definePageMeta({
  validate: async (route) => {
    let mark = useSiteConfig().catalog.find(item => item.slug === route.params.mark)
    let folder = mark?.folders.find(item => item.slug === route.params.folder)
    if (mark) {
      return !!folder;
    } else return false
  }
})

const seoTags = renderSeoTemplate('new.folder', {
  mark: marks.find(item => item.slug === route.params.mark),
  folder: folders?.find(item => item.slug === route.params.folder)
})

</script>