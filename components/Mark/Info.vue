<template>
  <div class="mark-info__wrapper">
    <div class="container">
      <div class="mark-info__wrapper-logo">
        <nuxt-icon :name="`emblems/${mark.slug}`"/>
        <span class="mark-info__wrapper-dealer">{{ mark.title }}</span>
        <span class="mark-info__wrapper-dealer-official">официальный дилер</span>
      </div>
      <div class="mark-info__wrapper-text">
        <div class="mark-info__wrapper-text-title">АВТОКРЕДИТ ОТ 4.9%</div>
        <div class="mark-info__wrapper-text-grey">
          официальный
          дилер
        </div>
        <div class="mark-info__wrapper-text-sub-title">
          Получите уникальное предложение
          <span>
            ОТ НАШЕГО АВТОСАЛОНА
          </span>
        </div>
      </div>
      <div class="mark-info__wrapper-pictures">
        <div class="mark-info__wrapper-banner">
          <NuxtPicture format="avif,webp" @click.right.prevent loading="lazy"
                       :src="`/img/mark/banner.png`"/>
        </div>
        <div class="mark-info__wrapper-car">
          <NuxtPicture format="avif,webp" @click.right.prevent loading="lazy"
                       :src="`/img/marks/${mark.slug}/car@2x.png`"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {MarkType} from "~/app/types/marks";

const props = defineProps<{
  mark: MarkType;
}>();

</script>
