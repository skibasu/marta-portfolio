import { IServerData } from "../../models"

export const getAllPagesSlug = async () => {
    const res = await fetch(`http://localhost:1337/api/pages`)
    const resData = (await res.json()) as IServerData
    const pages = resData.data.map((v: any) => ({
        params: {
            slug: v.attributes.pageId,
        },
    }))

    return pages
}
