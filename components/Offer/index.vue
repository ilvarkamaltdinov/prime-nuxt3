<template>
  <section class="section section--title" v-if="seoTags">
    <div class="container">
      <Crumbs :crumbs="seoTags.crumbs"/>
      <h1 v-html="seoTags.h1" class="heading heading--h1 visually-hidden"></h1>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="offer" v-if="offer">
        <div class="mark-info__wrapper-logo">
          <nuxt-icon :name="`emblems/${offer.mark.slug}`"/>
          <span class="mark-info__wrapper-dealer">{{ offer.mark.title }}</span>
        </div>
        <div class="offer__title">
          {{ offer.folder.title }}
        </div>
        <div class="offer__grid">
          <div class="offer__line offer__line--margin">
            <div class="offer__slider offer__slider--no-circles">
              <OfferSlider :offer="offer"/>
            </div>
            <div class="offer__grid-item offer__info offer__info--absolute">
              <Tech :tech="currentTech" type="line"/>
            </div>
            <div class="offer__line-group">
              <div class="offer__bonuses">
                <Bonuses v-if="offer.is_active" @change-bonuses="changeBonuses"
                         :difference="difference"/>
              </div>
              <div class="offer__grid-item offer__controls">
                <BuyOptions class="buy__options--folder" @on-credit="onCredit" :active="offer.is_active"
                            @on-exchange="onExchange"
                            :price="currentPrice" :price-old="offer.price_old" type="offer"/>
              </div>
            </div>
          </div>
          <div class="offer__line offer__line--margin">
            <div class="offer__grid-item offer__complectation">
              <div class="offer__grid-item-title">
                Комплектация
              </div>
              <OfferEquipment :offer="offer"/>
            </div>
            <div class="offer__grid-item offer__complectation" v-if="offer.modification.tech_params">
              <div class="offer__grid-item-title">
                Технические характеристики
              </div>
              <div class="offer__global-tech-group">
                <div class="offer__global-tech-group-line"
                     v-for="(param, index) in offer.modification.tech_params"
                     v-show="param.title !== 'Длина' && param.title !== 'Высота' && param.title !== 'Ширина' && param.title !== 'Колесная база' && param.title !== 'Клиренс'"
                     :key="index">
                  <div class="offer__global-tech-group-line-name">{{ param.title }}</div>
                  <div class="offer__global-tech-group-line-value">{{ param.value }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section--services">
    <div class="container">
      <h2 class="heading heading--h1">Услуги</h2>
      <Services/>
    </div>
  </section>
</template>

<script setup lang="ts">
import Bonuses from "~/components/Bonuses/index.vue";
import OfferSlider from "~/components/Offer/Slider.vue";
import TechLine from "~/components/Tech/index.vue";
import OfferEquipment from "~/components/Offer/Equipment.vue";
import BuyOptions from "~/components/BuyOptions/index.vue";
import Services from "~/components/Services/index.vue";
import {requestOffer} from "~/helpers/request";
import {ref} from "#imports";
import {renderSeoTemplate} from "~/composables/seo";
import {vkAdsReachGoal, yandexCommercialNew} from "~/helpers/metrika";
import {onMounted} from "vue";
import {computed} from "@vue/reactivity";
import {useModals} from "~/store/modals";
import {OfferModalTechType, OfferModalType, OfferPageInputType, OfferPageType} from "~/app/types/offers";
import {useSiteConfig} from "~/store/siteConfig";
import Render from "~/components/Render/index.vue";
import Tech from "~/components/Tech/index.vue";
import Modifications from "~/components/Modifications/index.vue";
import Colors from "~/components/Colors/index.vue";

const settings = useSiteConfig().settings
const route = useRoute();
const variables: OfferPageInputType = {
  folder_slug: <string>route.params.folder,
  mark_slug: <string>route.params.mark,
  id: <number>Number(route.params.id),
};
const offer = ref<OfferPageType>();

const dopSum = ref<number>(0)
const changeBonuses = async (sum: number) => {
  dopSum.value = sum
}
const difference = computed<number>(() => {
  if (offer.value) {
    return Math.round((offer.value.price_old - offer.value.price) / 1000) * 1000;
  } else return 0
})
const currentPrice = computed<number>(() => {
  if (offer.value) {
    return offer.value.price + dopSum.value
  } else return 0
})
const currentTech = computed<OfferModalTechType[]>(() => {
  return [
    {
      slug: 'engine',
      value: offer.value?.modification?.engine_volume + ' л.' || ''
    },
    {
      slug: 'engine-power',
      value: offer.value?.modification?.engine_power + ' л.с.' || ''
    },
    {
      slug: 'gearbox',
      value: offer.value?.modification?.gearbox.title || ''
    },
    {
      slug: 'body-type',
      value: offer.value?.folder.bodyType.title || ''
    }
  ]
})

let seoTags = null;

const {data, error} = await requestOffer(variables);
if (error.value) {
  throw createError({statusCode: 404, statusMessage: "Page Not Found"});
} else {
  offer.value = data.value?.offer;
}

const sendCommercial = () => {
  if (offer.value) {
    yandexCommercialNew({
      counter_commercial_id: settings.counter_commercial_id,
      id: offer.value?.id,
      mark: offer.value?.mark.title,
      folder: offer.value?.folder.title,
      price: offer.value?.price,
      modification: offer.value?.modification.title,
    });
    vkAdsReachGoal(settings.counter_vk, offer.value?.price, offer.value?.id, false);
  }
};
watch(data, () => {
  offer.value = data.value?.offer;
  seoTags = renderSeoTemplate("new.offer", {
        offer: offer.value,
      },
      offer.value?.images[0].medium_webp);
  sendCommercial();
});

if (offer.value) {
  seoTags = renderSeoTemplate("new.offer", {
    offer: offer.value,
  });
}
onMounted(() => {
  sendCommercial();
});

let modalOffer = computed<OfferModalType>(() => {
  return {
    id: offer.value?.id,
    mark: offer.value?.mark.title,
    markSlug: offer.value?.mark.slug,
    folder: offer.value?.folder.title,
    folderSlug: offer.value?.folder.slug,
    modification: offer.value?.complectation.title,
    title: `${offer.value?.mark.title} ${offer.value?.folder.title} ${offer.value?.modification.title} ${offer.value?.complectation.title}`,
    image: offer.value?.images[0].medium_webp,
    price: offer.value?.price,
    tech: currentTech.value,
    type: 'offer',
    offerType: offer.value?.type.name
  }
})


const onCredit = () => {
  useModals().setModalOffer(modalOffer.value);
  useModals().openModal({
    open: true,
    title: 'Заявка на автокредит',
    type: 'credit-new'
  })
};
const onExchange = () => {
  useModals().setModalOffer(modalOffer.value);
  useModals().openModal({
    open: true,
    title: 'Заявка на Trade-in',
    type: 'exchange-new'
  })
};

</script>