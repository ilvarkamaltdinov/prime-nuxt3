<template>
  <div class="bonuses">
    <div class="bonuses__group">
      <div class="bonuses__item"
           v-for="bonus in bonuses"
           @click="bonus.chosen = !bonus.chosen"
           :class="{'bonuses__item--active':bonus.chosen}">
        <div class="bonuses__item-label">
          <div class="bonuses__toggle">
            <div class="bonuses__toggle-bg"></div>
            <div class="bonuses__toggle-circle">
              <img :src="`/img/bonuses/${bonus.type}.svg`" alt="">
            </div>
          </div>
        </div>
        <div class="bonuses__item-group">
          <div class="bonuses__item-name">{{ bonus.title }}</div>
          <div class="bonuses__item-price"> - {{ numberFormat(difference * bonus.percent) }} ₽</div>
        </div>

      </div>
    </div>
    <!--    <div class="bonuses__price">-->
    <!--      <div>-->
    <!--        Ваша выгода-->
    <!--      </div>-->
    <!--      <div>-->
    <!--        {{ numberFormat(difference - dopSum) }} ₽-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>

<script setup lang="ts">

import {numberFormat} from "~/helpers/filters";

const props = defineProps<{
  difference: number;
}>();

const bonuses = ref([
  {
    type: 'exchange',
    title: 'Trade-In',
    chosen: true,
    percent: .3
  },
  {
    type: 'gos',
    title: 'Госпрограмма',
    chosen: true,
    percent: .25
  },
  {
    type: 'credit',
    title: 'Кредит',
    chosen: true,
    percent: .45
  },
])

const dopSum = computed(() => {
  let sum = 0
  bonuses.value.map(bonus => {
    if (bonus.chosen) {
      sum += props.difference * bonus.percent
    }
  })
  return props.difference - sum
})

const emit = defineEmits(["changeBonuses"]);

onMounted(() => {
  emit('changeBonuses', dopSum.value)
})
watch(dopSum, () => {
  emit('changeBonuses', dopSum.value)
})
</script>
