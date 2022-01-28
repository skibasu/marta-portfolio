import { createDataHook } from "next-data-hooks"
import { getMenu } from "../../api/getMenu/getMenu"
import { getCategoriesMenu } from "../../api/getCategoriesMenu/getCategoriesMenu"

const usePageMenu = createDataHook("Header", async () => {
    const menu = await getMenu()
    const categories = await getCategoriesMenu()
    return { menu, categories }
})

export default usePageMenu
