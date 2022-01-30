import { IServerData } from "../../models"

export const getAllCategoriesSlug = async () => {
    const res = await fetch(`http://localhost:1337/api/categories/`)
    const resData = (await res.json()) as IServerData
    const category = resData.data.map((v: any) => ({
        params: { category: v.attributes.slug },
    }))
    return category
}
