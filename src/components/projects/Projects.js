
import ProjectSection from './ProjectSection'




export default function Projects() {





    const projects = [
        {
            id: "beggars",
            name: "BeggarsOnAvax",
            description: "Web3 NFT RPG Game with Self-Sustaining Economy",
            video_url: "https://res.cloudinary.com/dqvazcqdl/video/upload/v1714830145/marketing3_rlntsv.mp4",
            link: ["https://beggarsonavax.club"],
            features: [
                "Smart Wallets Abstraction", "Login with Socials", "ERC721 Collection", "Live Reveal Mint Event", "Marketplace", "Power Token Emissions through PvE", "Native Coin Rewards from Marketplace Fees, Mint Event, Primary Sales and Royalties", "Daily Lottery Event with Jackpot. Winner takes all. Rewards generated from trading volume on DEX."
            ],
            stack: [
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939930/typescript_af9umh.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939927/mongo_recase.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939928/react_yaid19.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714940579/tailwindcss3_iowiv4.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714940046/express_ga0vtw.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939925/solidity_bzczfx.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939924/hardhat_nq193m.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714940126/thirdweb_b0ojnr.png"
            ]
        }, {
            id: "effective",
            name: "Effective Media Agency",
            description: "Digital Marketing Agency",
            video_url: "https://res.cloudinary.com/dqvazcqdl/video/upload/v1714946631/eff_djvrqc.mp4",
            link: ["https://effectivemedia.ro", "https://blog.effectivemedia.ro"],
            about: "Showcase Website, Blog and Admin Dashboard for Content and Customers Management",
            features: [
                "Landing Page", "Blog", "Admin Dashboard"
            ],
            stack: [
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939929/javascript_ubdsnu.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939928/react_yaid19.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714940579/tailwindcss3_iowiv4.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939927/mongo_recase.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939924/nest_ynlaa8.png"
            ]
        }, {
            id: "more",
            name: "More projects soon"
        }
    ]



    return (
        <div className="w-full  p-4 py-20 xl:px-20  2xl:px-40">
            <h1 className="text-amber-500 text-3xl font-bold md:text-4xl">Projects</h1>


            <div className=" py-20 grid grid-cols-1  xl:grid-cols-3 gap-10 ">

                {
                    projects.map((item) =>
                        <ProjectSection item={item} />
                    )
                }

            </div>

        </div>
    )
}