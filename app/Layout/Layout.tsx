import Head from "next/head"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { IServerData } from "../../models"

const Layout: React.FC<IServerData> = ({ children, data }) => {
    const { menu, categoriesMenu, themeSettings } = data
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Head>
            <div
                id="page"
                className="min-h-screen w-full overflow-hidden flex flex-col"
            >
                <Header data={{ menu, categoriesMenu }} />
                <main className="bg-black font-nunito flex flex-col flex-auto pt-header pb-footer min-h-screen text-white relative">
                    {children}
                </main>
                <Footer data={themeSettings} />
            </div>
        </>
    )
}
export default Layout
