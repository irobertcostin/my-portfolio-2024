import ProjectInfo from "./ProjectInfo"
import { useState } from "react"



export default function ProjectSection({ item }) {


    const [open, setOpen] = useState(false)
    const [openDisclaimer, setOpenDisclaimer] = useState(true)


    return (
        <div key={item.id} className={`${item.id == "effective" ? "xl:col-span-2" : "xl:col-span-2"} "   text-white flex flex-col gap-4 relative   "`}>
            <div className={`${item.id == "effective" ? "" : ""} ""`}>
                <video autoPlay playsInline muted controls={false} loop className="rounded-lg" src={item.video_url}>
                </video>
            </div>
            <div className="w-full flex justify-between items-center ">
                <div className="w-full flex flex-col ">
                    <h1 className="font-semibold xl:text-lg">{item.name}</h1>
                    <h3 className="text-slate-300 text-xs  text-[15px]">{item.description}</h3>
                </div>
                <button onClick={() => { setOpenDisclaimer(!openDisclaimer) }} className={`${item.id == "beggars" ? "absolute" : "hidden"} " bg-red-600 hover:bg-red-500 px-4  -top-10 sm:relative sm:top-0 xl:px-7 flex items-center gap-2   text-xs font-semibold  p-1 rounded-full mr-2 px-4"`}>Disclaimer <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
                </button>
                <button onClick={() => { setOpen(true) }} className="bg-amber-500 text-black text-xs font-semibold px-7 py-1.5 rounded-full  hover:bg-amber-400">Info</button>
            </div>
            {
                item.id == "beggars" && openDisclaimer &&
                <div className="bg-black absolute  h-full w-full ease-in-out duration-500 flex flex-col justify-between items-center p-5 text-xs rounded-md bg-opacity-80 md:justify-center md:gap-10 md:text-[15px] md:leading-5 md:px-10">
                    <p><span className="text-red-600">Disclaimer:</span> Beggarsonavax is a web3 game featuring hobo characters. While the game references the web3 trend on Solana where developers 'beg' for tokens to launch memecoins, it is important to note that the intention is not to mock, belittle or demean individuals experiencing homelessness. We recognize the seriousness of this issue and aim to create an entertaining experience while maintaining respect and sensitivity towards all individuals. I encourage players to approach the game with understanding and compassion.</p>
                    <button onClick={() => { setOpenDisclaimer(!openDisclaimer) }} className="text-xs rounded-full px-10 py-2 text-black font-semibold  bg-amber-500 hover:bg-amber-400  md:px-20">I understand this black humor</button>
                </div>
            }
            <ProjectInfo setOpen={setOpen} open={open} item={item} />
        </div>
    )
}
