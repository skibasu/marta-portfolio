import { useEffect } from "react"
import { useContext } from "react"
import { GetStaticProps } from "next"
import { getDataForPages } from "../api"
import { AppContext } from "../app/contextStore/ContextStore"
import { IServerData } from "../models"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const HomePage: React.FC<IServerData> = ({
    categoriesMenu,
    pageContent,
    menu,
    themeSettings,
}) => {
    const {
        updateCategoriesMenu,
        updatePageContent,
        updateMenu,
        updateSettings,
    } = useContext(AppContext)

    useEffect(() => {
        updateCategoriesMenu(categoriesMenu)
        updatePageContent(pageContent)
        updateMenu(menu)
        updateSettings(themeSettings)
    }, [])
    return <p>Home Page</p>
}
export default HomePage
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async (context) => {
    const { menu, categoriesMenu, themeSettings, pageContent } =
        await getDataForPages("home")

    return {
        props: {
            menu,
            categoriesMenu,
            themeSettings,
            pageContent,
        },
        revalidate: 10,
    }
}
