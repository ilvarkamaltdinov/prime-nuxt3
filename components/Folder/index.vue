<template>
  <div class="offer" v-if="folder">
    <div class="mark-info__wrapper-logo">
      <nuxt-icon :name="`emblems/${folder.mark.slug}`"/>
      <span class="mark-info__wrapper-dealer">{{ folder.mark.title }}</span>
    </div>
    <div class="offer__title">
      {{ folder.title }}
    </div>
    <div class="offer__grid">
      <div class="offer__line">
        <div class="offer__slider">
          <Render class="offer__render" :alt="`${folder.mark.title} ${folder.title}`"
                  :active-color="folder.colors[currentColor]"/>
        </div>
        <div class="offer__info">
          <div class="offer__info-tabs">
            <div class="offer__info-tabs-tab"
                 :class="{'offer__info-tabs-tab--active':infoTab === 'tech'}"
                 @click="changeInfoTab('tech')">
              <nuxt-icon class="offer__info-tabs-tab-icon" name="techs"/>
              <span class="offer__info-tabs-tab-span">Характеристики</span>
            </div>
            <div class="offer__info-tabs-tab"
                 :class="{'offer__info-tabs-tab--active':infoTab === 'color'}" @click="changeInfoTab('color')">
              <nuxt-icon class="offer__info-tabs-tab-icon" name="colors"/>
              <span class="offer__info-tabs-tab-span">Цвет авто</span>
            </div>
          </div>
          <div class="offer__grid-item offer__info-content offer__info-content--colors" v-if="infoTab === 'color'">
            <div class="offer__info-content-title">Цвета</div>
            <Colors @change-color="changeColor" :active-color="folder.colors[currentColor]" :colors="folder.colors"/>
          </div>
          <div class="offer__grid-item offer__info-content offer__info-content--tech" v-if="infoTab === 'tech'">
            <div class="offer__info-content-title">Характеристики</div>
            <Tech :tech="currentTech" type="column"/>
          </div>

          <div class="offer__info-is-active">
            <nuxt-icon class="offer__info-is-active-icon" name="is-active"/>
            <span class="offer__info-is-active-span">Авто в наличии</span>
          </div>

        </div>
        <div class="offer__line-group">
          <div class="offer__bonuses">
            <Bonuses v-if="folder.availability" @change-bonuses="changeBonuses"
                     :difference="difference"/>
          </div>
          <div class="offer__grid-item offer__controls">
            <BuyOptions class="buy__options--folder" @on-credit="onCredit" :active="folder.availability"
                        @on-exchange="onExchange"
                        :price="currentPrice" :price-old="chosenComplectation.price_old" type="folder"/>
          </div>
        </div>
      </div>
      <div class="offer__line offer__line--margin">
        <div class="offer__grid-item offer__modifications">
          <div class="offer__grid-item-title">
            Комплектация
          </div>
          <Modifications :folder="folder" :dop-sum="dopSum" :color-index="currentColor"/>
        </div>
        <div class="offer__grid-item offer__global-tech">
          <div class="offer__grid-item-title">
            Технические характеристики
          </div>
          <div class="offer__global-tech-group">
            <div class="offer__global-tech-group-line" v-for="param in chosenComplectation.modification.tech_params">
              <div class="offer__global-tech-group-line-name">{{ param.title }}</div>
              <div class="offer__global-tech-group-line-value">{{ param.value }}</div>
            </div>
          </div>
        </div>
      </div>
      <FolderMedia :folder="folder"/>
      <FolderDimensions :folder="folder"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "#imports";
import {FolderPageInput, FolderPageType} from "~/app/types/folders";
import {requestCatalogFolder} from "~/helpers/request";
import SkeletonFolderPage from '~/components/Skeleton/FolderPage.vue'
import Tech from "~/components/Tech/index.vue";
import Modifications from "~/components/Modifications/index.vue";
import FolderDimensions from "~/components/Folder/Dimensions.vue";
import Render from "~/components/Render/index.vue";
import Colors from "~/components/Colors/index.vue";
import BuyOptions from "~/components/BuyOptions/index.vue";
import Bonuses from "~/components/Bonuses/index.vue";
import Select from '~/components/Controls/Select.vue'
import FolderMedia from '~/components/Folder/Media.vue'
import {allComplectations, numberFormat} from "~/helpers/filters";
import {computed} from "@vue/reactivity";
import {useRoute} from "vue-router";
import {useModals} from "~/store/modals";
import {OfferModalTechType, OfferModalType} from "~/app/types/offers";
import {declension} from "~/helpers/declension";
import {vkAdsReachGoal, yandexCommercialNew} from "~/helpers/metrika";
import {useSiteConfig} from "~/store/siteConfig";

