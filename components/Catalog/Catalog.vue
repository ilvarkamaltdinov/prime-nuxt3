<template>
  <h2 class="heading--h2" v-if="folderPage && offers && offers.length">
    Авто в наличии
  </h2>
  <div class="catalog__wrapper" id="catalogMain">
    <CatalogSort v-if="offers && offers.length"/>
    <div class="catalog catalog--catalog" :class="{'catalog--taxi':taxi}"
         v-if="!loading">

      <div class="catalog__offers">
        <CardOffer :key="offer.id" v-for="offer in offers" :offer="offer"/>
      </div>
      <client-only v-if="!taxi">
        <Paginate
            v-if="last_page > 1"
            :value="currentPagination"
            prev-class="prev"
            next-class="next"
            :page-count="last_page"
            :click-handler="paginateClick"
            :prev-text="'Назад'"
            :next-text="'Вперед'"
            :container-class="'pagination'">
        </Paginate>
      </client-only>
      <nuxt-link v-else :to="'/sets/for-taxi'" class="button button--more">Все автомобили для такси</nuxt-link>
    </div>
    <div v-else>
      <div class="catalog__offers">
        <SkeletonCatalogOffer v-for="i in 11" :key="i"/>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import Paginate from "vuejs-paginate/src/components/Paginate.vue";
import CardOffer from "~/components/MiniCards/Offer.vue";
import CatalogSort from "~/components/Catalog/Sort.vue";
import SkeletonCatalogOffer from "~/components/Skeleton/CatalogOffer.vue";
import {computed, ref} from "#imports";
import {LocationQueryValue, useRoute} from 'vue-router';
import {watch} from 'vue';
import {scrollToElement} from "~/helpers/scroll";
import {offersCatalogGql} from '~/apollo/queries/offers/offers'
import {OfferCatalogType, OffersCatalogDataType, OffersCatalogInputType} from "~/app/types/offers";
import {request} from '~/helpers/request'

const props = defineProps<{
  taxi?: boolean;
  folderPage?: boolean
}>();
const offers = ref<OfferCatalogType[]>()
const route = useRoute()
const router = useRouter()

let loading = ref<boolean>(true)

const total = ref()
const current_page = ref()
const last_page = ref()

let currentPagination = ref<number>(1)
currentPagination.value = Number(route.query.page)


if (JSON.stringify(route.query) !== '{}') {
  await scrollToElement("#catalogMain", 100, 100, -80);
}

let variables = computed<OffersCatalogInputType>(() => {
  return {
    mark_slug: route.params.mark || route.query.mark,
    folder_slug: route.params.folder || route.query.folder,
    body_type: route.query.body_type,
    gearbox: route.query.gearbox?.toString().toUpperCase(),
    engine_type: route.query.engine_type?.toString().toUpperCase(),
    drive_type: route.query.drive_type?.toString().toUpperCase(),
    price_from: Number(route.query.price_from),
    price_to: Number(route.query.price_to),
    sort: route.query.sort || 'created_at|desc',
    set: props.taxi ? 'for-taxi' : route.params.set,
    limit: props.taxi ? 6 : 12,
    page: Number(route.query.page) || 1,
  }
})
const getOffers = async () => {
  loading.value = true
  const {
    data
  } = await request<OffersCatalogDataType, OffersCatalogInputType>(offersCatalogGql, variables.value)
  offers.value = data.value?.offers.data
  current_page.value = data.value?.offers.current_page
  last_page.value = data.value?.offers.last_page
  loading.value = false
}
// current_page.value = data.value?.offers.current_page
// last_page.value = data.value?.offers.last_page
//
// loading.value = pending.value
//
// watch(data, () => {
//   offers.value = data.value?.offers.data
//   loading.value = false
// })
// getOffers()

watch(route, async () => {
  await getOffers()
}, {immediate: true})

type PaginateQuery = {
  drive_type?: string | LocationQueryValue[];
  engine_type?: string | LocationQueryValue[];
  gearbox?: string | LocationQueryValue[];
  folder?: string | LocationQueryValue[];
  body_type?: string | LocationQueryValue[];
  mark?: string | LocationQueryValue[];
  page?: number;
  sort?: string | LocationQueryValue[];
};

const paginateClick = async (page: number) => {
  currentPagination.value = page
  await scrollToElement("#catalogMain", 100, 100, -80);
  let query: PaginateQuery = {
    page
  }
  if (route.query.sort) query.sort = route.query.sort
  if (route.query.mark) query.mark = route.query.mark
  if (route.query.folder) query.folder = route.query.folder
  if (route.query.body_type) query.body_type = route.query.body_type
  if (route.query.gearbox) query.gearbox = route.query.gearbox
  if (route.query.engine_type) query.engine_type = route.query.engine_type
  if (route.query.drive_type) query.drive_type = route.query.drive_type
  await router.push({path: route.fullPath, query});


};

</script>