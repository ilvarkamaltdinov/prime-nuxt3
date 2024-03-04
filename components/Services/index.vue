<template>
  <div class="services">
    <div class="services__line">
      <div @click="openDescription(service)" class="services__item"
           v-for="service in services"
           :key="service.title">
        <span class="services__item-title">{{ service.title }}</span>
        <img class="services__item-image"
             :src="service.image" :alt="service.title"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useModals} from "~/store/modals";
import {UnwrapRef} from "vue";
import {useSiteConfig} from "~/store/siteConfig";
import {numberFormat} from "~/helpers/filters";

const settings = useSiteConfig().settings
const services = computed(() => {
  return [
    {
      title: "Скидка по автокредиту",
      slug: "/credit",
      description: `При покупке нового автомобиля в кредит мы предлагаем покупателям скидку до ${numberFormat(settings.credit_sale)} ₽. Мы сотрудничаем с крупнейшими банками России, а генеральный партнер нашего автоцентра — «Тинькофф».`,
      image: "/img/services/credit.svg",
    },
    {
      title: "trade-in",
      slug: "/tradein",
      description: `При покупке нового автомобиля по программе Trade-In мы предлагаем покупателям выгоду до ${numberFormat(settings.exchange_sale)} ₽. Оценка автомобиля, выкуп и сопровождение по сделке — абсолютно бесплатны.`,
      image: "/img/services/exchange.svg",
    },

    {
      title: "Первый взнос от 0%",
      slug: "/installment",
      description: `Автокредит в ${settings.dealer_name} доступен и без первоначального взноса, оставьте заявку на любой новый автомобиль, и наши банки-партнеры одобрят заявку в течение 30 минут.`,
      image: "/img/services/installment.svg",
    },
    {
      title: "ПОДАРОК НА ВЫБОР",
      slug: "/prize",
      description: `При покупке нового автомобиля в кредит мы предлагаем покупателям подарок на выбор — КАСКО, зимнюю резину или дополнительный аксессуар.`,
      image: "/img/services/prize.svg",
    },
    {
      title: "ПЕРВЫЙ АВТОМОБИЛЬ",
      slug: "/first",
      description: `Первый автомобиль в 2024 - особая программа, позволяющая воспользоваться государственным кредитованием транспортных средств в 2023 году обеспечивает выгодные условия: до 20% от общей суммы. Благодаря льготам, которые предлагает автокредитование, можно приобрести транспортное средство по максимально выгодным условиям. Это позволяет поддерживать спрос на покупку автомобилей, собираемых на территории Российской Федерации. Подобная программа была разработана еще в 2009 году и до сих пор успешно функционирует.`,
      image: "/img/services/first.svg",
    },
    {
      title: "Семейный автомобиль",
      slug: "/family",
      description: `${settings.dealer_name} предлагает семьям с детьми скидку 20-25% на приобретение автомобиля. Программа действует до конца 2024 года. Воспользоваться льготой могут также граждане без детей, но с определенными условиями. Доступны различные модели автомобилей, новые китайские модели и другие. Все банки, прикрепленные к программе, сотрудничают с нашим автоцентром.`,
      image: "/img/services/family.svg",
    },
  ]
})

async function openDescription(service: UnwrapRef<typeof services>[number]) {
  await useModals().openModal({
    open: true,
    title: service.title,
    text: service.description,
    type: 'description'
  })
}
</script>