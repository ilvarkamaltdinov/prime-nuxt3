<template>
  <Header/>
  <main class="wrapper">
    <slot>
    </slot>
  </main>
  <Footer/>
  <Modal/>
  <CallbackMobile/>
</template>

<script setup lang="ts">
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Modal from '~/components/Modal'
import CallbackMobile from '~/components/Callback/Mobile.vue'
import {useModals} from "~/store/modals";
import {sendUrlYandexMetrika, yandexMetrika, vkAds, googleTag} from "~/helpers/metrika";
import {onMounted} from "vue";
import {useRoute} from 'vue-router';
import {watch} from 'vue';
import {useSiteConfig} from "~/store/siteConfig";

const modal = computed(() => useModals().modal)

const route = useRoute()
const getUrlParams = () => {
  if (route.query) {
    for (let param in route.query) {
      if (
          param === 'utm_source'
          || param === 'utm_medium'
          || param === 'utm_term'
          || param === 'utm_content'
          || param === 'utm_campaign') {
        if (route.query[param]) {
          localStorage.setItem(param, route.query[param])
        }
      }
    }
  }
}

const settings = useSiteConfig().settings

onMounted(() => {
  window.dataLayer = window.dataLayer || [];
  window._tmr = window._tmr || [];
  yandexMetrika(route, settings.counter_ym)
  vkAds(settings.counter_vk)
  getUrlParams()
  googleTag(settings.counter_gtag)
})
watch(route, (r) => sendUrlYandexMetrika(r, settings.counter_ym))
</script>