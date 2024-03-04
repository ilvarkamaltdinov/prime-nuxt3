<template>
  <div class="offer__equipment">
    <div class="offer__equipment-title">
      <span>{{ offer.modification.title }}</span>
    </div>
    <!--    equipment[activeTab]: {{equipment[activeTab]}}-->
    <DefaultSelect @select="handlerSelect" class="offer__equipment-select" :options="equipment"
                   :title="equipment[activeTab].title" :value="equipment[activeTab]"/>
    <ul class="offer__equipment-tabs">
      <li class="offer__equipment-tab" v-for="(group, index) in equipment"
          :class="{ 'offer__equipment-tab--active': index === activeTab }" @click="activeTab = index" :key="index">
        {{ group.title }}
      </li>
    </ul>
    <ul class="offer__equipment-list">
      <li class="offer__equipment-item" v-for="(value, index) in equipment[activeTab].values" :key="index">
        {{ value }}
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import DefaultSelect from "~/components/Controls/DefaultSelect.vue";
import {OfferPageType} from "~/app/types/offers";

const props = defineProps<{
  offer: OfferPageType;
}>();

const activeTab = ref<number>(0);
const equipment = computed(() => {
  return props.offer.complectation.equipment
});
const handlerSelect = async (data: any) => {
  activeTab.value = equipment.value.map((o) => o.title).indexOf(data.title);
}
</script>