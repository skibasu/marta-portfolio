import { GetStaticProps } from "next"
import { IServerData } from "../models"
import SectionHero from "../app/components/SectionHero/SectionHero"
import PageSections from "../app/components/PageSections/PageSections"
import {
    getSpecificPage,
    getCategoriesMenu,
    getMenu,
    getSettings,
} from "../api"

/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Home: React.FC<IServerData> = ({ content }) => {
    //  return <SectionHero data={content} />
    return <PageSections />
}
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async (context) => {
    const pageContent = await getSpecificPage("home")
    const menu = await getMenu()
    const categories = await getCategoriesMenu()
    const themeSettings = await getSettings()
    return {
        props: {
            pageContent,
            menu,
            categories,
            themeSettings,
        },
        revalidate: 100000,
    }
}

export default Home
