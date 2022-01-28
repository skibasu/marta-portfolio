import { getDataHooksProps } from "next-data-hooks"
import Image from "next/image"
import { GetStaticProps } from "next"
import { getCategoriesMenu, getSpecificPage } from "../../api"
import Container from "../../app/components/Container/Container"
import Header from "../../app/components/Header/Header"
import Footer from "../../app/components/Footer/Footer"
import PortfolioMenu from "../../app/components/PortfolioMenu/PortfolioMenu"
import { IServerData } from "../../models"
/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Portfolio: React.FC<IServerData> = ({ categoriesMenu, pageContent }) => {
    const background =
        pageContent?.thumbnail?.data?.attributes?.formats?.large?.url
    const src = `http://localhost:1337${background}`

    return (
        <Container className="pt-lg flex flex-col justify-center relative">
            <span
                className="w-full h-full absolute  z-10 bg-black opacity-80"
                style={{ left: 0, right: 0, top: 0, bottom: 0 }}
            ></span>
            {background && (
                <Image
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            )}

            <PortfolioMenu menu={categoriesMenu} title={pageContent.Title} />
        </Container>
    )
}
export default Portfolio
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async (context) => {
    const categoriesMenu = await getCategoriesMenu()
    const pageContent = await getSpecificPage("portfolio")

    const data = await getDataHooksProps({
        context,
        dataHooks: [...Header.dataHooks, ...Footer.dataHooks],
    })
    return {
        props: {
            ...data,
            categoriesMenu,
            pageContent,
        },
        revalidate: 1000,
    }
}
