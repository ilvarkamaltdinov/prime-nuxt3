<template>
  <div class="phone" @click="phoneClick" v-if="isNight && settings.contact_phone"
       :class="{'header__phone':header}">
    <span class="phone__span" v-if="number">{{ settings.contact_phone }}</span>
    <nuxt-icon class="phone__icon" v-if="icon" name="phone"/>
  </div>
  <a class="phone" v-else-if="settings.contact_phone"
     :href="`tel:${clearPhone(settings.contact_phone)}`"
     :class="{'header__phone':header}">
    <span class="phone__span" v-if="number">{{ settings.contact_phone }}</span>
    <nuxt-icon class="phone__icon" v-if="icon" name="phone"/>
  </a>
</template>

<script setup lang="ts">
import {useSiteConfig} from "~/store/siteConfig";
import {useModals} from "~/store/modals";
import {clearPhone} from "~/helpers/filters";

const props = defineProps<{
  number?: boolean;
  icon?: boolean;
  header?: boolean;
}>();
let isNight = computed(() => useSiteConfig().isNight)
let settings = useSiteConfig().settings
const phoneClick = () => {
  useModals().openModal({
    open: true,
    title: 'обратный звонок',
    type: 'express'
  })
}
</script>
