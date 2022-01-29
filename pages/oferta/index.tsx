import { GetStaticProps } from "next"
import {
    getMenu,
    getCategoriesMenu,
    getSettings,
    getSpecificPage,
} from "../../api/"
import SectionFullBackground from "../../app/components/SectionFullBackground/SectionFullBackground"

/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Offer: React.FC = () => {
    return <SectionFullBackground />
}
export default Offer
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async (context) => {
    const menu = await getMenu()
    const categories = await getCategoriesMenu()
    const themeSettings = await getSettings()
    const pageContent = await getSpecificPage("oferta")

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
