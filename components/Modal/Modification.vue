<template>
  <div v-if="modalOffer">
    <div class="modal__from-title">
      <div class="modal__from-title--bold">
        {{ modalOffer.mark }}
      </div>
      <div class="modal__from-title-regular">
        {{ modalOffer.folder }} new {{ modalOffer.modification }}
      </div>
    </div>
    <div class="buy__options-price buy__options-price--modal">
      <div class="buy__options-price-bold">
        От {{ numberFormat(modalOffer.price) }} ₽
      </div>
      <div class="buy__options-price-regular">
        От {{ creditPrice(modalOffer.price) }} ₽/мес.
      </div>
    </div>
    <ul
        class="folder__modal-blocks"
        v-for="(item, index) in modalOffer.equipment"
        :key="index"
    >
      <li class="folder__modal-title">
        {{ item.title }}
      </li>
      <li class="folder__modal-values">
        <ul>
          <li
              class="folder__modal-values-item"
              v-for="(value, index) in item.values"
              :key="index"
          >
            {{ value }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {useModals} from "~/store/modals";

const modalOffer = useModals().modalOffer

import {creditPrice, numberFormat} from "~/helpers/filters";
</script>