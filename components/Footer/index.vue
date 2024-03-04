<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__nav">
        <nuxt-link class="footer__nav-link" v-for="item in menu" :to="item.slug">
          {{ item.title }}
        </nuxt-link>
      </div>
      <div class="footer__line">
        <div class="footer__text">
          <p class="text__p--footer">
            Годовая ставка автокредита варьируется от 4,9% до 16,5% и зависит от конкретного банка, суммы займа
            и кредитной программы. Минимальный срок погашения от 2 месяцев, максимальный - 96 месяцев. При этом
            любые дополнительные комиссии не взимаются.
          </p>
          <p class="text__p--footer">
            В случае невозвращения в условленный срок суммы автокредита или суммы процентов по автокредиту
            банк-партнер оставляет за собой право начислить штраф за просрочку платежа в среднем размере 0,1% от
            первоначальной суммы автокредита. При несоблюдении условий погашения автокредита данные о нарушителе
            могут быть переданы в специальный реестр должников и коллекторское агентство для взыскания
            задолженности.
          </p>
          <p class="text__p--footer">
            Кредит предоставляется банком АО «Тинькофф Банк» (Лицензия ЦБ РФ № 2673 от 24.03.2015).
          </p>
          <p class="text__p--footer">
            Данный Интернет-сайт носит исключительно информационный характер и ни при каких условиях не является
            публичной офертой, определяемой положениями Статьи 437 Гражданского кодекса РФ. Для получения
            подробной информации о наличии и стоимости указанных товаров и (или) услуг, пожалуйста, обращайтесь
            к менеджерам автосалона.
          </p>
        </div>
        <div class="footer__contacts">
          <div class="footer__contacts-line" v-if="settings.contact_schedule">
            <nuxt-icon class="footer__contacts-icon" name="contact_schedule"/>
            <span>{{ settings.contact_schedule }}</span>
          </div>
          <div class="footer__contacts-line" v-if="settings.contact_address">
            <nuxt-icon class="footer__contacts-icon" name="contact_address"/>
            <span>{{ settings.contact_address }}</span>
          </div>
          <div class="footer__contacts-line" v-if="settings.contact_phone">
            <Phone number icon/>
          </div>
        </div>
      </div>
      <ul class="footer__legal" v-if="settings.legal_name">
        <li class="footer__legal-item">{{ settings.legal_name }}</li>
        <li class="footer__legal-item">
          ИНН: {{ settings.legal_inn }} / КПП: {{ settings.legal_kpp }} /
          ОГРН: {{ settings.legal_ogrn }}
        </li>
        <li class="footer__legal-item">
          Юр. адрес: {{ settings.legal_address }}
        </li>
        <li class="footer__legal-item">
          <nuxt-link to="/policy">Пользовательское соглашение</nuxt-link>
        </li>
      </ul>


    </div>
  </footer>
</template>
<script setup lang="ts">
import {useSiteConfig} from "~/store/siteConfig";
import Phone from '~/components/Phone'

const settings = useSiteConfig().settings;
const menu = [
  {
    title: 'В наличии',
    slug: '/new'
  },
  {
    title: 'Автокредит',
    slug: '/credit'
  },
  {
    title: 'Trade-in',
    slug: '/tradein'
  },
  {
    title: 'Рассрочка',
    slug: '/installment'
  },
  {
    title: 'Контакты',
    slug: '/contacts'
  },
  {
    title: 'Акции',
    slug: '/discount'
  },
  // {
  //   title: 'Банки',
  //   slug: '/banks'
  // },
  {
    title: 'О компании',
    slug: '/about'
  }
]
</script>