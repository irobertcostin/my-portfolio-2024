import { TypeAnimation } from 'react-type-animation'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
// import Data from '../services/Api'
// import { Modal, ConfigProvider } from 'antd';
import { ClipLoader } from "react-spinners"



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}




export default function Contact({ contact }) {


    // const service = new Data();




    // const 
    const [agreed, setAgreed] = useState(false)
    const [modal2Open, setModal2Open] = useState(false);
    const [loading, setLoading] = useState(false)

    const [data, setData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        status: "Must Contact",
        agreed: agreed,
    });

    const { ...allData } = data;

    const canSubmit = [...Object.values(allData)].every(Boolean);



    function resetForm() {
        document.getElementById("name").value = "";
        document.getElementById("company").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone-number").value = "";
        document.getElementById("message").value = "";
        setAgreed(false)
        setData({
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
            agreed: false
        });
    }



    const newClient = async (item) => {
        setLoading(true)
        if (canSubmit) {

            // let data = await service.createClient(item);

            // if (data) {
            //     resetForm();
            //     setName(data.first_name)
            //     setLoading(false)
            //     setModal2Open(true)

            // }
        }

    }



    const handleAggreeChange = () => {
        setAgreed(!agreed)

    }


    const handleRegistration = (e) => {
        e.preventDefault();
        newClient(data)

    };




    return (
        <div ref={contact} className="isolate bg-white px-6 py-16 lg:px-8 relative z-40">

            <div className="mx-auto max-w-2xl text-center">
                <div className="text-5xl font-bold tracking-tight text-amber-500">
                    <TypeAnimation
                        sequence={[
                            'Get',
                            500,
                            'Get in', //  Continuing previous Text
                            500,
                            'Get in touch',
                            500,
                        ]}
                        cursor={false}
                        repeat={Infinity}
                    />

                </div>
            </div>


            <div className='w-full xl:flex  justify-center items-start xl:px-40 xl:gap-20 '>

                <div className='mx-auto  max-w-xl sm:mt-20  xl:max-w-5xl xl:w-full'>

                    <form action="" noValidate={false} onSubmit={handleRegistration} className="mx-auto mt-10  max-w-xl sm:mt-20 xl:-mt-8">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder="John Doe"
                                        onChange={(e) => {

                                            setData({
                                                ...data,
                                                name: e.target.value
                                            });
                                        }}
                                        autoComplete="name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Company
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        onChange={(e) => {

                                            setData({
                                                ...data,
                                                company: e.target.value
                                            });
                                        }}
                                        placeholder="HireMe LLC"
                                        type="text"
                                        name="company"
                                        id="company"
                                        required
                                        autoComplete="organization"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                email: e.target.value
                                            });
                                        }}
                                        placeholder="hr@hire.com"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Phone number
                                </label>
                                <div className="relative mt-2.5">

                                    <input
                                        type="number"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                phone: e.target.value

                                            });
                                        }}
                                        className="block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        onChange={(e) => {
                                            setData({
                                                ...data,
                                                message: e.target.value
                                            });
                                        }}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <Switch
                                        id='switch'
                                        defaultChecked={false}
                                        color='pink'
                                        label="Confirm"
                                        checked={agreed}
                                        // unchecked={!agreed}
                                        onChange={
                                            (e) => {
                                                handleAggreeChange()
                                                setData({
                                                    ...data,
                                                    agreed: !agreed
                                                });

                                            }}
                                        className={classNames(
                                            agreed ? 'bg-indigo-600' : 'bg-gray-200',
                                            'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                        )}
                                    >
                                        <span className="sr-only">Agree to policies</span>
                                        <span
                                            aria-hidden="true"
                                            className={classNames(
                                                agreed ? 'translate-x-3.5' : 'translate-x-0',
                                                'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                                            )}
                                        />
                                    </Switch>
                                </div>
                                <Switch.Label className="text-sm leading-6 text-gray-600">
                                    By selecting this, you agree to our{' '}
                                    <p className="font-semibold text-indigo-600">
                                        privacy&nbsp;policy
                                    </p>
                                    .
                                </Switch.Label>
                            </Switch.Group>
                        </div>
                        <div className="mt-10">
                            <button
                                type='submit'
                                disabled={!canSubmit}
                                className={`${!canSubmit ? "bg-slate-400" : "bg-amber-500 hover:bg-amber-400"}  w-full rounded-full   px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm flex justify-center items-center`}
                            >
                                {
                                    loading ?

                                        <div className='h-6 flex items-center'>
                                            <ClipLoader className='' size={"25px"} color='white' />
                                        </div>

                                        :

                                        <>Send</>
                                }

                            </button>
                        </div>
                    </form>
                </div>

            </div>






            {/* <ConfigProvider
                theme={{
                    token: {
                        colorBgBase: "white",
                        colorText: "indigo",
                        colorIcon: "indigo",
                        colorIconHover: "red",
                        padding: 0,
                        paddingLG: 0,
                        borderRadius: 4,

                    },
                }}
            >
                <Modal
                    okButtonProps={{ style: { display: "none" } }}
                    cancelButtonProps={{ style: { display: "none" } }}
                    centered
                    closable={false}
                    open={modal2Open}
                    onOk={() => setModal2Open(false)}
                    onCancel={() => setModal2Open(false)}
                >
                    <div className=' overflow-hidden  h-[40vh] flex flex-col justify-between fredoka-font'>
                        <div className=' h-full flex flex-col justify-between items-center z-50 py-6 bg-slate-800 bg-opacity-0'>
                            <div className=' w-full h-full flex justify-center  items-start pt-20 px-10 sm:px-2  pr-6  sm:justify-end sm:pt-0    sm:items-center sm:pl-6 sm:pr-60'>
                                <p className='text-center sm:text-start text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-400 bg-clip-text text-transparent'>Thank you for your interest, {name} ! Getting back to you ASAP!</p>
                            </div>
                            <div className='w-full px-4 sm:px-8 flex justify-center md:justify-start'>
                                <button onClick={() => { setModal2Open(false) }} className='bg-slate-900  hover:bg-slate-600  block w-full rounded-full text-white max-w-[200px] px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm'>
                                    Patiently waiting
                                </button>
                            </div>
                        </div>
                    </div>
                </Modal>
            </ConfigProvider> */}
        </div>
    )
}
