import { getDataHooksProps } from "next-data-hooks"
import { GetStaticProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { getPortfolios, getCategories } from "../../../api"
import Container from "../../../app/components/Container/Container"
import Header from "../../../app/components/Header/Header"
import Footer from "../../../app/components/Footer/Footer"
import PortfolioGrid from "../../../app/components/PortfolioGrid/PorftolioGrid"
import { IServerData } from "../../../models"

interface Params extends ParsedUrlQuery {
    category: string
}
interface Props extends ParsedUrlQuery {
    [key: string]: any
}
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Category: React.FC<IServerData> = ({
    content: { slug, Name: name },
    zone,
}) => {
    return (
        <Container className="pt-lg flex flex-col justify-center bg-black">
            <h1 className="font-raleway text-center font-semibold text-h1 mb-xl">
                {name}
            </h1>
            <PortfolioGrid zone={zone} category={slug} />
        </Container>
    )
}
export default Category
/////////////////////////////////////////////
/////////    GET STATIC PATHS     ///////////
/////////////////////////////////////////////
export const getStaticPaths = async () => {
    const category = await getCategories()

    return {
        paths: category,
        fallback: false,
    }
}
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps<Props, Params> = async (
    context
) => {
    const { category } = context.params!
    const { content, zone } = await getPortfolios(category)
    const data = await getDataHooksProps({
        context,
        dataHooks: [...Header.dataHooks, ...Footer.dataHooks],
    })
    return {
        props: {
            content,
            zone,
            ...data,
        },
        revalidate: 1000,
    }
}
