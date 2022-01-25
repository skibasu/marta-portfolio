import Image from "next/image"
interface ISrc {
    src: string
}

const SectionHero: React.FC<ISrc> = ({ src }) => {
    return (
        <div className="keen-slider__slide">
            <Image src={src} layout="fill" objectFit="cover" />
        </div>
    )
}
export default SectionHero
