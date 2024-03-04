<template>
  <div class="callback__mobile" v-if="show">
    <div class="button button--callback" @click="callback">
      <div class="button--title">позвонить</div>
      <div class="button--text">{{ schedule }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSiteConfig} from "~/store/siteConfig";
import {useModals} from "~/store/modals";

let show = ref(true)

const schedule = computed(() => {
  return useSiteConfig().settings.contact_schedule?.toString().replace('Ежедневно', '')
})

function callback() {
  useModals().openModal({
    open: true,
    title: 'обратный звонок',
    type: 'express'
  })
}
</script>