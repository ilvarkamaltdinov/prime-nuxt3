<template>
  <div class="modifications">
    <div class="modifications-tabs">
      <div class="modifications-tabs-tab" :class="{'modifications-tabs-tab--active':modificationIndex === index }" @click="choseModification(index)"
           v-for="(modification, index) in folder.modifications">
        {{ modification.title }}
      </div>
    </div>
    <div class="modifications__complectations">
      <div class="modifications__complectations-complectation"
           v-for="complectation in chosenModification.complectations">
        <div class="modifications__complectations-complectation-line">
          <div class="modifications__complectations-complectation-line-group">
            <div class="modifications__complectations-complectation-title">
              {{ complectation.title }}
            </div>
            <div class="modifications__complectations-complectation-tech">
              <span>{{ chosenModification.drive_type.title }}</span>
              <span>{{ chosenModification.gearbox.title }}</span>
              <span>{{ chosenModification.engine_type.title }}</span>
            </div>
            <div class="modifications__complectations-complectation-price">
              <span>{{ numberFormat(complectation.price + dopSum) }} ₽</span>
              <span>от {{ creditPrice(complectation.price + dopSum) }} ₽/мес.</span>
            </div>
          </div>
          <div class="modifications__complectations-complectation-line-group">
            <div class="modifications__complectations-complectation-controls">
              <button @click="complectationMore(complectation)" class="button button--grey">Подробнее</button>
              <button @click="onComparison(chosenModification, complectation)"
                      class="button button--comparison"
                      :class="{'button--comparison-active':comparison.find(item => item.slug === `${chosenModification.id}-${complectation.id}`)}">
                <nuxt-icon name="comparison"/>
              </button>
              <button class="button button--white" @click="onCredit(chosenModification, complectation)">
                Купить в кредит
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button @click="comparisonModal" v-if="comparison.length > 1"
            class="button button--comparisons">
      <span>{{ comparison.length }}</span>
      <span>Сравнить</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import {creditPrice, numberFormat} from "~/helpers/filters";
import {ModificationType} from "~/app/types/modification";
import {ComplectationType} from "~/app/types/complectation";
import {ComparisonType} from "~/app/types/comparison";
import {useModals} from "~/store/modals";
import {FolderPageType} from "~/app/types/folders";
import {useComparison} from "~/store/comparison";

const comparison = computed(() => useComparison().comparisonArray)
const onComparison = (modification: any, complectation: any) => {
  let payload = {
    slug: `${modification.id}-${complectation.id}`,
    title: `${modification.title} <br/> ${complectation.title}`,
    equipment: complectation.equipment
  }
  useComparison().setComparison(payload)
}

const modificationIndex = ref<number>(0)
const choseModification = (index: number) => {
  modificationIndex.value = index
}

const comparisonModal = () => {
  useModals().openModal({
    open: true,
    title: 'Сравнение',
    type: 'comparison'
  })
}

const chosenModification = computed(() => {
  return props.folder.modifications[modificationIndex.value]
})

const props = defineProps<{
  folder: FolderPageType,
  colorIndex: number,
  dopSum: number
}>();

const onCredit = (modification: ModificationType, complectation: ComplectationType) => {
  useModals().setModalOffer({
    id: props.folder.id,
    mark: props.folder.mark.title,
    markSlug: props.folder.mark.slug,
    folder: props.folder.title,
    folderSlug: props.folder.slug,
    modification: modification.title,
    title: `${props.folder.mark.title} ${props.folder.title} ${complectation.title}`,
    image: props.folder.colors[props.colorIndex].image.medium_webp,
    price: complectation.price + props.dopSum,
    tech: [
      {
        slug: 'engine',
        value: modification.engine_volume + ' л.'
      },
      {
        slug: 'engine-power',
        value: modification.engine_power + ' л.с.'
      },
      {
        slug: 'time',
        value: props.folder.time + 'с.'
      },
      {
        slug: 'speed',
        value: props.folder.max_speed + ' км/ч'
      }
    ],
    type: 'folder',
    complectationId: complectation.id,
    modificationId: modification.id,
    markId: props.folder.mark.id,
    folderId: props.folder.id,
    colorId: props.folder.colors[props.colorIndex].id
  });
  useModals().openModal({
    open: true,
    title: "заявка на автокредит",
    type: "credit-new",
  });
};

const complectationMore = (complectation: any) => {
  useModals().setModalOffer({
    id: props.folder.id,
    mark: props.folder.mark.title,
    markSlug: props.folder.mark.slug,
    folder: props.folder.title,
    folderSlug: props.folder.slug,
    modification: complectation.title,
    title: `${props.folder.mark.title} ${props.folder.title} ${complectation.title}`,
    image: props.folder.colors[props.colorIndex].image.medium_webp,
    price: complectation.price + props.dopSum,
    equipment: complectation.equipment,
    type: 'folder',
  });
  useModals().openModal({
    open: true,
    title: "Комплектация",
    type: "modification",
  });
};

</script>
