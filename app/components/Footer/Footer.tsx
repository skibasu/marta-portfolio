import { useContext } from "react"
import Image from "next/image"
import Container from "../Container/Container"
import { IServerData } from "../../../models"

const Footer: React.FC<IServerData> = ({ data }) => {
    const { socialMedia, copyrights } = data
    return (
        <footer
            className="bg-black pb-sm pt-md text-neutral-200 h-footer -mt-footer w-full relative z-10"
            style={{ left: 0, right: 0, bottom: 0 }}
        >
            <Container>
                <ul className="flex justify-center mb-xs">
                    {socialMedia?.map((v: any) => {
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
                {copyrights && (
                    <p className="text-center text-mini">{copyrights}</p>
                )}
            </Container>
        </footer>
    )
}
export default Footer
