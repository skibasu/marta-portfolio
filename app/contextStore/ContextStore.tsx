import { useState, createContext } from "react"
import {
    IAppContext,
    IServerData,
    TSettings,
    IChildren,
    IMenu,
} from "../../models"

const ContextStore: React.FC<IChildren> = ({ children }) => {
    const [nav, setNav] = useState<IMenu[]>([])
    const [cat, setCategories] = useState({} as IServerData[])
    const [set, setSettings] = useState({} as TSettings)
    const [page, setPageContent] = useState({} as IServerData)
    const [catMenu, setCategoriesMenu] = useState({} as IServerData[])

    const updateMenu = (menu: IServerData) => {
        setNav((state) => ({ ...state, ...menu }))
    }
    const updateCategories = (categories: IServerData) => {
        setCategories((state) => ({ ...state, ...categories }))
    }
    const updateSettings = (themeSettings: TSettings) => {
        setSettings((state) => ({ ...state, ...themeSettings }))
    }
    const updatePageContent = (pageContent: IServerData) => {
        setPageContent((state) => ({ ...state, ...pageContent }))
    }
    const updateCategoriesMenu = (categoriesMenu: IServerData) => {
        setCategoriesMenu((state) => ({ ...state, ...categoriesMenu }))
    }

    return (
        <AppContext.Provider
            value={{
                menu: nav,
                categories: cat,
                themeSettings: set,
                pageContent: page,
                categoriesMenu: catMenu,
                updateMenu,
                updateCategories,
                updateSettings,
                updatePageContent,
                updateCategoriesMenu,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const AppContext = createContext({} as IAppContext)
export default ContextStore
