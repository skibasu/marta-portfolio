import { GetStaticProps } from "next"
import SinglePage from "../app/templates/SinglePage"
import { IServerData } from "../models"
import { getAllPagesSlug, getDataForPages } from "../api"

const Page: React.FC<IServerData> = ({ pageContent }) => {
    return <SinglePage data={pageContent} />
}

export const getStaticPaths = async () => {
    const paths = await getAllPagesSlug()

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { slug } = context.params!
    const { menu, categoriesMenu, themeSettings, pageContent } =
        await getDataForPages(slug as string)

    return {
        props: {
            menu,
            categoriesMenu,
            themeSettings,
            pageContent,
        },
        revalidate: 10,
    }
}

export default Page
