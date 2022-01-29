import { useContext } from "react"
import { AppContext } from "../../contexts/header"
import Image from "next/image"

const FullBackground: React.FC = () => {
    const { pageContent } = useContext(AppContext)
    const background =
        pageContent?.thumbnail?.data?.attributes?.formats?.large?.url

    return (
        <>
            <span
                className="w-full h-full absolute  z-10 bg-black opacity-60"
                style={{ left: 0, right: 0, top: 0, bottom: 0 }}
            ></span>
            {background && (
                <Image
                    src={`http://localhost:1337${background}`}
                    layout="fill"
                    quality={100}
                />
            )}
        </>
    )
}

export default FullBackground
