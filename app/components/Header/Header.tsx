import Link from "next/link"
import React from "react"
import Container from "../Container/Container"
import Row from "../Row/Row"

interface IHeaderProps {
    menu: any
}
const Header: React.FC<IHeaderProps> = ({ menu }) => {
    return (
        <header
            className="bg-black px-60 shadow-xl h-header fixed  w-full z-50"
            style={{ top: 0, left: 0, right: 0 }}
        >
            <Container>
                <Row className="justify-between items-center h-full">
                    <div className="logo">
                        <Link href="/">
                            <a className="text-white">LOGO</a>
                        </Link>
                    </div>
                    <nav>
                        <ul style={{ display: "flex" }}>
                            {menu.map((v: any) => {
                                return (
                                    <li
                                        key={v.page.data.id}
                                        style={{ padding: "0 10px" }}
                                        className="text-neutral-200"
                                    >
                                        <Link
                                            href={`/${v.page.data.attributes.pageId}`}
                                        >
                                            <a>{v.Label}</a>
                                        </Link>
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

export default Header
