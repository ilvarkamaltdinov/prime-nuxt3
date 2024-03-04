import {SitemapStream, streamToPromise} from "sitemap";
import {fileURLToPath} from "url";
import {dirname, resolve} from 'path'
import * as fs from "fs";

export default defineEventHandler( (event) => {

    const host = getRequestHost(event)
    // if (host !== mainDomain.domain){
    //     return setResponseStatus(event, 404)
    // }
    const sitemap = new SitemapStream({hostname: `https://${host}`})
    const staticEndpoints = getStaticEndpoints()
    for (const staticEndpoint of staticEndpoints) {
        sitemap.write({url: staticEndpoint, changefreq: 'monthly'})
    }
    for (const categoryEndpoint of getCategoryEndpoints()) {
        sitemap.write({url: categoryEndpoint, changefreq: 'monthly'})
    }

    sitemap.end()
    return streamToPromise(sitemap)

})

function getCategoryEndpoints(): string[] {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    let files = getFiles(`${__dirname}/../../pages`)
    files = files
        .filter((file) =>
            file.includes('[category]')
        )
        .map((file) => file.split('pages')[1])
        .map((file) => {
            return file.endsWith('index.vue') ? file.split('/index.vue')[0] : file.split('.vue')[0]
        })
    let categoryRoutes: string[] = []
    files.forEach(item => {
        categoryRoutes.push(item.replace('[category]', 'n'))
        categoryRoutes.push(item.replace('[category]', 'u'))
    })
    return categoryRoutes
}

function getStaticEndpoints(): string[] {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    const files = getFiles(`${__dirname}/../../pages`)
    return files
        .filter((file) =>
            !file.includes('[mark]') && !file.includes('[category]') && !file.includes('[index]') && !file.includes('[set]')
        )
        .map((file) => file.split('pages')[1])
        .map((file) => {
            return file.endsWith('index.vue') ? file.split('/index.vue')[0] : file.split('.vue')[0]
        })
}

function getFiles(dir: string): string[] {
    const dirents = fs.readdirSync(dir, {withFileTypes: true})
    const files = dirents.map((dirent: { name: string; isDirectory: () => any; }) => {
        const res = resolve(dir, dirent.name)
        return dirent.isDirectory() ? getFiles(res) : res
    })
    return files.flat()
}
