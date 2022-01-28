import { createDataHook } from "next-data-hooks"
import { getSettings } from "../../api/getSettings/getSettings"

const useGetSettings = createDataHook("Footer", async () => {
    const themeSettings = await getSettings()
    return themeSettings
})

export default useGetSettings
