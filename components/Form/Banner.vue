<template>
  <div class="form__banner">
    <NuxtPicture loading="lazy" class="form__banner-picture" :src="currentType.banner"/>
<!--    <div class="form__banner-content">-->
<!--      <div class="container">-->
<!--        <div class="form__banner-title">-->
<!--          {{ currentType.title }}-->
<!--        </div>-->
<!--        <div class="form__banner-text">-->
<!--          {{ currentType.text }}-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>
<script setup lang="ts">

const props = defineProps<{
  type: string;
}>();
const types = [
  {
    name: 'credit',
    banner: '/img/pages/credit/banner.jpg',
    title: 'выгодное предложение',
    text: 'ставка от 4.9%'
  },
  {
    name: 'exchange',
    banner: '/img/pages/exchange/banner.jpg',
    title: 'выгодное предложение',
    text: 'ставка от 4.9%'
  },
  {
    name: 'installment',
    banner: '/img/pages/installment/banner.jpg',
    title: 'выгодное предложение',
    text: 'ставка от 0%'
  },
  {
    name: 'taxi',
    banner: '/img/pages/taxi/banner.jpg',
    title: 'выгодное предложение',
    text: 'ставка от 4,9%'
  }
]
const currentType = computed(() => {
  return types.find(item => props.type === item.name)
})
</script>