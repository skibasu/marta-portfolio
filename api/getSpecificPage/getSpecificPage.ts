import { IServerData } from "../../models"

export const getSpecificPage = async (slug: string) => {
    const res = await fetch(`http://localhost:1337/api/pages/${slug}`)
    const projectContent = (await res.json()) as IServerData
    const { data } = projectContent
    console.log(data)
    return data.attributes
}
