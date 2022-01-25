import Link from "next/link"
import Image from "next/image"
import { IServerData } from "../../../models"

const PortfolioElem: React.FC<IServerData> = ({ element, category }) => {
    const src = `http://localhost:1337${element.Pictures.data[0].attributes.formats.medium.url}`
    const ratio = element.ratioimg
    return (
        <figure className="p-8">
            <Link href={`/portfolio/${category}/${element.id}`}>
                <a
                    className={`aspect-${ratio}`}
                    style={{
                        height: 370,
                        position: "relative",
                        display: "block",
                    }}
                >
                    <Image src={src} layout="fill" objectFit="cover" />
                </a>
            </Link>
        </figure>
    )
}

export default PortfolioElem
