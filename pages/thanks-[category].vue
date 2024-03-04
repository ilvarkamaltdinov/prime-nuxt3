<template>
  <section class="section section--thanks">
    <div class="container container--thanks">
      <h1 class="heading heading--h1" v-html="seoTags.h1"></h1>
      <p class="text__p" v-if="useSiteConfig().isNY">
        Менеджер свяжется с Вами 2 января.
      </p>
      <p class="text__p" v-else>
        Менеджер свяжется с Вами в течение 2-3 минут.
      </p>
    </div>
  </section>
</template>
<script setup lang="ts">
import SectionServices from "~/components/Section/Services.vue";
import {renderSeoTemplate} from "~/composables/seo";
import {definePageMeta} from "#imports";
import {useSiteConfig} from "~/store/siteConfig";
const seoTags = renderSeoTemplate('thanks')

definePageMeta({
  validate: async (route) => {
    return route.params.category === 'credit'
        || route.params.category === 'exchange'
        || route.params.category === 'callback'
        || route.params.category === 'installment'
        || route.params.category === 'taxi';
  }
})

</script>