import { GetStaticProps } from "next"
import {
    getCategoriesMenu,
    getSpecificPage,
    getAllCategoriesSlug,
    getMenu,
    getSettings,
} from "../../api"
import PortfolioMenuPage from "../../app/templates/PortfolioMenuPage"
import { IServerData } from "../../models"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Portfolio: React.FC<IServerData> = ({
    pageContent,
    categoriesMenu,
    categories,
}) => {
    return (
        <PortfolioMenuPage data={{ pageContent, categoriesMenu, categories }} />
    )
}
export default Portfolio
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async (context) => {
    const categoriesMenu = await getCategoriesMenu()
    const pageContent = await getSpecificPage("portfolio")
    const menu = await getMenu()
    const categories = await getAllCategoriesSlug()
    const themeSettings = await getSettings()

    return {
        props: {
            menu,
            categories,
            categoriesMenu,
            pageContent,
            themeSettings,
        },
        revalidate: 1000,
    }
}
