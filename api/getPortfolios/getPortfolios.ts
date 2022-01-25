import { IServerData } from "../../models"

export const getPortfolios = async (category: string) => {
    const res = await fetch(`http://localhost:1337/api/categories/${category}`)
    const portfolios = (await res.json()) as IServerData

    const data = {
        zone: portfolios.data.attributes.porffolio.data.attributes.zone,
        content: portfolios.data.attributes,
    }
    return data
}
