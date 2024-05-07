import { TypeAnimation } from "react-type-animation"
import arrowdown from "../../components/images/arrowdown.png"

export default function Hero() {

    return (
        <div className="overflow-hidden flex justify-center items-center relative z-20 2xl:h-[100vh]">
            <div>
                <video alt="hero-video" autoPlay playsInline muted controls={false} loop className="w-[100vw] min-w-[1400px]" src='https://res.cloudinary.com/dqvazcqdl/video/upload/v1714823697/file_1_ah2sjs.mp4'></video>
            </div>
            <div className="font-extrabold text-amber-500 text-center top-40 text-5xl absolute px-4 xl:text-7xl ">
                <TypeAnimation
                    sequence={[

                        'Click.', //  Continuing previous Text
                        500,
                        'Click. Clack.',
                        500,
                        `Click. Clack. Full`,
                        500,
                        'Click. Clack. Full Stackkk.',
                        500,
                    ]}
                    cursor={false}
                    repeat={Infinity}
                    autoPlay={true}
                />
            </div>
            <div className="font-bold text-[#060644] text-center flex flex-col items-center gap-10 bottom-20 text-xl absolute px-10 md:px-20 md:text-3xl xl:text-3xl xl:bottom-40 xl:px-80  2xl:text-4xl">
                <p>Crafting seamless digital experiences. Bring your web projects to life with precision and flair.</p>
                <div className="w-full  bottom-0 flex justify-center px-4">
                    <img alt="arrow-down-scroll" className="w-10 animate-bounce" src={arrowdown}></img>
                </div>
            </div>
        </div>
    )
}