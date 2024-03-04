<template>
  <div class="header__menu">
    <div class="container">
      <div class="header__menu-wrapper">
        <div class="header__menu-nav">
          <nuxt-link @click.native="emit('click')" class="header__menu-item" v-for="item in menu" :to="item.slug">
            {{ item.title }}
          </nuxt-link>
        </div>
        <div class="header__menu-content">
          <Phone class="header__menu-phone" number/>
          <!--          <div class="header__menu-marks">-->
          <!--            <h3 class="heading heading&#45;&#45;h3">Популярные марки</h3>-->
          <!--            <ListMarksMenu @click="emit('click')"/>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatalogFolderMenu from '~/components/Catalog/FoldersMenu.vue'
import Phone from '~/components/Phone/index.vue'
import ListMarksMenu from '~/components/List/MarksMenu.vue'

const emit = defineEmits(['click'])
const menu = [
  {
    title: 'В наличии',
    slug: '/new'
  },
  // {
  //   title: 'Такси в кредит',
  //   slug: '/taxi'
  // },
  {
    title: 'Автокредит',
    slug: '/credit'
  },
  {
    title: 'Trade-in',
    slug: '/tradein'
  },
  {
    title: 'Рассрочка',
    slug: '/installment'
  },
  {
    title: 'Контакты',
    slug: '/contacts'
  },
  {
    title: 'Акции',
    slug: '/discount'
  },
  {
    title: 'Отзывы',
    slug: '/reviews'
  },
  {
    title: 'О компании',
    slug: '/about'
  }
]
</script>