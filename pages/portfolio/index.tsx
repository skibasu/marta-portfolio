import { getMenu, getCategoriesMenu } from "../../api"
import Header from "../../app/components/Header/Header"
import Layout from "../../app/Layout/Layout"
import PortfolioMenu from "../../app/components/PortfolioMenu/PortfolioMenu"
import { GetStaticProps } from "next"
import { IServerData } from "../../models"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Portfolio: React.FC<IServerData> = ({ menu, categoriesMenu }) => {
    return (
        <Layout>
            <Header menu={menu} />
            <div className="container max-w-full min-w-full bg-red-200">
                <h1 className="font-raleway text-center font-semibold">
                    Portfolio Menu
                </h1>
                {/* <PortfolioMenu menu={categoriesMenu} /> */}
            </div>
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
    return {
        props: {
            menu,
            categoriesMenu,
        },
        revalidate: 10,
    }
}
