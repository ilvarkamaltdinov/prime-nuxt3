<template>
  <nuxt-link :to="`/new/${folder.mark.slug}/${folder.slug}`"
             class="mini-card mini-card--folder-menu">
    <img class="mini-card__image mini-card__image--folder" :src="folder.image.image_medium_webp" :alt="folder.title">
    <div class="mini-card__title">
      <div class="mini-card__bold-title">
        {{ folder.mark.title }}
      </div>
      <div class="mini-card__bold-title">
        {{ folder.title }}
      </div>
    </div>
  </nuxt-link>
</template>
<script setup lang="ts">
import {FolderCatalogType} from "~/app/types/folders";
import {useCatalog} from "~/store/catalog";
import {CreditFolderType, useCredit} from "~/store/credit";
import {useSiteConfig} from "~/store/siteConfig";
import {computed} from "@vue/reactivity";
import {creditPrice, numberFormat} from "~/helpers/filters";

const props = defineProps<{
  folder: FolderCatalogType;
  catalog?: boolean;
}>();

const setCreditFolder = async (data: CreditFolderType) =>
    useCredit().setCreditFolder(data);
const router = useRouter();
</script>