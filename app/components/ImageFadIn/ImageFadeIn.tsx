import { useState } from "react"

import Image from "next/image"
interface IImageFadeIn {
    src: string
    layout?: "fixed" | "fill" | "intrinsic" | "responsive" | undefined
    quality?: number
}

const ImageFadeIn: React.FC<IImageFadeIn> = (props) => {
    const [opacity, setOpacity] = useState<number>(0)
    return (
        <Image
            className={`setOpacity-0 transition opacity-${opacity}`}
            {...props}
            objectFit="cover"
            onLoad={(event) => {
                setOpacity(100)
            }}
        />
    )
}
export default ImageFadeIn
