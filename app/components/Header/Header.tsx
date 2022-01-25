import Link from "next/link"
import React from "react"
import styled from "styled-components"
import Container from "../Container/Container"
import Row from "../Row/Row"

interface IHeaderProps {
    menu: any
}
const Header: React.FC<IHeaderProps> = ({ menu }) => {
    return (
        <StyledHeader className="bg-black px-60 shadow-xl">
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
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    height: 82px;
`
export default Header
