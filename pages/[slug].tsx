import { useEffect } from "react"
import { GetStaticProps } from "next"
import { useContext } from "react"
import { AppContext } from "../app/contextStore/ContextStore"
import SinglePage from "../app/templates/SinglePage"
import { IServerData } from "../models"

import {
    getAllPagesSlug,
    getCategoriesMenu,
    getMenu,
    getSettings,
    getSpecificPage,
} from "../api"

/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Home: React.FC<IServerData> = ({
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
        updateMenu(menu.menu)
        updateSettings(themeSettings)
    }, [pageContent])

    return <SinglePage />
}
/////////////////////////////////////////////
/////////    GET STATIC PATHS     ///////////
/////////////////////////////////////////////
export const getStaticPaths = async () => {
    const paths = await getAllPagesSlug()

    return {
        paths,
        fallback: true,
    }
}
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params!
    console.log(slug)

    const categoriesMenu = await getCategoriesMenu()
    const pageContent = await getSpecificPage(slug as string)
    const menu = await getMenu()
    const themeSettings = await getSettings()
    return {
        props: {
            categoriesMenu,
            pageContent,
            menu,
            themeSettings,
        },
        revalidate: 100000,
    }
}

export default Home
