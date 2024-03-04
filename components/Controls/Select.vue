<template>
  <div class="select" :class="{'select--opacity':opacity, 'select--error':error}">
    <select class="select__mobile" v-model="selectValue" options="" title="" type="" value="">
      <option :value="title">
        {{ title }}
      </option>
      <option :value="option"
              v-for="option in options">
        {{ option.title || option.name || option }}
      </option>
    </select>
    <div tabindex="1" @focusout="outsideClick" class="select__desktop" @click="selectClick"
         :class="{'select__desktop--active':isOpen}">
      <div class="select__data">
        <span>{{ currentTitle }}</span>
      </div>
      <div class="select__options" :class="{'select__options--open':isOpen}">
        <div @click.prevent="optionClick(option)" class="select__option" v-for="option in options">
          {{ option.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "#imports"

const props = defineProps<{
  title: string
  options: any
  value: any
  type: string
  hasAlphabet?: boolean
  opacity?: boolean
  error?: boolean
}>()

let isOpen = ref<boolean>(false)
const selectValue = computed({
  get: () => props.value || props.title,
  set: (value) => emit('select', {option: value, type: props.type})
})
const selectClick = async () => {
  if (props.options?.length) {
    isOpen.value = !isOpen.value
  }
}
const outsideClick = async () => {
  isOpen.value = false
}
const emit = defineEmits(['select'])

const optionClick = (value: any) => {
  emit('select', {option: value, type: props.type})
}


const currentTitle = computed(() => {
  if (props.value) {
    return props.value?.title || props.value?.name || props.value?.value || props.value
  } else {
    return props.title
  }
})
const alphabetOptions = computed(() => {
  let alphabetMarks = props.options?.map((item: any) => item?.title[0])
  alphabetMarks = [...new Set(alphabetMarks)].sort()
  return alphabetMarks
})

</script>
