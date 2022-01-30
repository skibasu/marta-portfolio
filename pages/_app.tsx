import type { AppProps } from "next/app"
import ContextStore from "../app/contextStore/ContextStore"
import Layout from "../app/layout/Layout"
import "../styles/globals.css"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    const { children, ...rest } = pageProps
    return (
        <ContextStore>
            <Layout>
                <Component {...rest}>{children}</Component>
            </Layout>
        </ContextStore>
    )
}

export default App
