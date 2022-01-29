import Image from "../../app/components/ImageFadIn/ImageFadeIn"
import { GetStaticProps } from "next"
import {
    getCategoriesMenu,
    getSpecificPage,
    getCategories,
    getMenu,
    getSettings,
} from "../../api"
import Container from "../../app/components/Container/Container"
import FullBackground from "../../app/components/FullBackground/FullBackground"
import PortfolioMenu from "../../app/components/PortfolioMenu/PortfolioMenu"
import { IServerData } from "../../models"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Portfolio: React.FC<IServerData> = () => {
    return (
        <Container className="pt-lg flex flex-col justify-center relative">
            <FullBackground />
            <PortfolioMenu />
        </Container>
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
    const categories = await getCategories()
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
