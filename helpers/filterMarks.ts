import {MarkType} from "~/app/types/marks";

const popular = [
    'kia',
    'hyundai',
    'chery',
    'geely',
    'haval',
    'toyota',
    'nissan',
    'skoda',
    'exeed',
    'changan',
]


export const popularMarks = (marks: MarkType[], spliceNumber: number) => {
    let sortedMarks
    // sortedMarks = marks.filter(mark => mark.priority)?.sort((a: any, b: any) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())).splice(0, spliceNumber)
    //сортировка по ключу priority
    //Сортировка вручную по массиву
    sortedMarks = marks.filter((mark => popular.find(item => item.toLowerCase() === mark.slug.toLowerCase())))
    //сортировка по алфавиту
    sortedMarks = sortedMarks.sort((a: any, b: any) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
    return sortedMarks


    //ХАРДКОД для замены ДВ ХОВЕР на ОМОДУ в списке популярных марок
    // let omoda = marks.find(mark => mark.slug === 'omoda')
    // return sortedMarks.map(mark => {
    //     return mark.slug === 'dw-hower' ? omoda : mark
    // })
    //

}
