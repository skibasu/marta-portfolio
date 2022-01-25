import "keen-slider/keen-slider.min.css"
import SliderElement from "./SliderElement/SliderElement"
import { useKeenSlider } from "keen-slider/react"
import { IServerData } from "../../../models"

const Slider: React.FC<IServerData> = ({ slides }) => {
    const animation = { duration: 100000, easing: (t: number) => t }
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        renderMode: "performance",
        drag: false,
        created(s) {
            s.moveToIdx(5, true, animation)
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
    })
    return (
        <div className="w-full h-full flex-auto absolute left-0 top-0 z-0">
            <span className="w-full h-full absolute left-0 right-0 z-20 bg-black opacity-70"></span>
            <div ref={sliderRef} className="keen-slider h-full">
                {slides.map((v: any) => (
                    <SliderElement src={v.src} key={v.id} />
                ))}
            </div>
        </div>
    )
}

export default Slider
