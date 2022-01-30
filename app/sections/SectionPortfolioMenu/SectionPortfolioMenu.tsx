import Link from "next/link"
import Image from "../../components/ImageFadIn/ImageFadeIn"
import Container from "../../components/Container/Container"
import Row from "../../components/Row/Row"
import { IServerData } from "../../../models"

const SectionPortfolioMenu: React.FC<IServerData> = ({ data }) => {
    const { categoriesMenu: menu, pageContent } = data

    return (
        <section className="-mx-md relative z-20 h-full flex-auto flex flex-col justify-center">
            <Container className="pt-lg flex flex-col justify-center relative">
                <h1 className="text-center font-semibold text-h1 mb-xl font-nunito tracking-widest">
                    {pageContent.Title} Portfolio
                </h1>
                <Row>
                    {menu.map((v: any, k: number) => {
                        const src = v?.thumbnail?.medium?.url
                            ? `http://localhost:1337${v.thumbnail.medium.url}`
                            : "http://localhost:1337/sample.jpg"
                        const slug = v.slug

                        return (
                            <div
                                key={slug}
                                className="basis-3/12 flex-none mb-lg mp__portfolio-link-wrapper"
                            >
                                <figure className="px-md h-full">
                                    <Link href={`/portfolio/${slug}`}>
                                        <a className="h-full flex flex-col shadow-2xl rounded-md overflow-hidden  mp__portfolio-link">
                                            <div className="aspect-alternative flex items-end relative">
                                                <Image
                                                    src={src}
                                                    layout="fill"
                                                />
                                                <span
                                                    className="absolute w-full bg-neutral-500 h-[1px] z-10"
                                                    style={{
                                                        bottom: "-1px",
                                                        left: 0,
                                                    }}
                                                ></span>
                                            </div>
                                            <div className="w-full bg-black bg-opacity-70 text-neutral-200 px-xs relative z-10 flex-auto flex items-center">
                                                <h2 className="text-base py-8 font-light">
                                                    {v.name}
                                                </h2>
                                            </div>
                                        </a>
                                    </Link>
                                </figure>
                            </div>
                        )
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default SectionPortfolioMenu
