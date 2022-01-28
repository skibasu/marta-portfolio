import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { IServerData } from "../models"
import { getDataHooksProps } from "next-data-hooks"
import Header from "../app/components/Header/Header"
import Footer from "../app/components/Footer/Footer"
import SectionHero from "../app/components/SectionHero/SectionHero"

interface Params extends ParsedUrlQuery {
    pid: string
}
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Home: React.FC<IServerData> = () => {
    return <SectionHero />
}
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps<IServerData, Params> = async (
    context
) => {
    const data = await getDataHooksProps({
        context,
        dataHooks: [
            ...Header.dataHooks,
            ...Footer.dataHooks,
            ...SectionHero.dataHooks,
        ],
    })

    return {
        props: {
            ...data,
        },
        revalidate: 100000,
    }
}

export default Home
