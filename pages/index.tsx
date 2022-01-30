import { GetStaticProps } from "next"
import { getDataForPages } from "../api"
import SinglePage from "../app/templates/SinglePage"
import { IServerData } from "../models"

const HomePage: React.FC<IServerData> = ({ pageContent }) => {
    return <SinglePage data={pageContent} />
}
export default HomePage

export const getStaticProps: GetStaticProps = async () => {
    const { menu, categoriesMenu, themeSettings, pageContent } =
        await getDataForPages("home")

    return {
        props: {
            menu,
            categoriesMenu,
            themeSettings,
            pageContent,
        },
        revalidate: 1000,
    }
}
