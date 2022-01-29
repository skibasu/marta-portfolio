import { GetStaticProps } from "next"
import {
    getMenu,
    getCategoriesMenu,
    getSettings,
    getSpecificPage,
} from "../../api/"
import PageSections from "../../app/components/PageSections/PageSections"
import { IServerData } from "../../models"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Offer: React.FC<IServerData> = ({ data }) => {
    return <PageSections />
}
export default Offer
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async (context) => {
    const menu = await getMenu()
    const categories = await getCategoriesMenu()
    const themeSettings = await getSettings()
    const pageContent = await getSpecificPage("cennik")

    return {
        props: {
            menu,
            categories,
            themeSettings,
            pageContent,
        },
        revalidate: 10,
    }
}
