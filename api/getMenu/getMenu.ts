import { IServerData } from "../../models"
export const getMenu = async () => {
    const res1 = await fetch(
        `http://localhost:1337/api/menu?populate[PageLink][populate]=*`
    )
    const menu = (await res1.json()) as IServerData
    return menu.data.attributes.PageLink
}
