import { useState } from "react"
import { AppContext } from "../../contexts/header"
import { IAppContext, IServerData } from "../../../models"

const ContextWrapper: React.FC<IAppContext> = ({
    children,
    menu,
    categories,
    themeSettings,
    pageContent,
    categoriesMenu,
}) => {
    const [nav, setNav] = useState(menu)
    const [cat, setCategories] = useState(categories)
    const [set, setSettings] = useState(themeSettings)
    const [page, setPageContent] = useState(pageContent)
    const [catMenu, setCategoriesMenu] = useState(categoriesMenu)

    const updatePageContent = (pageContent: IServerData) => {
        setPageContent((state) => ({ ...state, pageContent }))
    }

    return (
        <AppContext.Provider
            value={{
                menu: nav,
                categories: cat,
                themeSettings: set,
                pageContent: page,
                categoriesMenu: catMenu,
                updatePageContent,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export default ContextWrapper
