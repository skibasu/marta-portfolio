import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { IServerData } from "../models"
import Header from "../app/components/Header/Header"
import Layout from "../app/Layout/Layout"
import styles from "../styles/Home.module.css"

interface IMenu {
    [key: string]: any
}
interface Params extends ParsedUrlQuery {
    pid: string
}
const Home: React.FC<IServerData> = (props) => {
    return (
        <Layout>
            <Header menu={props.menu} />
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {props.pageContent.Sections[0].Title}
                </h1>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps<any, Params> = async (context) => {
    const slug = "home"
    const res = await fetch(
        `http://localhost:1337/api/menu?populate[PageLink][populate]=*`
    )
    const res1 = await fetch(
        `http://localhost:1337/api/pages?filters[pageId][$eq]=${slug}&populate[Sections][populate]=*`
    )
    const pageContent = (await res1.json()) as IMenu
    const menu = (await res.json()) as IMenu

    return {
        props: {
            menu: menu.data.attributes.PageLink,
            pageContent: pageContent.data[0].attributes,
        },
        revalidate: 10,
    }
}

export default Home
