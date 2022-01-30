import { GetStaticProps } from "next"
import { getDataForPages } from "../api"
import Container from "../app/components/Container/Container"

const ErrorPage: React.FC = () => {
    return (
        <section className="relative h-full w-full overflow-hidden flex-auto flex flex-col">
            <Container className="pt-lg flex flex-col justify-center flex-auto relative z-10">
                <h1 className="text-center  text-base mb-xl font-cinzel text-neutral-200 tracking-widest">
                    404 - Page Not Found
                </h1>
            </Container>
        </section>
    )
}
export default ErrorPage

export const getStaticProps: GetStaticProps = async (context) => {
    const { menu, categoriesMenu, themeSettings, pageContent } =
        await getDataForPages("home")
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
