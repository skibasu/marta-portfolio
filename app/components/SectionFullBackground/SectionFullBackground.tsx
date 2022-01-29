import Image from "next/image"
import Container from "../Container/Container"

const SectionHeroFullBackground: React.FC = () => {
    const thumbnail = null
    // const src = `http://localhost:1337${thumbnail?.data?.attributes?.formats?.large?.url}`
    const title = "TITLE"

    return (
        <section className="relative h-full w-full overflow-hidden flex-auto flex flex-col bg-black">
            <span
                className="w-full h-full absolute  z-10 bg-black opacity-70"
                style={{ left: 0, right: 0, top: 0, bottom: 0 }}
            ></span>
            {/* <Image src={src} layout="fill" objectFit="cover" /> */}
            <Container className="pt-lg flex flex-col justify-center flex-auto relative z-20">
                <h1 className="text-center font-semibold text-h1 mb-xl font-nunito tracking-widest">
                    {title}
                </h1>
            </Container>
        </section>
    )
}

export default SectionHeroFullBackground
