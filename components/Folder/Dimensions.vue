<template>
  <div class="folder__dimensions">
    <h2 class="heading heading--h2">
      габариты
    </h2>
    <div class="folder__dimensions-desktop-line">
      <div class="folder__dimensions-line">
        <div class="folder__dimensions-items">
          <div class="folder__dimensions-item">
            <img :src="`/img/types/${folder.bodyType.name}/back.svg`" :width="200" :height="200"
                 :alt="`Тип кузова ` + folder.bodyType.name + ` в векторе — вид сзади`">
            <div class="folder__dimensions-value folder__dimensions-value--bottom">
              <span>{{ folder.body_width }}</span>
            </div>
          </div>
          <div class="folder__dimensions-item">
            <img :src="`/img/types/${folder.bodyType.name}/front.svg`" :width="200" :height="200"
                 :alt="`Тип кузова ` + folder.bodyType.name + ` в векторе — вид спереди`">
            <div class="folder__dimensions-value folder__dimensions-value--bottom">
              <span>{{ folder.body_width }}</span>
            </div>
            <div class="folder__dimensions-value folder__dimensions-value--right">
              <span>{{ folder.body_height }}</span>
            </div>
          </div>
        </div>
        <div class="folder__dimensions-item">
          <img :src="`/img/types/${folder.bodyType.name}/aside.svg`" :width="300" :height="100"
               :alt="`Тип кузова ` + folder.bodyType.name + ` в векторе — вид сбоку`">
          <div class="folder__dimensions-value folder__dimensions-value--bottom">
            <span>{{ folder.body_length }}</span>
          </div>
        </div>
      </div>
      <div class="folder__dimensions-table">
        <div class="folder__dimensions-row">
          <div class="folder__dimensions-row-name">Длина кузова, мм</div>
          <div class="folder__dimensions-row-value">{{ folder.body_length }}</div>
        </div>
        <div class="folder__dimensions-row">
          <div class="folder__dimensions-row-name">Ширина кузова, мм</div>
          <div class="folder__dimensions-row-value">{{ folder.body_width }}</div>
        </div>
        <div class="folder__dimensions-row">
          <div class="folder__dimensions-row-name">Высота кузова, мм</div>
          <div class="folder__dimensions-row-value">{{ folder.body_height }}</div>
        </div>
        <div class="folder__dimensions-row">
          <div class="folder__dimensions-row-name">Колесная база, мм</div>
          <div class="folder__dimensions-row-value">{{ folder.wheelbase }}</div>
        </div>
        <div class="folder__dimensions-row">
          <div class="folder__dimensions-row-name">Дорожный просвет, мм</div>
          <div class="folder__dimensions-row-value">{{ folder.clearance }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {FolderPageType} from "~/app/types/folders";

const props = defineProps<{
  folder: FolderPageType;
}>()
</script>