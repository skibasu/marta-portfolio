import { IServerData } from "../../../models"
import Head from "next/head"
const SectionHead: React.FC<IServerData> = ({ data }) => {
    const { SeoTitle: seoTitle, SeoDescription: seoDescription } = data

    return (
        <Head>
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription}></meta>
        </Head>
    )
}

export default SectionHead
