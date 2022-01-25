import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { IServerData } from "../models"
import { getMenu, getSpecificPage, getSettings } from "../api"
import Header from "../app/components/Header/Header"
import Footer from "../app/components/Footer/Footer"
import Layout from "../app/Layout/Layout"
import SectionHero from "../app/components/SectionHero/SectionHero"

interface Params extends ParsedUrlQuery {
    pid: string
}
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Home: React.FC<IServerData> = (props) => {
    const { menu, pageContent, themeSettings } = props
    const { copyrights, socialMedia } = themeSettings
    const homePageContent = {
        title: pageContent.Sections[0].Title,
        subtitle: pageContent.Sections[0].SubTitle,
        pictures: pageContent.Sections[0].Picture.data,
    }
    return (
        <Layout>
            <Header menu={menu} />
            <SectionHero content={homePageContent} />
            <Footer copyrights={copyrights} socialMedia={socialMedia} />
        </Layout>
    )
}
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps<any, Params> = async (context) => {
    const slug = "home"
    const pageContent = await getSpecificPage(slug)
    const menu = await getMenu()
    const themeSettings = await getSettings()

    return {
        props: {
            menu,
            pageContent,
            themeSettings,
        },
        revalidate: 10,
    }
}

export default Home
