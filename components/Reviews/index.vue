<template>
  <div class="reviews" v-if="reviews">
    <div class="reviews__list">
      <div class="reviews__item"
           :class="{'reviews__item--active': videoShow === video.id}"
           :key="video.id"
           v-for="video in reviews"
           @click="videoShow = video.id">
        <iframe v-if="videoShow === video.id "
                class="reviews__player"
                width="100%"
                height="100%"
                :src="`https://www.youtube.com/embed/${video.contentDetails.videoId}?autoplay=1&rel=0&showinfo=0`"
                frameborder="0"
                allow="autoplay"
                allowfullscreen/>
        <div class="reviews__link"
             v-if="videoShow !== video.id">
          <div class="reviews__about">
            <h3 class="reviews__title">{{ video.snippet.title }}</h3>
          </div>
          <div class="reviews__picture">
            <img v-if="video.snippet.thumbnails.high" class="reviews__img lazyload"
                 :data-src="video.snippet.thumbnails.high.url"
                 :alt="video.snippet.description"/>
          </div>
        </div>
        <nuxt-icon v-if="videoShow !== video.id" class="reviews__play-icon" name="play"/>
      </div>
    </div>
    <button v-if="showMore" @click="getPlaylist"
            class="button button--short button--primary-opacity"> Показать больше
    </button>
  </div>
</template>

<script setup lang="ts">
import {useSiteConfig} from "~/store/siteConfig";
import {useFetch} from "#imports";

type PlayListItemList = {
  etag: string
  kind: string
  items: PlayListItem[]
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  nextPageToken?: string | null
}
type VideoImg = {
  url: string
  width: number
  height: number
}
type PlayListItem = {
  etag: string
  id: string
  kind: string
  contentDetails: {
    videoId: string
    videoPublishedAt: string
  }
  snippet: {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
      default: VideoImg
      medium: VideoImg
      high: VideoImg
      standard: VideoImg
    }
    channelTitle: string
    playlistId: string
    position: number
    resourceId: {
      kind: string
      videoId: string
    }
    videoOwnerChannelTitle: string
    videoOwnerChannelId: string
  }
  status: {
    privacyStatus: string
  }
}
const settings = useSiteConfig().settings
const reviews = ref<PlayListItem[]>([])
const videoShow = ref<string>('')
const pageToken = ref<string | null | boolean>(null)
const showMore = ref<boolean>(false)

const getReviews = async () => {
  await getPlaylist()
}
const getPlaylist = async () => {
  const params = {
    "playlistId": settings.youtube_playlist,
    "orderby": "date",
    "mine": true,
    "maxResults": 12,
    "key": "AIzaSyAgf6ujoB_8GLhPIL3Qjwg7eEMiXKRMB_M",
    "part": "snippet,status,contentDetails",
    "pageToken": pageToken.value
  }
  const {data, error} = await useFetch<PlayListItemList>('https://www.googleapis.com/youtube/v3/playlistItems', {
    params: params
  })

  if (error.value) {
    console.log(error.value)
    return
  }
  if (data.value?.nextPageToken) {
    pageToken.value = data.value?.nextPageToken
  } else {
    showMore.value = false
  }
  reviews.value?.push(...data.value?.items || [])
}
getReviews()
</script>