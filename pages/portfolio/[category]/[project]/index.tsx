import { GetServerSideProps } from "next"
import {
    getMenu,
    getCategoriesMenu,
    getSinglePortfolio,
    getSettings,
} from "../../../../api/"
import { IServerData } from "../../../../models"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Project: React.FC<IServerData> = ({ project }) => {
    const { Title: title } = project
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}
/////////////////////////////////////////////
/////////     GET SERVER SIDE     ///////////
/////////////////////////////////////////////
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { project, category } = context.params!

    const menu = await getMenu()
    const categoriesMenu = await getCategoriesMenu()
    const themeSettings = await getSettings()
    const projectContent = await getSinglePortfolio(
        category as string,
        project as string
    )
    if (!projectContent) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            project: projectContent,
            menu,
            categoriesMenu,
            themeSettings,
        },
    }
}

export default Project
