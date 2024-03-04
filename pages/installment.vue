<template>
  <section class="section section--title">
    <div class="container">
      <Crumbs v-if="seoTags" :crumbs="seoTags.crumbs"/>
      <h1 class="heading heading--h1" v-html="seoTags.h1"></h1>
    </div>
  </section>
  <section class="section section--banner">
    <FormBanner type="installment"/>
  </section>
  <section class="section section--benefits">
    <div class="container">
      <Benefits type="installment"/>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <FormInstallment/>
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
import FormInstallment from '~/components/Form/Installment.vue'
import {useRoute} from "vue-router";
import Services from "~/components/Services/index.vue";
import Banks from "~/components/Banks/index.vue";

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


const seoTags = renderSeoTemplate('installment')
</script>