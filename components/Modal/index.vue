<template>
  <div class="modal" :class="{'modal--open':modal.modal.open}">
    <transition name="benefit">
      <div v-if="modal.modal.open" class="modal__overflow" @click="modal.closeModal()"></div>
    </transition>
    <div class="modal__window" :class="{'modal__window--small':modal.modal.type === 'description'}">
      <div class="modal__head">
        <div class="modal__title">
          {{ modal.modal.title }}
        </div>
        <div class="modal__head-close" @click="modal.closeModal()">×</div>
      </div>
      <div class="modal__body">
        <component :is="modalComponent"/>
        <p v-if="modal.modal.text">
          {{ modal.modal.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useModals} from "~/store/modals";
import ModalCredit from "~/components/Modal/Credit.vue";
import ModalExchange from "~/components/Modal/Exchange.vue";
import ModalExpress from "~/components/Modal/Express.vue";
import ModalModification from "~/components/Modal/Modification.vue";
import ModalComparison from "~/components/Modal/Comparison.vue";
import ModalDescription from "~/components/Modal/Description.vue";

const modal = useModals()

let modalComponent = computed(() => {
  if (modal.modal.type === 'credit-new') {
    return ModalCredit
  }
  if (modal.modal.type === 'exchange-new') {
    return ModalExchange
  }
  if (modal.modal.type === 'express') {
    return ModalExpress
  }
  if (modal.modal.type === 'promotion-description') {
    return ''
  }
  if (modal.modal.type === 'promotion') {
    return ModalExpress
  }
  if (modal.modal.type === 'modification') {
    return ModalModification
  }
  if (modal.modal.type === 'comparison') {
    return ModalComparison
  }
  if (modal.modal.type === 'description') {
    return ModalDescription
  }
})
</script>

