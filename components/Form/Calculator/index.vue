<template>
  <div class="calculator">
    <div class="calculator__block">
      <div class="calculator__line">
        <div class="calculator__line-name">Первый взнос:</div>
        <div class="calculator__line-value">
          <span>{{ paymentValue }}%</span>
          <span v-if="price && paymentValue > 0 ">{{ numberFormat(price * paymentValue / 100) }} ₽</span>
        </div>
      </div>
      <div class="calculator__slider">
        <Slider :lazy="false" v-model="paymentValue" :step="10" :options="paymentOptions"/>
        <div class="calculator__slider-steps calculator__slider-steps-payment"
             :class="{ 'calculator__slider-steps-payment--installment': installment }">
          <div v-if="installment" class="calculator__slider-step" v-for="i in 7"></div>
          <div v-else class="calculator__slider-step" v-for="i in 9"></div>
        </div>
      </div>
    </div>
    <div class="calculator__block">

      <div class="calculator__line">
        <div class="calculator__line-name">{{ installment ? `Период рассрочки:` : `Период кредитования:` }}</div>
        <div class="calculator__line-value">{{ periodValue }}
          {{ declension(periodValue, 'месяц', 'месяца', 'месяцев') }}
        </div>
      </div>
      <div class="calculator__slider">
        <Slider :lazy="false" v-model="periodValue" :options="periodOptions"/>
        <div class="calculator__slider-steps calculator__slider-steps-period"
             :class="{ 'calculator__slider-steps-period--installment': installment }">
          <div v-if="installment" class="calculator__slider-step" v-for="i in 5"></div>
          <div v-else class="calculator__slider-step" v-for="i in 10"></div>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>
import Slider from '@vueform/slider'
import {declension} from "~/helpers/declension";
import {numberFormat} from "../../../helpers/filters";

const emit = defineEmits(['changePayment', 'changePeriod'])

const props = defineProps<{
  installment?: boolean
  payment: number,
  period: number,
  price?: number
}>()

const paymentValue = computed({
  get: () => props.payment,
  set: (value) => emit('changePayment', value)
})
const periodValue = computed({
  get: () => props.period,
  set: (value) => emit('changePeriod', value)
})

const periodOptions = computed(() => {
  if (props.installment) {
    return {
      snap: true,
      range: {
        'min': 2,
        '26%': 6,
        '51%': 12,
        '76%': 24,
        'max': 36
      }
    }
  } else {
    return {
      snap: true,
      range: {
        'min': 2,
        '12%': 6,
        '23%': 12,
        '34.5%': 24,
        '45.5%': 36,
        '56.5%': 48,
        '67.5%': 60,
        '78.5%': 72,
        '89.5%': 84,
        'max': 96
      }
    }
  }

})
const paymentOptions = computed(() => {
  if (props.installment) {
    return {
      snap: true,
      range: {
        'min': 0,
        '18%': 10,
        '35%': 20,
        '52%': 30,
        '68%': 40,
        '85%': 50,
        '90%': 60,
        'max': 70,
      }
    }
  } else {
    return {
      snap: true,
      range: {
        'min': 0,
        '14%': 10,
        '26%': 20,
        '38.5%': 30,
        '50.5%': 40,
        '64%': 50,
        '76%': 60,
        '89%': 70,
        'max': 80
      }
    }
  }

})

</script>