import { useContext } from "react"
import Container from "../Container/Container"
import Slider from "../Slider/Slider"
import { IServerData } from "../../../models"

const SectionHero: React.FC<IServerData> = () => {
    //  const { pageContent } = useContext(AppContext)
    //  console.log(pageContent)
    //  const componentData = sections?.filter(
    //      (v: IServerData) => v.__component === "sections.page-editor"
    //  )

    //  const { Sections: sections } = pageContent
    //  const {
    //      Title: title,
    //      SubTitle: subtitle,
    //      Picture: { data: pictures },
    //  } = sections[0]
    //  const slides = pictures.map((v: any) => ({
    //      id: v.id,
    //      src: `http://localhost:1337${v.attributes.formats.large.url}`,
    //  }))
    return (
        <section className="relative h-full w-full overflow-hidden flex-auto flex flex-col bg-black">
            {/* <Slider slides={slides} />
            <Container className="pt-lg flex flex-col justify-center flex-auto relative z-10">
                <h1 className="text-center  text-base mb-xl font-cinzel text-neutral-200 tracking-widest">
                    <p className="mb-lg font-thin">{title}</p>
                    <p className="text-9xl">{subtitle}</p>
                </h1>
            </Container> */}
        </section>
    )
}

export default SectionHero
