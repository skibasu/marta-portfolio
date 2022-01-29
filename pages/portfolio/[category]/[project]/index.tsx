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
            <h1>PROJECT</h1>
        </div>
    )
}
/////////////////////////////////////////////
/////////     GET SERVER SIDE     ///////////
/////////////////////////////////////////////
export const getServerSideProps: GetServerSideProps = async (context) => {
    const { project, category } = context.params!
    const projectContent = await getSinglePortfolio(
        category as string,
        project as string
    )
    if (!projectContent) {
        return {
            notFound: true,
        }
    }
    const menu = await getMenu()
    const categories = await getCategoriesMenu()
    const themeSettings = await getSettings()

    return {
        props: {
            project: projectContent,
            menu,
            categories,
            themeSettings,
        },
    }
}

export default Project
