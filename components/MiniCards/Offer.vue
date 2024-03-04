<template>
  <article class="mini-card mini-card--offer">
    <MiniCardsComponentsOfferSlider :offer="offer"/>
    <div class="mini-card__title">
      <div class="mini-card__bold-title">
        {{ offer.folder.title }}
      </div>
      <div class="mini-card__regular-title">
        {{ offer.mark.title }}
      </div>
    </div>
<!--    <div class="mini-card__tech">-->
    <!--      <div class="mini-card__tech-item">{{ offer.modification.engine_type.title }}</div>-->
    <!--      <div class="mini-card__tech-item">{{ offer.modification.engine_power }} л.с</div>-->
    <!--      <div class="mini-card__tech-item">{{ offer.modification.engine_volume }} л.</div>-->
    <!--      <div class="mini-card__tech-item">{{ offer.modification.drive_type.title }}</div>-->
    <!--    </div>-->
    <div class="mini-card__prices">
      <div class="mini-card__prices-price mini-card__prices-price--actual">
        От {{ numberFormat(offer.price) }} ₽
      </div>
      <div class="mini-card__prices-price mini-card__prices-price--credit">
        От {{ creditPrice(offer.price) }} ₽/мес.
      </div>
    </div>
    <div class="mini-card__controls">
      <nuxt-link :to="`/new/${offer.mark.slug}/${offer.folder.slug}/${offer.id}`" class="button button--white">
        В наличии
      </nuxt-link>
      <nuxt-link :to="`/new/${offer.mark.slug}/${offer.folder.slug}/${offer.id}`" class="button button--opacity">
        Подробнее
      </nuxt-link>
    </div>
  </article>
</template>
<script setup lang="ts">
import MiniCardsComponentsOfferSlider from '~/components/MiniCards/Components/OfferSlider.vue'
import {OfferCatalogType} from "~/app/types/offers";
import {creditPrice, numberFormat} from "~/helpers/filters";

const props = defineProps<{
  offer: OfferCatalogType;
}>();


</script>