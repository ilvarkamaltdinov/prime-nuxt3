<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <nuxt-link @click.native="clickMenu" to="/">
            <img src="/img/logo.svg" alt="logo">
          </nuxt-link>
        </div>
        <div class="header__nav">
          <nuxt-link @click.native="clickMenu" to="/new">В наличии</nuxt-link>
          <nuxt-link @click.native="clickMenu" to="/credit">Автокредит</nuxt-link>
          <nuxt-link @click.native="clickMenu" to="/tradein">Trade-in</nuxt-link>
        </div>
        <div class="header__contacts">
          <div class="header__contacts-address" v-if="settings.contact_address">
            {{ settings.contact_address }}
          </div>
          <Phone header number icon v-if="settings.contact_phone"/>
        </div>
        <div class="header__burger" :class="{'header__burger--active': isOpen}" @click="clickBurger">
          <div class="header__burger-line"></div>
          <div class="header__burger-line"></div>
          <div class="header__burger-line"></div>
        </div>
      </div>
    </div>
    <transition name="modal">
      <HeaderMenu v-if="isOpen" @click="clickMenu"/>
    </transition>
  </div>
</template>
<script setup lang="ts">
import Phone from "~/components/Phone";
import HeaderMenu from "~/components/Header/Menu.vue";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {watch} from "vue";
import {useModals} from "~/store/modals";
import {useSiteConfig} from "~/store/siteConfig";
import {useComparison} from "~/store/comparison"

const modal = useModals()
const route = useRoute();
const settings = useSiteConfig().settings;
const isOpen = ref<boolean>(false)
const clickBurger = () => {
  isOpen.value = !isOpen.value;
  modal.closeModal()
};
const clickMenu = () => {
  isOpen.value = false;
  modal.closeModal()
};
watch(route, async () => {
  await useModals().closeModal()
  await useComparison().clearComparison()
  isOpen.value = false;
});
function isNewYearCheck() {
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let hours = new Date().getHours();
  //проверка на дату с 31 декабря по 2 января
  if ((month === 12 && day === 31) || (month === 1 && day <= 2)) {
    if (
        //проверка на вермя с 18:00 31 ого
        (month === 12 && day === 31 && hours >= 18)
        ||
        //проверка на 1ое января
        (month === 1 && day === 1)
        ||
        //проверка на вермя с до 9:00 2ого
        (month === 1 && day === 2 && hours <= 9)) {
      return true;
    }
  }
  return false;
}
const dateTimeFunc = async () => {
  if (isNewYearCheck()) {
    await useSiteConfig().setIsNY(true)
    await useSiteConfig().setIsNight(true)
  }
  else{
    if (new Date().getHours() >= 21 || new Date().getHours() <= 8) {
      await useSiteConfig().setIsNight(true)
    } else {
      await useSiteConfig().setIsNight(false)
    }
  }
}

onMounted(() => {
  dateTimeFunc()
  setInterval(() => {
    dateTimeFunc()
  }, 120000)
});
</script>