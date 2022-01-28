import { GetStaticProps } from "next"
import { getDataHooksProps } from "next-data-hooks"
import Header from "../../app/components/Header/Header"
import Footer from "../../app/components/Footer/Footer"
import { IServerData } from "../../models"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Offer: React.FC<IServerData> = ({ data }) => {
    return (
        <div>
            <h1>Kontakt</h1>
        </div>
    )
}
export default Offer
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async (context) => {
    const data = await getDataHooksProps({
        context,
        dataHooks: [...Header.dataHooks, ...Footer.dataHooks],
    })
    return {
        props: {
            ...data,
        },
        revalidate: 10,
    }
}
