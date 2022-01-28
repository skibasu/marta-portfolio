import { GetServerSideProps } from "next"
import { getDataHooksProps } from "next-data-hooks"
import { getSinglePortfolio } from "../../../../api"
import Header from "../../../../app/components/Header/Header"
import Footer from "../../../../app/components/Footer/Footer"
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
    //-------- TODO --------//
    console.log(context.params)
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
    const data = await getDataHooksProps({
        context,
        dataHooks: [...Header.dataHooks, ...Footer.dataHooks],
    })

    return {
        props: {
            project: projectContent,
            ...data,
        },
    }
}

export default Project
