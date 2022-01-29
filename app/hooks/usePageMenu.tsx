import { createDataHook, isServerSidePropsContext } from "next-data-hooks"
import { getMenu } from "../../api/getMenu/getMenu"
import { getCategoriesMenu } from "../../api/getCategoriesMenu/getCategoriesMenu"

const usePageMenu = createDataHook("Header", async (context) => {
    if (!isServerSidePropsContext(context)) {
        throw new Error("This data hook only works in getServerSideProps.")
    }
    const menu = await getMenu()
    const categories = await getCategoriesMenu()
    return { menu, categories }
})

export default usePageMenu
