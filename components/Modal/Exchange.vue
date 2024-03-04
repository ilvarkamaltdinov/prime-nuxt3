<template>
  <form @submit.prevent="submit" class="modal__form">
    <Benefits type="exchange" class="modal__benefits"/>
    <div class="modal__from-content">
      <div class="modal__from-title modal__from-title--mobile">
        <div class="modal__from-title-bold">
          {{ modalOffer.mark }}
        </div>
        <div class="modal__from-title-regular">
          {{ modalOffer.folder }} <span v-if="modalOffer.type==='folder'">new</span>
        </div>
      </div>
      <div class="modal__form-image" :class="{'modal__form-image--render':modalOffer.offerType === 'SITE'}">
        <img :class="{'modal__form-image--render':modalOffer.type === 'folder'}" v-if="modalOffer.image"
             :src="modalOffer.image"
             :alt="modalOffer.title">
      </div>
      <div class="modal__form-block">
        <div class="modal__form-block-title modal__from-title modal__from-title--desktop">
          <div class="modal__from-title-bold">
            {{ modalOffer.mark }}
          </div>
          <div class="modal__from-title-regular">
            {{ modalOffer.folder }} <span v-if="modalOffer.type==='folder'">new</span>
          </div>
        </div>
        <Tech type="line" class="modal__form-block-tech modal__form-tech" v-if="modalOffer.tech"
              :tech="modalOffer.tech"/>
        <div class="modal__form-block-buy-options modal__form-buy-options buy__options-price">
          <div class="buy__options-price-bold">
            {{ numberFormat(modalOffer.price) }} ₽
          </div>
          <div class="buy__options-price-regular">
            {{ total }} ₽/мес.
          </div>
        </div>
        <div class="modal__form-block-calculator modal__calculator">
          <CalculatorIndex class="calculator--modal" @change-payment="changePayment"
                           :price="modalOffer.price"
                           @change-period="changePeriod"
                           :payment="payment"
                           :period="period"/>
        </div>
      </div>
    </div>
    <div class="modal__form-personal">
      <div class="modal__form-personal-line">
        <div class="form__control">
          <Input :value="form.client_mark"
                 @update:modelValue="newValue => form.client_mark = newValue" placeholder="Марка" :error="false"/>
        </div>
        <div class="form__control">
          <Input :value="form.client_folder"
                 @update:modelValue="newValue => form.client_folder = newValue" placeholder="Модель" :error="false"/>
        </div>
        <div class="form__control">
          <Input mask="number" :value="form.client_year"
                 @update:modelValue="newValue => form.client_year = newValue" placeholder="Год" :error="false"/>
        </div>
        <div class="form__control">
          <Input mask="number" :value="form.client_run"
                 @update:modelValue="newValue => form.client_run = newValue" placeholder="Пробег" :error="false"/>
        </div>
      </div>
    </div>
    <div class="modal__form-personal modal__form-personal--margin">
      <div class="modal__form-personal-line">
        <div class="form__control" :class="{'error':error === 'name'}">
          <Input :value="form.name"
                 @update:modelValue="newValue => form.name = newValue" placeholder="ФИО" :error="false"/>
        </div>
        <div class="form__control" :class="{'error':error === 'phone'}">
          <Input :value="form.phone"
                 @update:modelValue="newValue => form.phone = newValue" placeholder="телефон" type="tel" mask="phone"
                 :error="false"/>
        </div>
        <div class="modal__form-personal-line-group">
          <div class="form__errors">
            <div class="form__control-error" v-if="error === 'client_mark'">
              Укажите марку Вашего автомобиля
            </div>
            <div class="form__control-error" v-if="error === 'client_folder'">
              Укажите модель Вашего автомобиля
            </div>
            <div class="form__control-error" v-if="error === 'client_year'">
              Укажите год Вашего автомобиля
            </div>
            <div class="form__control-error" v-if="error==='name'">
              Заполните поле ФИО
            </div>
            <div class="form__control-error" v-if="error==='phone'">
              Заполните поле Телефон
            </div>
            <div class="form__control-error" v-if="error==='agree1'">
              Подтвердите наличие гражданства РФ
            </div>
            <div class="form__control-error" v-if="error==='agree2'">
              Необходимо согласие на обработку личных данных
            </div>
          </div>
          <button :class="{'button--error':error==='mark' || error==='folder'}"
                  @click.prevent="submit"
                  class="button button--credit">Оставить заявку
          </button>
          <div class="checkboxes">
            <Checkbox v-model="form.agree1" title="Подтверждаю наличие гражданства РФ" :error="error === 'agree1'"/>
            <Checkbox v-model="form.agree2" title="Согласен на обработку личных данных" :error="error === 'agree2'"/>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">