const route = useRoute();
const folder = ref<FolderPageType>();
const complectations = computed(() => {
  return allComplectations(folder.value?.modifications)
})
const currentTech = computed<OfferModalTechType[]>(() => {
  return [
    {
      slug: 'engine',
      value: chosenComplectation.value?.modification?.engine_volume + ' л.'
    },
    {
      slug: 'engine-power',
      value: chosenComplectation.value?.modification?.engine_power + ' л.с.'
    },
    {
      slug: 'time',
      value: folder.value?.time + ' с.'
    },
    {
      slug: 'speed',
      value: folder.value?.max_speed + ' км/ч'
    }
  ]
})
const currentComplectation = ref()
const chosenComplectation = computed(() => {
  return currentComplectation.value || complectation.value
})

const infoTab = ref<string>('tech')
const changeInfoTab = (type: string) => {
  infoTab.value = type
}

const difference = computed(() => {
  return Math.round((chosenComplectation.value.price_old - chosenComplectation.value.price) / 1000) * 1000;
})
const dopSum = ref<number>(0)
const complectation = computed({
  get: () => {
    return complectations.value[0]
  },
  set: (value) => {
    currentComplectation.value = value
  }
})
const currentPrice = computed(() => {
  return chosenComplectation.value.price + dopSum.value
})

let currentColor = ref<number>(0);

const variables: FolderPageInput = {
  mark_slug: <string>route.params.mark,
  slug: <string>route.params.folder,
};

const handlerSelect = async (data: any) => {
  complectation.value = data.option
}
const changeBonuses = async (sum: number) => {
  dopSum.value = sum
}
const changeColor = async (index: number) => {
  currentColor.value = index;
};

const {pending, data, error} = await requestCatalogFolder(variables);
if (route.query.color) {
  folder.value?.colors.map((item, index) => {
    if (item.slug === route.query.color) {
      currentColor.value = index
    }
  })
}

watch(data, () => {
  folder.value = data.value?.folder;
}, {immediate: true});

let modalOffer = computed<OfferModalType>(() => {
  return {
    id: folder.value?.id,
    mark: folder.value?.mark.title,
    folder: folder.value?.title,
    modification: chosenComplectation.value.title,
    title: `${folder.value?.mark.title} ${folder.value?.title} ${chosenComplectation.value.title}`,
    image: folder.value?.colors[currentColor.value].image.medium_webp,
    price: currentPrice.value,
    tech: currentTech.value,
    markSlug: folder.value?.mark.slug,
    folderSlug: folder.value?.slug,
    type: 'folder',

    complectationId: chosenComplectation.value.id,
    modificationId: chosenComplectation.value.modification.id,
    markId: folder.value?.mark.id,
    folderId: folder.value?.id,
    colorId: folder.value?.colors[currentColor.value].id
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
const onExchange = () => {
  useModals().setModalOffer(modalOffer.value);
  useModals().openModal({
    open: true,
    title: 'Заявка на trade-in',
    type: 'exchange-new'
  })
};


if (route.query.color) {
  folder.value?.colors.map((item, index) => {
    if (item.id === Number(route.query.color)) {
      currentColor.value = index
    }
  })
}
const settings = useSiteConfig().settings
const sendCommercial = () => {
  if (folder.value) {
    yandexCommercialNew({
      counter_commercial_id: settings.counter_commercial_id,
      id: folder.value?.id,
      mark: folder.value?.mark.title,
      folder: folder.value.title,
      price: folder.value?.min_price,
      modification: currentComplectation.value?.modification.title,
    });
  }
};

if (route.query.config) {
  let complectationId = Number(route.query.config.toString().split('-')[1])
  let modificationId = Number(route.query.config.toString().split('-')[0])
  currentComplectation.value = complectations.value.find(item => item.id === complectationId && item.modification.id === modificationId)
}
watch(data, () => {
  folder.value = data.value?.folder;
  sendCommercial()
});
</script>