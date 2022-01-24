import Layout from "../../app/Layout/Layout"
import Header from "../../app/components/Header/Header"
import { getMenu } from "../../api"
import { GetStaticProps } from "next"
import { IServerData } from "../../models"
import styles from "../../styles/Home.module.css"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Offer: React.FC<IServerData> = ({ menu }) => {
    return (
        <Layout>
            <Header menu={menu} />
            <div className={styles.container}>
                <h1 className={styles.title}>Cennik</h1>
            </div>
        </Layout>
    )
}
export default Offer
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async () => {
    const menu = await getMenu()
    return {
        props: {
            menu,
        },
        revalidate: 10,
    }
}
