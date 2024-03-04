<template>
  <div class="catalog" id="catalog" v-if="folders">
    <CatalogSort/>
    <div class="catalog__folders catalog__folders--main">
      <CardFolder catalog :key="folder.id" v-for="folder in folders" :folder="folder"/>
    </div>
  </div>
  <div class="catalog__folders" v-else>
    <SkeletonFolder v-for="i in 3" :key="i"/>
  </div>
</template>

<script setup lang="ts">
import CardFolder from "~/components/MiniCards/Folder.vue";
import SkeletonFolder from "~/components/Skeleton/Folder.vue";
import {requestCatalogFolders} from "~/helpers/request";
import {computed, ref} from "#imports";
import {FoldersInput, FolderCatalogType} from "~/app/types/folders";
import {UnwrapRef, watch} from 'vue';
import {useRoute} from 'vue-router';
import CatalogSort from "~/components/Catalog/Sort.vue";

const route = useRoute();
const router = useRouter()


const folders = ref<FolderCatalogType[]>()

let loading = ref<boolean>(true)

let variables = computed<FoldersInput>(() => {
  return {
    page: 1,
    limit: 30,
    mark_slug: route.params.mark,
    sort: route.query.sort || null,
  }
})
const request = async () => {
  loading.value = true
  const {pending, data} = await requestCatalogFolders(variables.value)
  folders.value = data.value?.folders.data
  loading.value = pending.value
}

const {pending, data} = await requestCatalogFolders(variables.value)
folders.value = data.value?.folders.data
loading.value = pending.value


watch(data, () => {
  folders.value = data.value?.folders.data
  loading.value = false
})


watch(route, async () => {
  await request()
})


</script>