<template>
  <div class="about">
    <div class="about__line">
      <div class="about__slider f-carousel f-carousel--about " id="aboutSlider">
        <div class="f-carousel__viewport">
          <div class="f-carousel__track">
            <div class="about__item f-carousel__slide" v-for="index in slidesNumber">
              <NuxtPicture class="slider-about__image" :src="`/img/slider/about/slide-${index}.webp`"
                           :alt="`Фото автоцентра ${settings.dealer_name} в ${settings.contact_address}`"
                           :width="864"
                           :height="468"/>
            </div>
          </div>
        </div>
      </div>
      <div class="about__text">
        <p class="text__p">
          Автосалон "{{ settings.dealer_name }}" в {{ settings.contact_in_city }} - это идеальное место для тех, кто
          ищет новый автомобиль от ведущих мировых производителей. Компания специализируется на предоставлении клиентам
          самого
          широкого выбора автомобилей, от премиальных до эконом-класса.
        </p>
        <p class="text__p">
          Сотрудники автосалона "{{ settings.dealer_name }}" имеют богатый опыт в автомобильной индустрии и всегда
          готовы предложить клиентам
          их экспертное мнение и консультацию. Это позволяет им оказывать высококачественный сервис на каждом этапе
          приобретения автомобиля, начиная с выбора и заканчивая оформлением сделки.
        </p>
        <p class="text__p">
          Компания также предлагает широкий спектр дополнительных услуг, включая сервисное обслуживание, тест-драйвы,
          программы обмена и выкупа автомобилей, а также финансовые программы и кредитование.
        </p>
        <p class="text__p">
          Автосалон "{{ settings.dealer_name }}" в {{ settings.contact_in_city }} стремится удовлетворить запросы
          каждого клиента, предоставляя надежные
          автомобили по конкурентоспособным ценам. Здесь вас всегда ждет высокий профессионализм, качественное обслуживание и приятная атмосфера.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSiteConfig} from "~/store/siteConfig";
import {Carousel} from "@fancyapps/ui";

const settings = useSiteConfig().settings
const slidesNumber = 3;
let slider: Carousel
const initSlider = () => {
  const container = document.getElementById("aboutSlider");
  const options = {
    infinite: true,
    center: false,
    transition: 'slide',
    getProgress: 'center',
    Thumbs: {
      type: "modern",
    },
  };
  slider = new Carousel(container, options);
}

onMounted(() => {
  initSlider()
})
</script>
