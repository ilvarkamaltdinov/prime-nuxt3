<template>
  <div class="banks" v-if="page">
    <div class="banks__line">
      <nuxt-link to="/credit"  class="banks__item f-carousel__slide" v-for="bank in banks">
        <NuxtImg :src="bank.image" :alt="bank.title" class="banks__item-img"/>
      </nuxt-link>
    </div>
  </div>
  <div v-else class="banks f-carousel f-carousel--banks " id="banksSlider">
    <div class="f-carousel__viewport">
      <div class="f-carousel__track">
        <nuxt-link to="/credit" class="banks__item f-carousel__slide" v-for="bank in banks">
          <NuxtImg loading="lazy" :src="bank.image" :alt="bank.title" class="banks__item-img"/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useBanks} from "~/store/banks";
import {onMounted} from "vue";
import {Carousel} from "@fancyapps/ui";

const props = defineProps<{
  page?: boolean;
}>();

import banksQueryString, {BanksTypeData} from "~/apollo/queries/graphqlStrings/banksQueryString";
import {byApiDomain} from "~/app/variables";

const {banksQuery} = banksQueryString;
type Query = {
  query: string,
  variables: object,
}
type Response<T> = {
  data: T
};

const queries: Readonly<[Query]> = [
  {
    query: banksQuery,
    variables: {
      site_id: 172
    }
  }
]
const banks = useBanks().banks
type QueryResults = Readonly<[Response<BanksTypeData>]>;
if (!useBanks().banks.length) {
  const [{data: {banks}}]: QueryResults = await Promise.all(queries.map(async ({query, variables}) => {
    return await $fetch(`https://${byApiDomain}/graphql`, {
      method: "POST",
      body: {
        query,
        variables
      }
    });
  })) as unknown as QueryResults;
  banks.map(bank => {
    bank.image = bank.image.replace('api.genzes.ru', byApiDomain);
    return bank;
  })
  useBanks().setBanks(banks)
}


let slider: Carousel
const initSlider = () => {
  const container = document.getElementById("banksSlider");
  const options = {
    infinite: true,
    center: false,
    transition: 'slide',
    getProgress: 'center',
    Thumbs: {
      type: "modern",
    },
  };
  slider = new Carousel(container, options);
}
onMounted(() => {
  initSlider()
})
</script>