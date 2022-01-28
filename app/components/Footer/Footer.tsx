import Image from "next/image"
import useThemeSettings from "../../hooks/useThemeSettings"
import Container from "../Container/Container"

const Footer = () => {
    const { socialMedia, copyrights } = useThemeSettings()
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
                <p className="text-center text-mini">{copyrights}</p>
            </Container>
        </footer>
    )
}
Footer.dataHooks = [useThemeSettings]
export default Footer
