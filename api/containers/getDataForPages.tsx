import { getMenu, getCategoriesMenu, getSettings, getSpecificPage } from "../"

export const getDataForPages = async (slug: string) => {
    const menu = await getMenu()
    const categoriesMenu = await getCategoriesMenu()
    const themeSettings = await getSettings()
    const pageContent = await getSpecificPage(slug)

    return { menu, categoriesMenu, themeSettings, pageContent }
}
