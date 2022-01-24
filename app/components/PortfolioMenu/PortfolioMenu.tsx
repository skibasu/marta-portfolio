import Link from "next/link"
import Image from "next/image"

interface IPortfolioGridProps {
    [key: string]: any
}
const PortfolioMenu: React.FC<IPortfolioGridProps> = ({ menu }) => {
    return (
        <div>
            <div style={{ display: "flex" }}>
                {menu.map((v: any, k: number) => {
                    const src = `http://localhost:1337${v.thumbnail.medium.url}`
                    const slug = v.slug

                    return (
                        <div key={slug}>
                            <h2
                                className="text-sky-400"
                                style={{ margin: "0 12px", padding: "12px 0" }}
                            >
                                {v.name}
                            </h2>
                            <figure style={{ margin: "0 12px" }}>
                                <Link href={`/portfolio/${slug}`}>
                                    <a
                                        style={{
                                            width: 640,
                                            height: 420,
                                            objectFit: "cover",
                                            position: "relative",
                                            display: "block",
                                        }}
                                    >
                                        <Image src={src} layout="fill" />
                                    </a>
                                </Link>
                            </figure>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PortfolioMenu
