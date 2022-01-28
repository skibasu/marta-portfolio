import SliderElement from "./SliderElement/SliderElement"
import SlickSlider from "react-slick"
import { IServerData } from "../../../models"

const config = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 1500,
    fade: true,
    cssEase: "linear",
}
const Slider: React.FC<IServerData> = ({ slides }) => {
    return (
        <div className="w-full h-full flex-auto absolute left-0 top-0 z-0">
            <span
                className="w-full h-full absolute  z-20 bg-black opacity-70"
                style={{ left: 0, right: 0, top: 0, bottom: 0 }}
            ></span>
            <SlickSlider {...config}>
                {slides.map((v: any) => (
                    <SliderElement src={v.src} key={v.id} />
                ))}
            </SlickSlider>
        </div>
    )
}

export default Slider
