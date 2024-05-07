import { SparklesIcon } from "@heroicons/react/24/outline"
import Marquee from "react-fast-marquee"


export default function About({ about, contact }) {



    return (
        <div className="w-full  p-4 py-20 flex flex-col items-center">
            <h1 ref={about} className="text-amber-500 text-3xl font-bold md:text-4xl max-w-7xl w-full">About</h1>

            <div className=" py-20 grid grid-cols-3  xl:grid-cols-5 gap-2 max-w-7xl">
                <div className="overflow-hidden ">
                    <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715025163/Screenshot_2023-12-26_at_11.56.10_h7i77x.png" alt="avatar" className="rounded-lg shadow-lg"></img>
                </div>
                <div className="col-span-2 col-start-2 row-span-2 rounded-lg bg-amber-500 flex flex-col justify-center p-4 gap-5 md:py-10 md:p-8 xl:justify-start xl:py-6">
                    <p className="font-extrabold text-black text-3xl md:text-4xl">I`M ROBERT</p>
                    <div className="text-xs flex flex-col text-black font-semibold md:text-xl">
                        <p>Highly passionate web developer, governed by blockchain technology and financial instruments.</p>
                        <p>I also love people and am very content helping others reach their goals.</p>
                        <p>My strong work ethic and discipline set me apart as a DOer and someone you can count on.</p>
                    </div>
                </div>
                <div className=" rounded-lg bg-[#08081d] flex flex-col justify-center items-center py-6 md:gap-2 xl:col-span-1 xl:col-start-1 xl:py-10">
                    <p className="text-white text-5xl font-bold">3y</p>
                    <p className="text-slate-300 xl:text-xl">experience</p>
                </div>

                <div className="col-span-2 col-start-1 row-span-2 text-white rounded-lg bg-indigo-600 flex flex-col justify-start p-4 md:gap-5 xl:gap-3 md:p-8 xl:px-8 xl:py-5 xl:col-span-2 xl:col-start-4 xl:row-start-1">
                    <div className="w-full flex justify-between items-center">
                        <p className="font-extrabold text-3xl md:text-4xl">SKILLS</p>
                        <SparklesIcon className="w-12 text-white" />
                    </div>
                    <div className="text-xs flex flex-col font-semibold md:text-xl ">
                        <p>Frontend Development</p>
                        <p>Backend Development</p>
                        <p>Blockchain Development</p>
                        <p>API Design and Integration</p>
                        <p>Web Security</p>
                        <p>Responsive Design</p>
                        <p>CI/CD</p>
                        <p>Testing and Debugging</p>
                        <p>Problem-Solving and Troubleshooting</p>
                        <p>Communication and Collaboration</p>
                    </div>
                </div>
                <div className="col-span-1 row-span-1 bg-[#08081d] rounded-lg text-white flex flex-col justify-center items-center p-1 md:p-4 w-full xl:col-start-2 md:gap-4 xl:gap-10">
                    <p className="text-xs font-semibold md:text-lg text-slate-300">Fluent in:</p>
                    <div className="w-full flex justify-between  font-bold text-xl px-1 xl:px-10 xl:text-3xl">
                        <p>DE</p>
                        <p>EN</p>
                        <p>IT</p>
                    </div>
                </div>
                <div className=" col-span-1 row-span-1 bg-white rounded-lg p-1 grid grid-cols-2  border justify-center items-center xl:p-5 xl:col-start-1 xl:row-start-3 xl:gap-5">
                    <div ref={contact} className="text-black col-span-2 font-extrabold text-2xl ml-2  md:text-6xl md:ml-3 leading-[22px] xl:text-5xl xl:leading-[35px] flex flex-col justify-center items-start">
                        <p>LIN</p>
                        <p>KS:</p>
                    </div>
                    <a href="https://www.linkedin.com/in/irobertcostin" target="_blank">
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1714994172/linked_yduqv9.png" alt="linkedin" className="w-full"></img>
                    </a>
                    <a href="https://github.com/irobertcostin" target="_blank">
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1714994172/github_yj1zo8.png" alt="github" className="w-full"></img>
                    </a>
                </div>
                <div className="bg-white flex flex-col p-2 col-span-3 rounded-lg xl:col-span-3 xl:gap-5 xl:row-span-1 xl:row-start-3 xl:col-start-3 xl:py-10 ">
                    <p className="text-3xl font-extrabold xl:text-4xl xl:ml-10">STACK</p>
                    <Marquee className="h-28">
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061768/icons8-javascript-100_feuawk.png" alt="javascript" className="h-20 ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061767/icons8-typescript-96_kwpkmw.png" alt="typescript" className="h-[90px] ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061762/icons8-mongodb-144_bah5yc.png" alt="mongodb" className="h-20 ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061762/icons8-mysql-100_aetw6i.png" alt="mysql" className="h-20 ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061766/icons8-react-96_y4ssfl.png" alt="react" className="h-20 ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061764/icons8-express-js-160_xvumf4.png" alt="express" className="h-20 ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061769/nest_tiasy1.png" alt="nest" className="h-20 ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061764/icons8-tailwindcss-144_ix0o0i.png" alt="tailwindcss" className="h-20 ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061765/icons8-redux-100_xakbrc.png" alt="redux" className="h-20 ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939925/solidity_bzczfx.png" alt="solidity" className="h-20 ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939924/hardhat_nq193m.png" alt="hardhat" className="h-20 ml-5"></img>
                        <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061762/thirdweb_gayw7q.png" alt="thirdweb" className="h-20 ml-5"></img>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}