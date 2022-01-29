import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { getMenu, getCategoriesMenu, getSettings } from "../api/"
import Container from "../app/components/Container/Container"
import { IServerData } from "../models"

interface Params extends ParsedUrlQuery {
    pid: string
}
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const ErrorPage: React.FC = () => {
    return (
        <section className="relative h-full w-full overflow-hidden flex-auto flex flex-col bg-black">
            <Container className="pt-lg flex flex-col justify-center flex-auto relative z-10">
                <h1 className="text-center  text-base mb-xl font-cinzel text-neutral-200 tracking-widest">
                    404 - Page Not Found
                </h1>
            </Container>
        </section>
    )
}
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async (context) => {
    const menu = await getMenu()
    const categories = await getCategoriesMenu()
    const themeSettings = await getSettings()

    return {
        props: {
            menu,
            categories,
            themeSettings,
        },
        revalidate: 10,
    }
}

export default ErrorPage
