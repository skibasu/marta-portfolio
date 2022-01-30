import { IServerData } from "../../models"
import { ESectionsNames } from "../../models"
import SectionHero from "./SectionHero/SectionHero"
import SectionHead from "./SectionHead/SectionHead"

const PageSections: React.FC<IServerData> = ({ data }) => {
    const { slug, section } = data
    const { __component: name } = section

    if (name === ESectionsNames.PAGE_EDITOR && slug !== "portfolio") {
        return <SectionHero data={section} />
    }
    if (name === ESectionsNames.SEO) {
        return <SectionHead data={section} />
    } else {
        return <>Empty</>
    }
}

export default PageSections
