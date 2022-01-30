import { IServerData } from "../../models"

export const getAllPagesSlug = async () => {
    const res = await fetch(`http://localhost:1337/api/pages`)
    const resData = (await res.json()) as IServerData
    const pages = resData.data.map((v: IServerData) => {
        return { params: { slug: v.attributes.pageId } }
    })
    console.log(pages)
    return pages
}
