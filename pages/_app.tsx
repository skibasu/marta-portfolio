import type { AppProps } from "next/app"
import Layout from "../app/layout/Layout"
import "../styles/globals.css"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const { menu, categoriesMenu, themeSettings } = pageProps
    const { children, ...rest } = pageProps
    return (
        <Layout data={{ menu, categoriesMenu, themeSettings }}>
            <Component {...rest}>{children}</Component>
        </Layout>
    )
}

export default App
