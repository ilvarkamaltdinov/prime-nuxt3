<template>
  <nuxt-link :class="{'mini-card--folder--catalog':catalog ,'mini-card--folder--home':!catalog }"
             :to="`/new/${folder.mark.slug}/${folder.slug}`"
             class="mini-card mini-card--folder">
    <div class="mini-card__title">
      <div class="mini-card__bold-title">
        {{ folder.title }}
      </div>
      <div class="mini-card__regular-title">
        {{ folder.mark.title }}
      </div>
    </div>
    <NuxtPicture loading="lazy" class="mini-card__image mini-card__image--folder"
                 format="avif,webp"
                 :alt="folder.title"
                 :src="folder.image.image_medium"/>
    <div class="mini-card__prices">
      <div class="mini-card__prices-price mini-card__prices-price--actual">
        От {{ numberFormat(folder.min_price) }} ₽
      </div>
      <div class="mini-card__prices-price mini-card__prices-price--credit">
        От {{ creditPrice(folder.min_price) }} ₽/мес.
      </div>
    </div>
    <div class="mini-card__controls">
      <div @click.prevent="onCredit" class="button button--white" v-if="folder.availability">
        В кредит
      </div>
      <!--      <div class="button button&#45;&#45;border-opacity" v-else-if="folder.arrival">-->
      <!--        Скоро в наличии-->
      <!--      </div>-->
      <!--      <div class="button button&#45;&#45;border-opacity" v-else-if="!folder.availability">-->
      <!--        Нет в наличии-->
      <!--      </div>-->
      <div class="button button--border">
        Подробнее
      </div>
    </div>
  </nuxt-link>
</template>
<script setup lang="ts">
import {FolderCatalogType} from "~/app/types/folders";
import {useCatalog} from "~/store/catalog";
import {CreditFolderType, useCredit} from "~/store/credit";
import {useSiteConfig} from "~/store/siteConfig";
import {computed} from "@vue/reactivity";
import {creditPrice, numberFormat} from "~/helpers/filters";
import {useModals} from "~/store/modals";
import {OfferModalTechType, OfferModalType} from "~/app/types/offers";
import {cheaperComplectation} from '~/helpers/filters'

const props = defineProps<{
  folder: FolderCatalogType;
  catalog?: boolean;
}>();
const currentTech = computed<OfferModalTechType[]>(() => {
  return [
    {
      slug: 'engine',
      value: cheaperComplectation(props.folder.modifications).modification?.engine_volume + ' л.'
    },
    {
      slug: 'engine-power',
      value: cheaperComplectation(props.folder.modifications).modification?.engine_power + ' л.с.'
    },
    {
      slug: 'time',
      value: props.folder.time + ' с.'
    },
    {
      slug: 'speed',
      value: props.folder.max_speed + ' км/ч'
    }
  ]
})
let modalOffer = computed<OfferModalType>(() => {
  return {
    id: props.folder.id,
    mark: props.folder.mark.title,
    folder: props.folder.title,
    modification: cheaperComplectation(props.folder.modifications).modification,
    title: `${props.folder.mark.title} ${props.folder.title} ${cheaperComplectation(props.folder.modifications).title}`,
    image: props.folder.image.image_medium,
    price: props.folder.min_price,
    tech: currentTech.value,
    markSlug: props.folder.mark.slug,
    folderSlug: props.folder.slug,
    type: 'folder',

    complectationId: cheaperComplectation(props.folder.modifications).id,
    modificationId: cheaperComplectation(props.folder.modifications).modification.id,
    markId: props.folder.mark.id,
    folderId: props.folder.id,
    colorId: props.folder.colors[0].id
  }
})

const onCredit = () => {
  useModals().setModalOffer(modalOffer.value);
  useModals().openModal({
    open: true,
    title: 'оставить заявку на автокредит',
    type: 'credit-new'
  })
};
const router = useRouter();

</script>