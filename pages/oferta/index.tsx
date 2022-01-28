import { GetStaticProps } from "next"
import { getDataHooksProps } from "next-data-hooks"
import Header from "../../app/components/Header/Header"
import Footer from "../../app/components/Footer/Footer"
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
    const data = await getDataHooksProps({
        context,
        dataHooks: [
            ...Header.dataHooks,
            ...Footer.dataHooks,
            ...SectionFullBackground.dataHooks,
        ],
    })
    return {
        props: {
            ...data,
        },
        revalidate: 10,
    }
}
