import { BoltIcon, CircleStackIcon, Cog8ToothIcon, ScaleIcon } from '@heroicons/react/24/outline'


export default function Services({ services }) {


    const features = [
        {
            name: 'Dynamic Web Development',
            description:
                'Empowering goals with dynamic web solutions. From concept to deployment, bring vision to life.',
            icon: Cog8ToothIcon,
        },
        {
            name: 'Database Management',
            description:
                'From schema design to optimization, smooth database operations for applications.',
            icon: CircleStackIcon,
        },
        {
            name: 'Scalable Infrastructure Solutions',
            description:
                'From architecture design to deployment, building scalable infrastructure to meet growing demands.',
            icon: ScaleIcon,
        },
        {
            name: 'Optimized Performance Enhancement',
            description:
                'Optimizing speed, reliability, and user experience for unparalleled digital performance.',
            icon: BoltIcon,
        },
    ]


    return (
        <div ref={services} className="bg-white relative py-24 sm:py-32 flex flex-col items-center gap-10 xl:grid xl:grid-cols-2 xl:pl-20 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 2xl:ml-20">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-[#08081d]">Empowering goals</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-amber-500 sm:text-4xl">
                        Addressing all requirement aspects efficiently and effectively.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#08081d]">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className='w-full overflow-hidden pl-4 md:pl-12 xl:h-full xl:flex justify-center xl:pl-40 relative'>
                <img
                    src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                    alt="Product screenshot"
                    className="w-[48rem]  xl:absolute xl:left-0 xl:top-12 max-w-none rounded-xl shadow-lg ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width={2432}
                    height={1442}
                />
            </div>
        </div>
    )
}