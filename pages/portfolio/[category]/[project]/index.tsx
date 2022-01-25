import { getSinglePortfolio, getMenu } from "../../../../api"
import Header from "../../../../app/components/Header/Header"
import Layout from "../../../../app/Layout/Layout"
import { GetServerSideProps } from "next"
import { IServerData } from "../../../../models"
import styles from "../../../../styles/Home.module.css"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Project: React.FC<IServerData> = ({ project, menu }) => {
    const { Title: title } = project
    return (
        <Layout>
            <Header menu={menu} />
            <div className={styles.container}>
                <h1 className={styles.title}>{title}</h1>
            </div>
        </Layout>
    )
}
/////////////////////////////////////////////
/////////     GET SERVER SIDE     ///////////
/////////////////////////////////////////////
export const getServerSideProps: GetServerSideProps = async (context) => {
    //-------- TODO --------//
    const { project, category } = context.params!
    const projectContent = await getSinglePortfolio(
        category as string,
        project as string
    )
    const menu = await getMenu()
    return {
        props: {
            project: projectContent,
            menu,
        },
    }
}

export default Project
