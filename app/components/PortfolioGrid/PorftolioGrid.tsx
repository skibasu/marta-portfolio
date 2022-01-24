import Link from "next/link"
import Image from "next/image"

interface IPortfolioGridProps {
    [key: string]: any
}
const Header: React.FC<IPortfolioGridProps> = ({ zone, category }) => {
    const srcs = [
        "https://i.ytimg.com/vi/IUN664s7N-c/maxresdefault.jpg",
        "https://pbs.twimg.com/media/E9YJOcmWQAczMrY.jpg",
    ]
    return (
        <div>
            <div style={{ display: "flex" }}>
                {zone.map((v: any, k: number) => {
                    const src = `http://localhost:1337${v.Pictures.data[0].attributes.formats.medium.url}`
                    const slug = v.Title.replace(/\s/g, "-")
                    return (
                        <figure key={k} style={{ margin: "0 4px" }}>
                            {" "}
                            <Link href={`/portfolio/${category}/${slug}`}>
                                <a
                                    style={{
                                        width: 500,
                                        height: 340,
                                        objectFit: "cover",
                                        position: "relative",
                                        display: "block",
                                    }}
                                >
                                    <Image src={src} layout="fill" />
                                </a>
                            </Link>
                        </figure>
                    )
                })}
            </div>
        </div>
    )
}

export default Header
