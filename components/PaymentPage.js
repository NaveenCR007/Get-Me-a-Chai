"use client"

import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { initiate } from '@/actions/useractions'
import { useState } from 'react'

const PaymentPage = () => {
    const [paymentform, setPaymentform] = useState({})
    const { data: session } = useSession()
    if (!session) return <div className="text-white text-center mt-10">Loading...</div>;


    const handleChange = (e) => {
        setPaymentform({
            ...paymentform,
            [e.target.name]: e.target.value
        });
    }

    let pay = async (amount) => {
        // get the order id
        let a = await initiate(amount, session?.user.name, paymentform);
        orderID = a.id;

        var options = {
            "key": process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits.
            "currency": "INR",
            "name": "Get Me a Chai", //your business name
            "description": "Chai Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderID,
            "callback_url": "http://localhost:3000/api/razorpay",
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="w-full">

                <div className="cover h-100 relative flex flex-row-reverse justify-between items-center">

                    <div className="w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/banner.jpg')",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            zIndex: 0,
                        }} />
                    <div className="absolute left-0 top-0 h-full w-[30%] backdrop-blur-lg bg-black/30 z-10 rounded-r-sm" />

                    <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

                    {/* Profile content*/}
                    <div className="absolute left-10 gap-1 top-16 z-20 flex flex-col justify-center items-start h-full w-1/2 px-10 text-white">
                        <h1 className="text-5xl font-bold">{session.user.name}</h1>

                        <div className="stats flex justify-center items-center gap-2 text-gray-400">
                            <p>20.1k members</p>
                            <span>⸱</span>
                            <p>305 posts</p>
                            <span>⸱</span>
                            <p>$46,098/month</p>
                        </div>
                        <p className="text-sm mt-2">Hi, I'm {session.user.name}! My team and I are making Paralives, an upcoming life simulation game for PC and Mac. Build your dream house, create some characters and manage their lives in a cozy open world town! The game is currently in development and will be released...</p>

                        <div className='flex justify-start gap-3 items-center w-1/2'>
                            <button className="mt-4 px-6 py-2 text-center bg-[#3f878b] transition-all delay-75 hover:bg-[#3a7476] cursor-pointer rounded-md text-white font-medium">Become a member</button>

                            <div className='mt-4 border-[0.5px] rounded-lg h-10 w-10 p-1 cursor-pointer'>
                                <svg data-tag="IconMore" className='invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 12c0 .9-.113 1.462-.45 1.8-.338.337-.9.45-1.8.45s-1.462-.113-1.8-.45c-.337-.338-.45-.9-.45-1.8s.113-1.462.45-1.8c.338-.337.9-.45 1.8-.45s1.462.113 1.8.45c.337.338.45.9.45 1.8m-9-2.25c-.9 0-1.462.113-1.8.45-.337.338-.45.9-.45 1.8s.113 1.462.45 1.8c.338.337.9.45 1.8.45s1.462-.113 1.8-.45c.337-.338.45-.9.45-1.8s-.113-1.462-.45-1.8c-.338-.337-.9-.45-1.8-.45m-6.75 0c-.9 0-1.462.113-1.8.45-.337.338-.45.9-.45 1.8s.113 1.462.45 1.8c.338.337.9.45 1.8.45s1.462-.113 1.8-.45c.337-.338.45-.9.45-1.8s-.113-1.462-.45-1.8c-.338-.337-.9-.45-1.8-.45"></path></svg>
                            </div>
                        </div>
                    </div>

                </div>
                {/* payment section */}
                <div data-aos="fade-up" className='payments flex justify-between items-center px-5 w-full h-[80vh]'>
                    <div className="supporters w-[50%] rounded-md bg-slate-900 p-7 h-[65vh] overflow-y-auto">
                        <h2 className='font-bold text-start text-3xl mb-4'>Recent supporters</h2>
                        <ul>
                            <li className='flex items-center gap-2 mb-3'>
                                <img src="/avatar.gif" width={33} alt="" />
                                <b className='font-semibold text-[#3f878b]'>Gurumurthy</b> bought a chai with a message big fan bhai
                            </li>
                            <li className='flex items-center gap-2 mb-3'>
                                <img src="/avatar.gif" width={33} alt="" />
                                <b className='font-semibold text-[#3f878b]'>Gurumurthy</b> bought a chai with a message big fan bhai
                            </li>
                            <li className='flex items-center gap-2 mb-3'>
                                <img src="/avatar.gif" width={33} alt="" />
                                <b className='font-semibold text-[#3f878b]'>Gurumurthy</b> bought a chai with a message big fan bhai
                            </li>
                        </ul>
                    </div>

                    <div className="donate w-[48%] rounded-md bg-slate-900 h-[65vh]">
                        <h2 className='font-bold text-center pt-5 text-3xl mb-4'>Buy {session.user.name} a Chai!</h2>

                        <div className="donator-info w-3/4 mx-auto flex flex-col gap-3">
                            <input onChange={() => handleChange()} value={paymentform.amount} className='w-full px-2 h-10 border rounded-md' type="number" placeholder='Enter amount' />
                            <input onChange={() => handleChange()} value={paymentform.message} className='w-full px-2 h-10 border rounded-md' type="text" placeholder='Say something nice...' />

                            {/* or choose from these prices: */}
                            <div className='flex justify-between items-center'>
                                <button className='w-[30%] border border-bg-[#3f878b] transition-all delay-75 hover:bg-[#3a7476] cursor-pointer rounded-md text-white font-medium py-2' onClick={() => pay(1000)}>₹10</button>
                                <button className='w-[30%] border border-bg-[#3f878b] transition-all delay-75 hover:bg-[#3a7476] cursor-pointer rounded-md text-white font-medium py-2' onClick={() => pay(5000)}>₹50</button>
                                <button className='w-[30%] border border-bg-[#3f878b] transition-all delay- 75 hover:bg-[#3a7476] cursor-pointer rounded-md text-white font-medium py-2' onClick={() => pay(10000)}>₹100</button>
                            </div>

                            <button className='w-full bg-[#3f878b] transition-all delay-75 hover:bg-[#3a7476] cursor-pointer rounded-md text-white font-medium py-2'>Make payment</button>
                        </div>
                    </div>
                </div>

                {/* pricing section */}
                <div data-aos="fade-up" className="pricing">
                    <section className="">
                        <div className="py-8 px-4 mx-auto w-[90%] lg:py-16 lg:px-6">
                            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                                <h2 className="mb-4 text-3xl tracking-tight font-bold text-white">
                                    Choose a paid membership
                                </h2>
                            </div>

                            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                                {[
                                    {
                                        title: "Adult",
                                        price: 3,
                                        hieght: "h-[80vh]",
                                        border: "",
                                        features: [
                                            "Your name in the game credits",
                                            "Access to exclusive posts on Patreon",
                                            "Community polls",
                                            '"Patron" Discord role and channel',
                                        ],
                                    },
                                    {
                                        title: "Elder",
                                        price: 5,
                                        hieght: "h-[100vh]",
                                        border: "border-[#3f878b]",
                                        features: [
                                            "All rewards from previous tiers",
                                            'Your name in the credits under “Super Patron”',
                                            'Discord “Super Patron” role and access to developer channel',
                                            "Access to work-in-progress screenshots on Discord developer channel",
                                        ],
                                    },
                                    {
                                        title: "Ancient",
                                        price: 10,
                                        hieght: "h-[80vh]",
                                        features: [
                                            "All rewards from previous tiers",
                                            "HD and 4K wallpapers",
                                            "Free Paralives soundtrack upon release of the game",
                                        ],
                                    },
                                ].map(({ title, price, features, hieght }) => (
                                    <div
                                        key={title}
                                        className={`${hieght} my-auto flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg shadow xl:p-8 bg-[#252626] text-white`}
                                    >
                                        <h3 className="text-3xl font-bold text-start">{title}</h3>

                                        <div className="flex justify-start items-baseline my-8">
                                            <span className="mr-2 text-5xl font-bold">${price}</span>
                                            <span className="text-gray-500 dark:text-gray-400">/month</span>
                                        </div>

                                        <ul role="list" className="mb-8 space-y-4 text-left">
                                            {features.map((feature, index) => (
                                                <li key={index} className="flex items-center space-x-3">
                                                    <svg
                                                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <a
                                            href="#"
                                            className="text-white bg-[#3f878b] transition-all delay-75 hover:bg-[#3a7476] focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
                                        >
                                            Join Now!
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </>
    )
}

export default PaymentPage
