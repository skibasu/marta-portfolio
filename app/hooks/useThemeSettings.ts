import { createDataHook, isServerSidePropsContext } from "next-data-hooks"
import { getSettings } from "../../api/getSettings/getSettings"

const useGetSettings = createDataHook("Footer", async (context) => {
    if (!isServerSidePropsContext(context)) {
        throw new Error("This data hook only works in getServerSideProps.")
    }
    const themeSettings = await getSettings()
    return themeSettings
})

export default useGetSettings
