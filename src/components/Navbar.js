import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../components/images/mylogo2.png"




export default function Navbar({ services, about, contact, projects }) {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const navigation = [
        { name: 'Projects' },
        { name: 'Services', },
        { name: 'About', },
        { name: 'Contact', },
    ]

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


    let scrollHandler = (item) => {
        item.current.scrollIntoView({ behavior: 'smooth' });
    }




    return (
        <nav className="w-full absolute z-50 flex justify-center py-5">
            <header className=" inset-x-0 top-0 max-w-7xl w-full">
                <nav className="flex justify-between items-center  min-h-20 px-4 lg:px-8" aria-label="Global">
                    <div className='w-80'>
                        <img src={logo}></img>
                    </div>
                    <div className="flex lg:hidden w-full  justify-end">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-8 w-8 text-[#060644]" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 relative z-50 xl:mt-2 xl:ml-10 justify-end  w-full">
                        {navigation.map((item) => (
                            <button onClick={() => {
                                if (item.name == "Projects") {
                                    scrollHandler(projects)
                                } else if (item.name == "About") {
                                    scrollHandler(about)
                                } else if (item.name == "Services") {
                                    scrollHandler(services)
                                } else {
                                    scrollHandler(contact)
                                }
                            }}
                                key={item.name} href={item.href} alt={item.name} className="text-xl font-semibold text-[#060644] ">
                                {item.name}
                            </button>
                        ))}
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50 " />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#08081d] px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-end ">
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white "
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 ">
                                <div className="space-y-2 py-6 flex flex-col text-2xl text-white items-start gap-5">
                                    {navigation.map((item) => (
                                        <button key={item.name}
                                            onClick={() => {
                                                if (item.name == "Projects") {
                                                    setMobileMenuOpen(false)
                                                    scrollHandler(projects)
                                                } else if (item.name == "About") {
                                                    setMobileMenuOpen(false)
                                                    scrollHandler(about)
                                                } else if (item.name == "Services") {
                                                    setMobileMenuOpen(false)
                                                    scrollHandler(services)
                                                } else {
                                                    setMobileMenuOpen(false)
                                                    scrollHandler(contact)
                                                }
                                            }}
                                            href={item.href} alt={item.name} >
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className='w-full mt-10 flex flex-col gap-5 text-amber-400 text-2xl border-t pt-10'>
                            CONTACT
                        </p>
                        <div className=' w-full mt-10'>
                            <div className="  flex justify-center md:justify-end items-center h-20 gap-5 xl:gap-10 ">
                                <button onClick={handleWhatsAppButtonClick} className="bg-white rounded-md h-12 w-12">
                                    <img alt="whatsapp" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715008315/wapp_rw53o1.png"></img>
                                </button>
                                <button onClick={handleEmailButtonClick} className="bg-white  rounded-md h-12 w-12">
                                    <img alt="email" src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1715008315/email_x0bw3f.png"></img>
                                </button>
                                <a href="https://www.linkedin.com/in/irobertcostin" target="_blank" className='bg-white rounded-md h-12 w-12'>
                                    <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1714994172/linked_yduqv9.png" alt="linkedin" className="w-full"></img>
                                </a>
                                <a href="https://github.com/irobertcostin" target="_blank" className='bg-white rounded-md h-12 w-12'>
                                    <img src="https://res.cloudinary.com/dqvazcqdl/image/upload/v1714994172/github_yj1zo8.png" alt="github" className="w-full"></img>
                                </a>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header >
        </nav >
    )
}