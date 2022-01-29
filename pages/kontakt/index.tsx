import Image from "next/image"
import { GetStaticProps } from "next"
import {
    getMenu,
    getCategoriesMenu,
    getSpecificPage,
    getSettings,
} from "../../api/"
import Container from "../../app/components/Container/Container"
import ContactForm from "../../app/components/ContactForm/ContactForm"
import { IServerData } from "../../models"

/////////////////////////////////////////////
/////////        COMPONENT        ///////////
/////////////////////////////////////////////
const Offer: React.FC<IServerData> = ({ pageContent }) => {
    const background =
        pageContent?.thumbnail?.data?.attributes?.formats?.large?.url

    return (
        <Container className="pt-lg flex flex-col justify-center relative">
            <span
                className="w-full h-full absolute  z-10 bg-black opacity-70"
                style={{ left: 0, right: 0, top: 0, bottom: 0 }}
            ></span>
            {background && (
                <Image
                    src={`http://localhost:1337${background}`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            )}
            <section className="relative z-20">
                <ContactForm />
            </section>
        </Container>
    )
}
export default Offer
/////////////////////////////////////////////
/////////    GET STATIC PROPS     ///////////
/////////////////////////////////////////////
export const getStaticProps: GetStaticProps = async (context) => {
    const pageContent = await getSpecificPage("kontakt")
    const menu = await getMenu()
    const categories = await getCategoriesMenu()
    const themeSettings = await getSettings()
    return {
        props: {
            pageContent,
            menu,
            categories,
            themeSettings,
        },
        revalidate: 10,
    }
}
