import Header from "../../../app/components/Header/Header"
import Layout from "../../../app/Layout/Layout"
import { getMenu, getPortfolios, getCategories } from "../../../api"
import PortfolioGrid from "../../../app/components/PortfolioGrid/PorftolioGrid"
import styles from "../../../styles/Home.module.css"

import { IServerData } from "../../../models"
import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"

interface Params extends ParsedUrlQuery {
    category: string
}
interface Props extends ParsedUrlQuery {
    [key: string]: any
}

/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Category: React.FC<IServerData> = ({ content, zone, menu }) => {
    const slug = content.slug
    return (
        <Layout>
            <Header menu={menu} />
            <div className={styles.container}>
                <h1 className={styles.title}>{content.Name}</h1>
                <PortfolioGrid zone={zone} category={slug} />
            </div>
        </Layout>
    )
}
export default Category
/////////////////////////////////////////////
/////////    GET STATIC PATHS     ///////////
/////////////////////////////////////////////
export const getStaticPaths = async () => {
    const category = await getCategories()
    return {
        paths: category,
        fallback: false,
    }
}
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps<Props, Params> = async (
    context
) => {
    const { category } = context.params!
    const { content, zone } = await getPortfolios(category)
    const menu = await getMenu()
    return {
        props: {
            content,
            menu,
            zone,
        },
        revalidate: 10,
    }
}
