"use client"
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState } from "react"

const Navbar = () => {
    const { data: session } = useSession()
    const [dropDown, setDropDown] = useState(false)

    return (
        <nav className='flex justify-between px-4 items-center bg-zinc-900 text-white h-15 py-4'>
            <div className='font-bold text-2xl flex items-center justify-center gap-1'>
                <Link href="/">Get Me a Chai</Link>
                <img width={40} height={40} src="/tea.gif" alt="chai" />
            </div>

            {/* Conditional Rendering */}
            <div>
                {session ? (
                    <div className="flex items-center gap-2" tabIndex={0} onBlur={() => setDropDown(prev => !prev)}>
                        {/* show image of user */}
                        {session.user?.image && (
                            <img
                                src={session.user.image}
                                alt="Profile"
                                className="w-8 h-8 rounded-full shadow-sm"
                            />
                        )}

                        <button onClick={() => { setDropDown(prev => !prev) }} id="dropdownDefaultButton" title="Drop down" data-dropdown-toggle="dropdown" className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2" type="button">{session.user.name}'s Profile
                        </button>

                        {/* Drop down */}
                        {dropDown && <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute top-14 right-22">
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                </li>
                                <li>
                                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Profile</Link>
                                </li>
                                <li>
                                    <button onClick={() => { signOut({ callbackUrl: "/" }); setDropDown(prev => !prev); }} className="block cursor-pointer px-4 w-full text-start py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                                </li>
                            </ul>
                        </div>}
                    </div>
                ) : (
                    <Link href="/login">
                        <button className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Navbar
