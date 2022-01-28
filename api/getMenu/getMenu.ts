import { IServerData } from "../../models"

export const getMenu = async () => {
    const res = await fetch(
        `http://localhost:1337/api/menu?populate[PageLink][populate]=*`
    )
    const menu = (await res.json()) as IServerData

    return menu.data.attributes.PageLink
}
