import { IServerData } from "../../models"
import SectionDefaultBackground from "../sections/SectionDefaultBackground/SectionDefaultBackground"
import SectionPortfolioMenu from "../sections/SectionPortfolioMenu/SectionPortfolioMenu"
import PageSections from "../sections/PageSections"

const PortfolioMenuPage: React.FC<IServerData> = ({ data }) => {
    const { pageContent, categoriesMenu, categories } = data
    const {
        thumbnail: picture,
        title,
        Sections: sections,
        pageId: slug,
    } = pageContent

    return (
        <>
            <SectionDefaultBackground
                data={{ picture, title, showTitle: false }}
            />
            <SectionPortfolioMenu
                data={{ pageContent, categoriesMenu, categories }}
            />
            {sections &&
                sections.length > 0 &&
                sections.map((v: IServerData) => (
                    <PageSections
                        key={v.id + v.__component}
                        data={{ section: v, slug }}
                    />
                ))}
        </>
    )
}
export default PortfolioMenuPage
