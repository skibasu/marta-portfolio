import { IServerData } from "../../models"

export const getCategoriesMenu = async () => {
    const res = await fetch(`http://localhost:1337/api/categories/`)
    const resData = (await res.json()) as IServerData
    const menu = resData.data.map((v: IServerData) => ({
        name: v.attributes.Name,
        thumbnail: v.attributes.Thumbnail.data.attributes.formats,
        slug: v.attributes.slug,
    }))
    return menu
}
