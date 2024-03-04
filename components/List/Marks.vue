<template>
  <div class="list" id="listMarks">
    <ul class="list__marks"
        :class="{'list__marks--home':home, 'list__marks--catalog':!home}">
      <li class="list__marks-item" v-for="mark in sortedMarks">
        <nuxt-link :to="`/new/${mark.slug}`" class="list__marks-link">
          <span class="list__marks-icon-wrapper">
            <nuxt-icon :name="`emblems/${mark.slug}`"/>
          </span>
          <span class="list__marks-link-title">
            {{ mark.title }}
          </span>
        </nuxt-link>
      </li>
    </ul>
    <button v-if="!home" @click="isFullClick" class="button button--marks">
      <span v-if="!isFull">Больше марок</span>
      <span v-else>Меньше марок</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import {useSiteConfig} from "~/store/siteConfig";
import {popularMarks} from "~/helpers/filterMarks";
import {scrollToElement} from "~/helpers/scroll";

const props = defineProps<{
  home: boolean
}>();
const marks = useSiteConfig().catalog;

const isFull = ref<boolean>(false)

const isFullClick = async () => {
  isFull.value = !isFull.value
  scrollToElement('#listMarks')
}
const sortedMarks = computed(() => {
  if (props.home) {
    return popularMarks(marks, 10)
  } else {
    if (isFull.value) {
      return marks.sort((a: any, b: any) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
    } else {
      return marks.filter(mark => mark.priority)?.sort((a: any, b: any) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
    }
  }
})

</script>