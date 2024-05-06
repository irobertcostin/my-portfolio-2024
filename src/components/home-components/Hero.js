import { TypeAnimation } from "react-type-animation"
import arrowdown from "../../components/images/arrowdown.png"
import { XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from "react"




export default function Hero() {


    const [action, setAction] = useState(true)

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

            {
                action &&
                <div className=" w-[100vw]  bottom-0 fixed isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                    <div
                        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-amber-500 to-amber-500 opacity-30"
                            style={{
                                clipPath:
                                    'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                            }}
                        />
                    </div>
                    <div
                        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-amber-500 to-amber-500 opacity-30"
                            style={{
                                clipPath:
                                    'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                            }}
                        />
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-sm leading-6 text-gray-900">
                            <strong className="font-semibold">Available for work</strong>
                            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                                <circle cx={1} cy={1} r={1} />
                            </svg>

                            In need for reliable help?
                        </p>

                        <button

                            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                        >
                            Let's talk <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <button onClick={() => { setAction(false) }} type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            }

        </div>
    )
}