import CalculatorIndex from '~/components/Form/Calculator/index.vue'
import Input from "~/components/Controls/Input.vue";
import Checkbox from "~/components/Controls/Checkbox.vue";
import {numberFormat} from "~/helpers/filters";
import {ref} from "#imports";
import {calculate} from "~/helpers/calculate";
import {sendNewFeedback} from '~/helpers/request'

const modalOffer = computed(() => <OfferModalType>useModals().modalOffer)
const settings = useSiteConfig().settings
const offerId = computed(() => {
  if (modalOffer.value.type === 'offer') {
    return `/${modalOffer.value.id}`
  } else if (modalOffer.value.type === 'folder') {
    return ''
  } else return ''
})
let payment = ref(0)
let period = ref(84)
const router = useRouter()
let total = ref()
total.value = calculate(modalOffer.value?.price, payment.value, period.value)
const changePayment = async (value: any) => {
  payment.value = value
  total.value = calculate(modalOffer.value?.price, payment.value, period.value)
}
const changePeriod = async (value: any) => {
  period.value = value
  total.value = calculate(modalOffer.value?.price, payment.value, period.value)
}

// ФОРМА-------------------------------ФОРМА-------------------------------ФОРМА
import {SendNewFeedback} from "~/apollo/mutations/newFeedback";
import {vkAdsReachGoal, yandexCommercialNew} from "~/helpers/metrika";
import {OfferModalType} from "~/app/types/offers";
import {useModals} from "~/store/modals";
import Benefits from "~/components/Benefits/index.vue";
import TechLine from "~/components/Tech/index.vue";
import {useSiteConfig} from "~/store/siteConfig";
import Tech from "~/components/Tech/index.vue";

let form = ref({
  client_mark: '',
  client_folder: '',
  client_year: '',
  client_run: '',
  name: '',
  phone: '',
  agree1: true,
  agree2: true,
})

let error = ref<string>('')

watch(form.value, () => {
  error.value = ''
})
const submit = async () => {
  if (form.value.client_mark.length < 1) {
    error.value = 'client_mark'
    return false
  }
  if (form.value.client_folder.length < 1) {
    error.value = 'client_folder'
    return false
  }
  if (form.value.client_year.length < 2) {
    error.value = 'client_year'
    return false
  }
  if (form.value.name.length < 1) {
    error.value = 'name'
    return false
  }
  if (form.value.phone.length < 1 || form.value.phone.split('_').length > 1) {
    error.value = 'phone'
    return false
  }
  if (!form.value.agree1) {
    error.value = 'agree1'
    return false
  }
  if (!form.value.agree2) {
    error.value = 'agree2'
    return false
  }
  let variables = ref<SendNewFeedback>({
    type_enum: 'TRADE-IN',
    client_vehicle_mark: form.value.client_mark,
    client_vehicle_model: form.value.client_folder,
    client_vehicle_year: form.value.client_year,
    client_name: form.value.name,
    client_phone: form.value.phone,
    credit_initial_fee: payment.value + ' %',
    credit_period: period.value + ' мес.',
  })
  if (modalOffer.value.type === 'offer') {
    variables.value.offer_id = modalOffer.value.id
  }
  if (modalOffer.value.type === 'folder') {
    variables.value.folder_id = modalOffer.value.folderId
    variables.value.color_id = modalOffer.value.colorId
    variables.value.modification_id = modalOffer.value.modificationId
    variables.value.complectation_id = modalOffer.value.complectationId
  }
  //UTM метки
  if (localStorage.utm_source) {
    variables.value.utm_source = localStorage.utm_source
  }
  if (localStorage.utm_medium) {
    variables.value.utm_medium = localStorage.utm_medium
  }
  if (localStorage.utm_campaign) {
    variables.value.utm_campaign = localStorage.utm_campaign
  }
  if (localStorage.utm_term) {
    variables.value.utm_term = localStorage.utm_term
  }
  if (localStorage.utm_content) {
    variables.value.utm_content = localStorage.utm_content
  }
  //
  const {mutate: feedback} = await sendNewFeedback(variables.value);
  await yandexCommercialNew({
    counter_commercial_id: settings.counter_commercial_id,
    id: modalOffer.value.id,
    mark: modalOffer.value.mark,
    folder: modalOffer.value.folder,
    modification: modalOffer.value.modification,
    price: modalOffer.value.price
  }, true)
  await vkAdsReachGoal(settings.counter_vk, modalOffer.value?.price, modalOffer.value?.id, true)
  try {
    await feedback(variables.value)
    await router.push('/thanks-exchange')
  } catch (e) {
    console.log(e)
  }
}


</script>
