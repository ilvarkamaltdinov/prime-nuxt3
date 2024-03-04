<template>
  <div class="tech" :class="{'tech--line': type === 'line', 'tech--column': type === 'column'}">
    <div class="tech__item" v-for="item in tech">
      <nuxt-icon class="tech__item-icon" :name="item.slug"/>
      <div class="tech__item-name">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  tech: {
    name?: string
    value: string
    slug: string
  }[];
  type?: string
}>();
</script>
