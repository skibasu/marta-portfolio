import Link from "next/link"
import Image from "next/image"
import Row from "../Row/Row"

interface IPortfolioGridProps {
    [key: string]: any
}
const PortfolioMenu: React.FC<IPortfolioGridProps> = ({ menu }) => {
    return (
        <div className="-mx-md">
            <Row>
                {menu.map((v: any, k: number) => {
                    const src = v.thumbnail?.medium?.url
                        ? `http://localhost:1337${v.thumbnail.medium.url}`
                        : "http://localhost:1337/sample.jpg"
                    const slug = v.slug

                    return (
                        <div key={slug} className="basis-3/12 flex-none mb-lg">
                            <figure className="px-md">
                                <Link href={`/portfolio/${slug}`}>
                                    <a
                                        style={{
                                            display: "block",
                                        }}
                                    >
                                        <div
                                            className="aspect-alternative"
                                            style={{
                                                position: "relative",
                                            }}
                                        >
                                            <Image src={src} layout="fill" />
                                        </div>
                                        <h2 className="text-medium py-8">
                                            {v.name}
                                        </h2>
                                    </a>
                                </Link>
                            </figure>
                        </div>
                    )
                })}
            </Row>
        </div>
    )
}

export default PortfolioMenu
