import { IServerData, ESectionsNames } from "../../models"
import PageSections from "../sections/PageSections"
import SectionDefaultBackground from "../sections/SectionDefaultBackground/SectionDefaultBackground"

const SinglePage: React.FC<IServerData> = ({ data }) => {
    const {
        Sections: sections,
        thumbnail: picture,
        Title: title,
        pageId: slug,
    } = data

    const isDefaultBackground = !sections.filter(
        (v: IServerData) => v.__component === ESectionsNames.PAGE_EDITOR
    ).length
    const isPortfolioPages = slug === "portfolio"

    return (
        <>
            {isDefaultBackground && !isPortfolioPages && (
                <SectionDefaultBackground
                    data={{ picture, title, showTitle: true }}
                />
            )}
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
export default SinglePage
