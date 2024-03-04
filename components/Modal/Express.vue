<template>
  <form @submit.prevent="submit" class="modal__form">
    <div class="modal__form-personal">
      <div class="modal__text">
        <p v-if="useSiteConfig().isNight && useSiteConfig().isNY" class="text__p text__p--modal">
          Автоцентр {{ useSiteConfig().settings.dealer_name }} поздравляет вас с Новым годом!
          Оставьте заявку, и мы перезвоним вам <span class="text__working-hours">2 января</span>!
        </p>
        <p v-else-if="useSiteConfig().isNight && !useSiteConfig().isNY" class="text__p modal__form-p">
          Мы работаем с 9:00 до 21:00. Оставьте заявку, и мы свяжемся с вами в рабочее время!
        </p>
        <p v-else>
          Оставьте заявку и наши менеджеры свяжутся с Вами в течении - 5 минут!</p>
      </div>
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
import Input from "~/components/Controls/Input.vue";
import Checkbox from "~/components/Controls/Checkbox.vue";
import {ref} from "#imports";
import {sendNewFeedback} from '~/helpers/request'
import {useModals} from '~/store/modals'

// ФОРМА-------------------------------ФОРМА-------------------------------ФОРМА
import {SendNewFeedback} from "~/apollo/mutations/newFeedback";
import {useSiteConfig} from "~/store/siteConfig";

const router = useRouter()
let form = ref({
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
  if (form.value.name.length < 1) {
    error.value = 'name'
    return false
  }
  if (form.value.phone.length < 1) {
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
    type_enum: 'CALLBACK',
    client_name: form.value.name,
    client_phone: form.value.phone
  })
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
  try {
    await feedback(variables.value)
    await router.push('/thanks-callback')
  } catch (e) {
    console.log(e)
  }
}


</script>
