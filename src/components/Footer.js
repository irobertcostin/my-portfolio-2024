import logo from "../components/images/mylogo2.png"


export default function Footer() {


    const handleWhatsAppButtonClick = () => {
        const phoneNumber = '0040771638083';
        const message = "Hi%20Robert,%20...";
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url);
    };

    const handleEmailButtonClick = () => {
        const email = 'ionrobert45@gmail.com';
        const subject = 'Full stack help needed';
        const body = 'Hi Robert,';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };


    return (
        <div className="w-full flex justify-center relative z-50 bg-white">
            <div className="w-full max-w-7xl py-10 flex flex-col justify-between items-center md:flex-row md:px-20">
                <img src={logo} alt="logo" className="w-60"></img>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 w-full justify-center ">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-2.5 w-2.5 xl:h-4 xl:w-4 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-sm leading-6 text-gray-900 xl:text-lg">
                        <strong className="font-semibold">Available for work</strong>
                        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        In need of reliable help?
                    </p>
                </div>
                <div className="  flex justify-center md:justify-end items-center h-20 gap-5 xl:gap-10 ">
                    <button onClick={handleWhatsAppButtonClick} className=" rounded-md h-10 w-10 md:h-12 md:w-12">
                        <img alt="whatsapp" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715008315/wapp_rw53o1.png"></img>
                    </button>
                    <button onClick={handleEmailButtonClick} className=" rounded-md h-10 w-10 md:h-12 md:w-12">
                        <img alt="email" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715008315/email_x0bw3f.png"></img>
                    </button>
                </div>
            </div>
        </div>
    )
}