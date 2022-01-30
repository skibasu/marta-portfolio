import Image from "../../components/ImageFadIn/ImageFadeIn"
import Container from "../../components/Container/Container"
import { IServerData } from "../../../models"

const FullBackground: React.FC<IServerData> = ({ data }) => {
    const { picture, title, showTitle } = data
    const background = picture?.data?.attributes?.formats?.large?.url

    return (
        <>
            <span
                className="w-full h-full absolute  z-10 bg-black opacity-70"
                style={{ left: 0, right: 0, top: 0, bottom: 0 }}
            ></span>
            {background && (
                <Image
                    src={`http://localhost:1337${background}`}
                    layout="fill"
                    quality={100}
                />
            )}
            {showTitle && (
                <Container className="relative z-20 flex flex-col justify-center">
                    <h1 className="text-center text-h1 font-ninito text-neutral-200 tracking-widest">
                        {title}
                    </h1>
                </Container>
            )}
        </>
    )
}

export default FullBackground
