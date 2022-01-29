import { useEffect } from "react"
import type { AppProps } from "next/app"
import ContextWrapper from "../app/components/ContextWrapper/ContextWrapper"
import Layout from "../app/Layout/Layout"
import "../styles/globals.css"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const { children, ...rest } = pageProps
    useEffect(() => console.log("App effect"), [pageProps])
    return (
        <ContextWrapper
            menu={pageProps.menu}
            categories={pageProps.categoriesMenu}
            themeSettings={pageProps.themeSettings}
            pageContent={pageProps.pageContent}
            categoriesMenu={pageProps.categoriesMenu}
        >
            <Layout>
                <Component {...rest}>{children}</Component>
            </Layout>
        </ContextWrapper>
    )
}

export default App
