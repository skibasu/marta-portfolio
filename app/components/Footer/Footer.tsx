import { useContext } from "react"
import { AppContext } from "../../contexts/header"
import Image from "next/image"
import Container from "../Container/Container"

const Footer: React.FC = () => {
    const { themeSettings } = useContext(AppContext)
    return (
        <footer
            className="bg-black pb-sm pt-md text-neutral-200 h-footer -mt-footer w-full relative z-10"
            style={{ left: 0, right: 0, bottom: 0 }}
        >
            <Container>
                <ul className="flex justify-center mb-xs">
                    {themeSettings?.socialMedia?.map((v: any) => {
                        const src = `http://localhost:1337${v.Icon.data.attributes.url}`
                        return (
                            <li
                                key={v.id}
                                style={{ margin: "0 10px" }}
                                className="text-neutral-200"
                            >
                                <a
                                    href={`${v.Link}`}
                                    style={{
                                        position: "relative",
                                        display: "block",
                                        width: "20px",
                                        height: "20px",
                                    }}
                                >
                                    <Image src={src} layout="fill" />
                                </a>
                            </li>
                        )
                    })}
                </ul>
                {themeSettings?.copyrights && (
                    <p className="text-center text-mini">
                        {themeSettings.copyrights}
                    </p>
                )}
            </Container>
        </footer>
    )
}
export default Footer
