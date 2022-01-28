import Image from "next/image"
import { usePageContent } from "../../hooks/usePageContent"

const SectionHeroBackground = () => {
    return (
        <div className="w-full h-full flex-auto absolute left-0 top-0 z-0">
            <span
                className="w-full h-full absolute  z-20 bg-black opacity-70"
                style={{ left: 0, right: 0, top: 0, bottom: 0 }}
            ></span>
            <div className="relative h-full w-full overflow-hidden flex-auto flex flex-col bg-black">
                <Image
                    src={
                        "http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Flarge_background_17a38b66b1.jpeg&w=3840&q=75"
                    }
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    )
}
SectionHeroBackground.dataHooks = [usePageContent]
export default SectionHeroBackground
