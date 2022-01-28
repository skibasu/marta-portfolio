import type { AppProps } from "next/app"
import { NextDataHooksProvider } from "next-data-hooks"
import Layout from "../app/Layout/Layout"
import "../styles/globals.css"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    //  const { menu } = pageProps
    //  const { themeSettings } = pageProps
    //  console.log(pageProps)
    const { children, ...rest } = pageProps
    return (
        <NextDataHooksProvider {...rest}>
            <Layout>
                <Component {...rest}>{children}</Component>
            </Layout>
        </NextDataHooksProvider>
    )
}

export default App
