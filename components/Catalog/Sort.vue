<template>
  <div class="catalog__sort">
    <DefaultSelect @select="onChangeSort" :title="currentSort.name" :value="currentSort"
                   :options="sorts"/>
  </div>
</template>
<script setup lang="ts">
import DefaultSelect from "~/components/Controls/DefaultSelect.vue";
import {ref} from "#imports";
import {UnwrapRef} from "vue/dist/vue";
import {useRoute} from "vue-router";

const route = useRoute();
const router = useRouter()

type Sort = {
  slug: string
  name: string
}

const currentSort = computed(() => {
  if (route.query.sort) {
    return sorts.find(item => item.slug === route.query.sort)
  } else {
    return sorts[0]
  }
})
const sorts: Sort[] = [
  {
    slug: 'price|asc',
    name: 'Сначала дешевле'
  },
  {
    slug: 'price|desc',
    name: 'Сначала дороже'
  }
]

async function onChangeSort(option: UnwrapRef<typeof sorts>[number]) {
  await router.push({path: route.fullPath, query: {sort: option.slug, page: '1'}})
}
</script>
