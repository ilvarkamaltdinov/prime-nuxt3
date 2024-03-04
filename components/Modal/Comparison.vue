<template>
  <div class="comparison">
    <div class="comparison-table">
      <div class="comparison-table-row comparison-table-row-sticky-top">
        <div class="comparison-table-col comparison-table-col--center comparison-table-col-title-value comparison-table-col--bonuses">

          <div class="bonuses__item"
               @click="allOptions = !allOptions"
               :class="{'bonuses__item--active':allOptions}">
            <div class="bonuses__item-label">
              <div class="bonuses__toggle">
                <div class="bonuses__toggle-bg"></div>
                <div class="bonuses__toggle-circle"></div>
              </div>
              <div class="bonuses__item-name">Все опции</div>
            </div>
          </div>


        </div>
        <div class="comparison-table-col comparison-table-col--short comparison-table-col--title"
             v-for="item in comparison"
             v-html="item.title"></div>
      </div>
      <div class="comparison-table-group" v-for="item in allTechList">
        <div class="comparison-table-row">
          <div
              class="comparison-table-col comparison-table-col-sticky-left comparison-table-col--title">
            {{ item.title }}
          </div>
          <div class="comparison-table-col comparison-table-col--short" v-for="title in comparison"></div>
        </div>
        <div class="comparison-table-row comparison-table-row--content comparison-table-col--hide"
             v-for="value in item.values">
          <div class="comparison-table-col comparison-table-col-title-value">
            {{ value }}
          </div>
          <div
              class="comparison-table-col comparison-table-col--short comparison-table-col--value comparison-table-col--center"
              v-for="item in comparison">
            {{ findCurrent(value, item) }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import {ComparisonType} from "~/app/types/comparison";
import {watch} from 'vue';
import {useComparison} from "~/store/comparison";
import {numberFormat} from "~/helpers/filters";


const comparison = useComparison().comparisonArray
const allTechList = computed(() => {
  //Записываю тайтлы в массив
  let blocks: { title: string; values: string[]; }[] = []
  comparison.map(tech => {
    tech.equipment.map(value => {
      blocks.push({title: value.title, values: []});
    })
  })
  //очищаю от дубликатов массив тайтлов
  blocks = blocks.filter((value, index, self) =>
          index === self.findIndex((t) => (
              t.title === value.title
          ))
  )
  // перепбираю все значения и складываю в нужные блоки
  comparison.map(tech => {
    tech.equipment.map(value => {
      let currentBlock = blocks.find(item => item.title === value.title)
      if (currentBlock) {
        currentBlock.values = currentBlock?.values.concat(value.values)
      }
    })
  })
//очищаю от дубликатов массив значений

  blocks.map(tech => {
    tech.values = [...new Set(tech.values)];
  })

  return blocks
})

const mainList: string[] = []
allTechList.value.map(equipment => {
  mainList.push('title')
  equipment.values?.map(value => {
    mainList.push(value)
  })
})

const findCurrent = (item: string, complectation: ComparisonType) => {
  let list: string[] = []
  complectation.equipment.map(i => {
    if (i.values?.length) {
      i.values.map((st: string) => {
        return list.push(st);
      })
    }
  })
  return list.includes(item) ? '+' : '-'
}


const allOptions = ref<boolean>(false);
let valueRows: never[] | HTMLCollectionOf<Element> = [];
watch(allOptions, () => {
  sortRows(valueRows)
})
const sortRows = (array: any) => {
  for (let item of array) {
    item.classList.remove('comparison-table-col--show')
    if (!allOptions.value) {
      let rowArray = item.getElementsByClassName('comparison-table-col')
      for (let i in rowArray) {
        if (rowArray[i].innerText === '-') {
          item.classList.add('comparison-table-col--show')
        }
      }
    } else {
      item.classList.add('comparison-table-col--show')
    }
  }
}
onMounted(() => {
  valueRows = document.getElementsByClassName('comparison-table-row--content')
  sortRows(valueRows)
})


</script>


