import { IServerData } from "../../models"

export const getSettings = async () => {
    const res = await fetch(`http://localhost:1337/api/theme-settings`)
    const data = (await res.json()) as IServerData

    return data
}
