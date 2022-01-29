import Head from "next/head"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
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
                <Header />
                <main className="bg-black font-nunito flex flex-col flex-auto pt-header pb-footer min-h-screen text-white">
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
export default Layout
