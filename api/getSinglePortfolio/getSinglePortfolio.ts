import { IServerData } from "../../models"

export const getSinglePortfolio = async (category: string, slug: string) => {
    const res = await fetch(
        `http://localhost:1337/api/porffolios/${category}/${slug}`
    )
    const projectContent = (await res.json()) as IServerData
    const { data } = projectContent
    if (!data?.length) {
        return false
    }
    return data[0].attributes
}
