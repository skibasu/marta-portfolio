import { IServerData, ESectionsNames } from "../../models"
import PageSections from "../sections/PageSections"
import SectionDefaultBackground from "../sections/SectionDefaultBackground/SectionDefaultBackground"

const SinglePage: React.FC<IServerData> = ({ data }) => {
    const isDefaultBackground = !data?.Sections.filter(
        (v: IServerData) => v.__component === ESectionsNames.PAGE_EDITOR
    ).length
    const isPortfolioPages = data?.pageId === "portfolio"

    return (
        <>
            {isDefaultBackground && !isPortfolioPages && data?.thumbnail && (
                <SectionDefaultBackground
                    data={{
                        picture: data?.thumbnail,
                        title: data?.Title,
                        showTitle: true,
                    }}
                />
            )}
            {data?.Sections &&
                data?.Sections.length > 0 &&
                data?.Sections.map((v: IServerData) => (
                    <PageSections
                        key={v.id + v.__component}
                        data={{ section: v, slug: data?.pageid }}
                    />
                ))}
        </>
    )
}
export default SinglePage
