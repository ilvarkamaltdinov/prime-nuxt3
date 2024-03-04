<template>
  <div class="contacts">
    <Map class="contacts__map"/>
    <div class="contacts__info">
      <div class="contacts__info-group" v-if="settings.contact_schedule">
        <div class="contacts__info-group-title">Часы работы</div>
        <div class="contacts__info-group-value">
          {{ settings.contact_schedule }}
        </div>
      </div>
      <div class="contacts__info-group" v-if="settings.contact_address">
        <div class="contacts__info-group-title">Адрес</div>
        <div class="contacts__info-group-value">
          {{ settings.contact_address }}
        </div>
      </div>
      <div class="contacts__info-group" v-if="settings.contact_phone">
        <div class="contacts__info-group-title">Телефон</div>
        <div class="contacts__info-group-value">
          <Phone number/>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import Map from '~/components/Map/index.vue'
import Phone from '~/components/Phone/index.vue'
import {useSiteConfig} from "~/store/siteConfig";

const settings = useSiteConfig().settings
</script>
