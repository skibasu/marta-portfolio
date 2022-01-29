import { createContext } from "react"
import type { ICtx, TSettings } from "../../models"

const context: any = {
    menu: [],
    themeSettings: {} as TSettings,
    categories: [],
    pageContent: {},
    categoriesMenu: [],
}
export default createContext(context)
