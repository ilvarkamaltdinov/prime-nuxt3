<template>
  <Header/>
  <div class="error__page wrapper">
    <div class="container">
      <h1 class="error__page-title">404</h1>
      <div class="error__img-wrap">
        <NuxtImg src="/img/404.png"/>
      </div>
      <div class="error__page-subtitle">Страница не найдена</div>
      <nuxt-link to="/" class="button button--primary">на главную</nuxt-link>
    </div>
  </div>
  <Footer/>
</template>
<script lang="ts" setup>
import Header from "~/components/Header";
</script>