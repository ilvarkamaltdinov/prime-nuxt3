import {defineStore} from 'pinia'
import {OfferModalType} from "~/app/types/offers";


export type ModalType = {
    open: boolean
    title: string
    text?: string
    type: string
}

export const useModals = defineStore('modals', {
    state: () => ({
        modal: <ModalType>{
            open: false,
            title: '',
            type: ''
        },
        modalOffer: <OfferModalType | null>null
    }),
    actions: {

        async openModal(payload: ModalType) {
            this.modal = payload
        },
        async closeModal() {
            this.modal.open = false
            setTimeout(() => {
                this.modal.title = ''
                this.modal.type = ''
                this.modal.text = ''
                this.modalOffer = null
            }, 100)
        },

        async setModalOffer(payload: OfferModalType) {
            this.modalOffer = payload
        },
    }
})