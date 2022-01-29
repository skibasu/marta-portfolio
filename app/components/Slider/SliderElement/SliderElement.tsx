import Image from "../../ImageFadIn/ImageFadeIn"
interface ISrc {
    src: string
}

const Slides: React.FC<ISrc> = ({ src }) => {
    return <Image src={src} layout="fill" quality={100} />
}
export default Slides
