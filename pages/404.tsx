import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { IServerData } from "../models"
import { getDataHooksProps } from "next-data-hooks"
import Container from "../app/components/Container/Container"
import Header from "../app/components/Header/Header"
import Footer from "../app/components/Footer/Footer"

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
export const getStaticProps: GetStaticProps<IServerData, Params> = async (
    context
) => {
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

export default ErrorPage
