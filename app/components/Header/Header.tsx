import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import usePageMenu from "../../hooks/usePageMenu"
import Container from "../Container/Container"
import Row from "../Row/Row"

const Header = () => {
    const { menu, categories } = usePageMenu()
    const { asPath: path } = useRouter()
    const [activePage, setActivePath] = useState<string>("")

    useEffect(() => {
        setActivePath(path)
    }, [menu])
    return (
        <header
            className="bg-black px-60  h-header fixed  w-full z-50"
            style={{ top: 0, left: 0, right: 0 }}
        >
            <Container>
                <Row className="justify-between items-center h-full">
                    <div className="logo">
                        <Link href="/">
                            <a className="text-white">LOGO</a>
                        </Link>
                    </div>
                    <nav className="h-full">
                        <ul className="flex items-center h-full mp__menu font-raleway tracking-widest">
                            {menu?.map((v: any) => {
                                const href = `/${v?.page?.data?.attributes?.pageId}`
                                const regex = new RegExp(href, "g")

                                const isActive =
                                    regex.test(activePage) && activePage !== "/"
                                const activeClass = isActive ? " active" : ""
                                console.log(activePage)

                                return (
                                    <li
                                        key={v.id}
                                        style={{ padding: "0 10px" }}
                                        className={`text-neutral-200 flex items-center h-full${activeClass}`}
                                    >
                                        <Link href={href}>
                                            <a className="py-8  h-full flex items-center">
                                                <span>{v?.Label}</span>
                                            </a>
                                        </Link>
                                        {v.page?.data?.id === 5 && (
                                            <ul
                                                className="absolute bg-black bg-opacity-100 pt-sm pl-sm pr-sm pb-md grid grid-cols-3 gap-4 rounded-b"
                                                style={{
                                                    right: 0,
                                                    top: "100%",
                                                    gap: "20px",
                                                }}
                                            >
                                                {categories?.map((v: any) => {
                                                    const href = `/portfolio/${v.slug}`
                                                    const isActive =
                                                        href === activePage &&
                                                        activePage !== "/"
                                                    const activeClass = isActive
                                                        ? " active"
                                                        : ""
                                                    return (
                                                        <li
                                                            key={v.slug}
                                                            className={
                                                                activeClass
                                                            }
                                                        >
                                                            <Link
                                                                href={`/portfolio/${v.slug}`}
                                                            >
                                                                <a>
                                                                    <div className="flex items-center border-b border-neutral-500">
                                                                        <figure className="relative w-lg  mr-sm aspect-alternative">
                                                                            <Image
                                                                                src={`http://localhost:1337${v.thumbnail?.small?.url}`}
                                                                                layout="fill"
                                                                                objectFit="cover"
                                                                                className="rounded-t"
                                                                                loading="eager"
                                                                            />
                                                                        </figure>

                                                                        <span className="text-sm block">
                                                                            {
                                                                                v.name
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </Row>
            </Container>
        </header>
    )
}
Header.dataHooks = [usePageMenu]
export default Header
