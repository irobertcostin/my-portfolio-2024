
import ProjectSection from './ProjectSection'


export default function Projects({ projects }) {


    const proj = [
        {
            id: "beggars",
            name: "BeggarsOnAvax",
            description: "Web3 NFT RPG Game",
            video_url: "https://res.cloudinary.com/dqvazcqdl/video/upload/v1714830145/marketing3_rlntsv.mp4",
            link: ["https://beggarsonavax.club"],
            features: [
                "Self-Sustaining Economy", "Smart Wallets Abstraction", "Login with Socials", "ERC721 Collection", "Live Reveal Mint Event", "Marketplace", "Power Token Emissions through PvE", "Native Coin Rewards from Marketplace Fees, Mint Event, Primary Sales and Royalties", "Daily Lottery Event with Jackpot. Winner takes all. Rewards generated from trading volume on DEX."
            ],
            stack: [
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061767/icons8-typescript-96_kwpkmw.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061762/icons8-mongodb-144_bah5yc.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061766/icons8-react-96_y4ssfl.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061764/icons8-tailwindcss-144_ix0o0i.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061764/icons8-express-js-160_xvumf4.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939925/solidity_bzczfx.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1714939924/hardhat_nq193m.png", "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061762/thirdweb_gayw7q.png"
            ]
        }, {
            id: "effective",
            name: "Effective Media Agency",
            description: "Digital Marketing Agency",
            video_url: "https://res.cloudinary.com/dqvazcqdl/video/upload/v1715066756/Blue_Digital_Website_New_Features_Announcement_Video_lttunl.mp4",
            link: ["https://effectivemedia.ro", "https://blog.effectivemedia.ro"],
            about: "Showcase Website, Blog and Content Management Systems",
            features: [
                "Business Showcase Page", "Blog", "Admin Dashboard", "CMS"
            ],
            stack: [
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061768/icons8-javascript-100_feuawk.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061766/icons8-react-96_y4ssfl.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061765/icons8-redux-100_xakbrc.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061764/icons8-tailwindcss-144_ix0o0i.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061762/icons8-mongodb-144_bah5yc.png",
                "https://res.cloudinary.com/dqvazcqdl/image/upload/v1715061769/nest_tiasy1.png"
            ]
        }
    ]



    return (
        <div ref={projects} className="w-full  p-4 py-20  flex flex-col items-center ">
            <h1 className="text-amber-500 text-3xl font-bold md:text-4xl w-full max-w-7xl">Projects</h1>
            <div className=" py-20 grid grid-cols-1  xl:grid-cols-4 gap-10 max-w-7xl">
                {
                    proj.map((item) =>
                        <ProjectSection item={item} />
                    )
                }
            </div>
        </div>
    )
}