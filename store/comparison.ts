import {defineStore} from 'pinia'
import {ComparisonType} from "~/app/types/comparison";

export const useComparison = defineStore('comparison', {
    state: () => ({
        comparisonArray: <ComparisonType[]>[]
    }),

    actions: {
        async setComparison(payload: ComparisonType) {
            if (this.comparisonArray.some(item => item.slug === payload.slug)) {
                this.comparisonArray = this.comparisonArray.filter(item => item.slug !== payload.slug)
            } else {
                if (this.comparisonArray.length <= 4) {
                    this.comparisonArray.push(payload)
                }
            }

        },
        async clearComparison() {
            this.comparisonArray = []
        }
    }
})