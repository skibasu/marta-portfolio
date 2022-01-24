import { IServerData } from "../../models"

export const getSinglePortfolio = async (category: string) => {
    const res = await fetch(`http://localhost:1337/api/porffolios/${category}`)
    const projectContent = (await res.json()) as IServerData
    const data = projectContent.data[0].attributes
    return data
}
