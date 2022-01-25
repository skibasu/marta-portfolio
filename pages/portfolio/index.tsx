import { getMenu, getCategoriesMenu, getSettings } from "../../api"
import Header from "../../app/components/Header/Header"
import Footer from "../../app/components/Footer/Footer"
import Container from "../../app/components/Container/Container"
import Layout from "../../app/Layout/Layout"
import PortfolioMenu from "../../app/components/PortfolioMenu/PortfolioMenu"
import { GetStaticProps } from "next"
import { IServerData } from "../../models"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Portfolio: React.FC<IServerData> = ({
    menu,
    categoriesMenu,
    themeSettings,
}) => {
    const { copyrights, socialMedia } = themeSettings
    return (
        <Layout>
            <Header menu={menu} />
            <Container className="pt-lg flex flex-col justify-center">
                <h1 className="font-raleway text-center font-semibold text-h1 mb-xl">
                    Portfolio
                </h1>
                <PortfolioMenu menu={categoriesMenu} />
            </Container>
            <Footer copyrights={copyrights} socialMedia={socialMedia} />
        </Layout>
    )
}
export default Portfolio
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async () => {
    const menu = await getMenu()
    const categoriesMenu = await getCategoriesMenu()
    const themeSettings = await getSettings()
    return {
        props: {
            menu,
            categoriesMenu,
            themeSettings,
        },
        revalidate: 10,
    }
}
