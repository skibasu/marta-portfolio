import Image from "next/image"
interface ISrc {
    src: string
}

const Slides: React.FC<ISrc> = ({ src }) => {
    return <Image src={src} layout="fill" objectFit="cover" />
}
export default Slides
