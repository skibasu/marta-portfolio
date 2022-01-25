import Container from "../Container/Container"
import Slider from "../Slider/Slider"
import { IServerData } from "../../../models"

const SectionHero: React.FC<IServerData> = ({ children, content }) => {
    const { subtitle, title, pictures } = content
    const slides = pictures.map((v: any) => ({
        id: v.id,
        src: `http://localhost:1337${v.attributes.formats.large.url}`,
    }))

    return (
        <section className="relative h-full w-full overflow-hidden flex-auto flex flex-col">
            <Slider slides={slides} />
            <Container className="pt-lg flex flex-col justify-center flex-auto relative z-10">
                <h1 className="font-raleway text-center font-semibold text-h1 mb-xl">
                    <span>{title}</span> <br />
                    <span>{subtitle}</span>
                </h1>
            </Container>
        </section>
    )
}
export default SectionHero
