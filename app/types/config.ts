import {MarkType} from "~/app/types/marks";
import {SeoTagType} from "~/app/types/seoTags";
import {SetType} from "~/app/types/sets";
import {SettingSite} from "~/app/types/settings";

export type SiteConfigType = {
    seoTag: SeoTagType[]
    siteSettings: SettingSite
    catalog: MarkType[]
    sets: SetType[]
}

