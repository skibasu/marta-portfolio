import { createDataHook, isServerSidePropsContext } from "next-data-hooks"
import { getSpecificPage } from "../../api/getSpecificPage/getSpecificPage"

export const usePageContent = createDataHook("Page", async (context) => {
    if (!isServerSidePropsContext(context)) {
        throw new Error("This data hook only works in getServerSideProps.")
    }
    const pageData = await getSpecificPage("home")
    return pageData
})

export const useOfferContent = createDataHook("Page1", async (context) => {
    if (!isServerSidePropsContext(context)) {
        throw new Error("This data hook only works in getServerSideProps.")
    }
    const pageData = await getSpecificPage("oferta")
    return pageData
})

export const usePortfolioContent = createDataHook("Page2", async (context) => {
    if (!isServerSidePropsContext(context)) {
        throw new Error("This data hook only works in getServerSideProps.")
    }
    const pageData = await getSpecificPage("portfolio")
    return pageData
})
export default usePageContent
