import { createDataHook } from "next-data-hooks"
import { getSpecificPage } from "../../api/getSpecificPage/getSpecificPage"

export const usePageContent = createDataHook("Page", async (context) => {
    const pageData = await getSpecificPage("home")
    return pageData
})

export const useOfferContent = createDataHook("Page", async (context) => {
    const pageData = await getSpecificPage("oferta")
    return pageData
})

export const usePortfolioContent = createDataHook("Page", async (context) => {
    const pageData = await getSpecificPage("portfolio")
    return pageData
})
export default usePageContent
