import Link from "next/link"
import React from "react"
interface IHeaderProps {
    menu: any
}
const Header: React.FC<IHeaderProps> = ({ menu }) => {
    return (
        <header>
            <div className="logo">
                <Link href="/">LOGO</Link>
            </div>
            <nav>
                <ul style={{ display: "flex" }}>
                    {menu.map((v: any, k: number) => {
                        return (
                            <li key={k} style={{ padding: "0 10px" }}>
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
        </header>
    )
}

export default Header
