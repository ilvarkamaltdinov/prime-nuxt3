import {defineStore} from 'pinia'
import {request} from "~/helpers/request";
import {siteConfigGql} from "~/apollo/queries/siteConfig";
import {SeoTagType} from "~/app/types/seoTags";
import {SettingSite} from "~/app/types/settings";
import {MarkType} from "~/app/types/marks";
import {SetType} from "~/app/types/sets";
import {SiteConfigType} from "~/app/types/config";
import {Site} from '~/app/variables'
export const useSiteConfig = defineStore('siteConfig', {
    state: () => ({
        seoTag: <SeoTagType[]>[],
        settings: <SettingSite>{},
        catalog: <MarkType[]>[],
        sets: <SetType[]>[],
        isNight: <boolean>false,
        isNY: <boolean>false,
        site: <Site>{}
    }),

    actions: {
        async setIsNY(payload: boolean) {
            this.isNY = payload
        },
        async setIsNight(payload: boolean) {
            this.isNight = payload
        },
        async setSite(payload: Site) {
            this.site = payload
        },
        async getSiteConfig() {
            try {
                const {data} = await request<SiteConfigType>(siteConfigGql)
                this.seoTag = data.value.seoTag
                // @ts-ignore
                data.value?.siteSettings.settings.map(setting => {
                    // @ts-ignore
                    this.settings[setting.key] = setting.value
                })
                this.catalog = data.value.catalog
                this.sets = data.value.sets
            } catch (error) {
                console.log(error)
            }
        }
    }
})
