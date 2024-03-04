<template>
  <div class="benefits">
    <div class="benefits__line">
      <div class="benefits__item"
           v-for="(benefit, index) in currentBenefits" :key="index"
           @click="openModal(benefit.description)">
        <div class="benefits__item-title"> {{ benefit.title }}</div>
        <div class="benefits__item-text"> {{ benefit.text }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "#imports"
import {BenefitType} from "~/app/types/benefit";

const props = defineProps<{
  type: string
}>()

let modal = ref<boolean>(false)
let description = ref<string>('')

const benefits = computed<BenefitType[]>(() => {
  return [
    {
      slug: 'gift',
      title: 'КАСКО и комлект резины ',
      text: 'в подарок',
      description: 'При оформлении автомобиля в кредит Вам предоставляется дополнительная скидка в размере до 300 000 ₽ от изначальной стоимости автомобиля.'
    },
    {
      slug: 'guarantee',
      title: 'гарантия 5 лет ',
      text: 'или 150 000 км',
      description: 'Автоцентр предоставляет гарантию на техническое состояние автомобиля в течение одного года с момента покупки.'
    },
    {
      slug: 'percent',
      title: 'Автокредит без переплат',
      text: 'ставка от 4.9%',
      description: 'Вы можете приобрести автомобиль в кредит без первоначального взноса, однако, чем больше взнос, тем лучше условия по кредиту.'
    },
    {
      slug: 'docs',
      title: 'Одобрение',
      text: 'По 2 документам',
      description: 'Для оформления автомобиля в кредит Вам потребуются только паспорт и водительское удостоверение.'
    },
    {
      slug: "trade-in_sale",
      title: "Выгодный",
      text: "Trade-in",
      description:
          "При обмене автомобиля Вам предоставляется дополнительная выгода в размере до 200 000 ₽ от изначальной стоимости автомобиля.",
    },
    {
      slug: "market-value",
      title: "Рыночная оценка",
      text: "Вашего автомобиля",
      description:
          "Оценка вашего автомобиля будет на 100% рыночной, всю сумму можно использовать для покупки нового автомобиля.",
    },
    {
      slug: 'installment_sale',
      title: 'Скидка',
      text: 'За рассрочку',
      description: 'При оформлении автомобиля в рассночку Вам предоставляется дополнительная скидка в размере до 300 000 ₽ от изначальной стоимости автомобиля.'
    },
    {
      slug: 'installment_percent',
      title: 'Рассрочка без переплат',
      text: 'ставка 0%',
      description: 'Вы можете приобрести автомобиль в рассрочку при первоначальном взносе от 10%.'
    }
  ]
})

const currentBenefits = computed<BenefitType[]>(() => {
  let installment = ['installment_sale', 'guarantee', 'installment_percent', 'docs']
  let exchange = ['trade-in_sale', 'guarantee', 'percent', 'docs']
  let credit = ['gift', 'guarantee', 'percent', 'docs']

  let benefitsMap: { [key: string]: string[] } = {
    installment,
    exchange,
    credit
  }

  return benefits.value.filter((item) => {
    return benefitsMap[props.type].indexOf(item.slug) !== -1;
  })

})
const openModal = async (benefit: string) => {
  description.value = benefit
  modal.value = true
}
const closeModal = async () => {
  description.value = ''
  modal.value = false
}

</script>