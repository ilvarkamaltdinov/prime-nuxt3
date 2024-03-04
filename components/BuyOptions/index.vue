<template>
  <div class="buy__options">
    <div class="buy__options-price">
      <div class="buy__options-price-bold">
        {{ numberFormat(price) }} ₽
      </div>
      <div class="buy__options-price-regular">
        {{ creditPrice(price) }} ₽/мес.
      </div>
    </div>
    <div class="buy__options-buttons" v-if="active">
      <button @click="onCredit" class="button button--white">В кредит</button>
      <button @click="onExchange" class="button button--opacity">Trade-In</button>
    </div>
<!--    <div class="buy__options-buttons buy__options-buttons&#45;&#45;call">-->
<!--      <div class="button">-->
<!--        <Phone number icon/>-->
<!--        <span class="button-span">Звонок бесплатный</span>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>
<script setup lang="ts">
import Phone from "~/components/Phone";
import {creditPrice, numberFormat} from "~/helpers/filters";
import {useModals} from "~/store/modals";

const emit = defineEmits(['onCredit', 'onExchange'])
const props = defineProps<{
  price: number;
  type: string
  active: boolean
}>();

const onCallback = () => {
  useModals().openModal({
    open: true,
    title: 'Заказать обратный звонок',
    type: 'express'
  })
};
const onCredit = () => {
  emit('onCredit')
}
const onExchange = () => {
  emit('onExchange')

}
</script>