import { GetStaticProps } from "next"
import {
    getPortfolios,
    getMenu,
    getCategoriesMenu,
    getAllCategoriesSlug,
    getSettings,
} from "../../../api"
import PortfolioCategoryPage from "../../../app/templates/PortfolioCategoryPage"
import { IServerData } from "../../../models"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Category: React.FC<IServerData> = ({
    content: { slug, Name: name },
    zone,
}) => {
    return <PortfolioCategoryPage data={{ zone, slug, name }} />
}
export default Category

export const getStaticPaths = async () => {
    const category = await getAllCategoriesSlug()

    return {
        paths: category,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { category } = context.params!
    const { content, zone } = await getPortfolios(category as string)
    const menu = await getMenu()
    const categoriesMenu = await getCategoriesMenu()
    const themeSettings = await getSettings()

    return {
        props: {
            content,
            zone,
            menu,
            categoriesMenu,
            themeSettings,
        },
        revalidate: 10,
    }
}
