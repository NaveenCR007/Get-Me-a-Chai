"use client"
import { useSession, signOut } from "next-auth/react"
import Link from 'next/link'
import { useState, useRef, useEffect } from "react"

const Navbar = () => {
    const { data: session } = useSession()
    const [dropDown, setDropDown] = useState(false)
    const dropdownRef = useRef(null)

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropDown(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <nav className='flex justify-between px-4 items-center bg-zinc-900 text-white py-4'>
            <div className='font-bold text-2xl flex items-center justify-center gap-1'>
                <Link href="/">Get Me a Chai</Link>
                <img className="imgInvert" width={40} height={40} src="/tea.gif" alt="chai" />
            </div>

            <div>
                {session ? (
                    <div className="flex items-center gap-2 relative" ref={dropdownRef}>
                        {session.user?.image && (
                            <img
                                src={session.user.image}
                                alt="Profile"
                                className="w-8 h-8 rounded-full shadow-sm"
                            />
                        )}

                        <button
                            onClick={() => setDropDown(prev => !prev)} title="Dropdown Button"
                            className="text-white cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2"
                        >
                            Welcome <span className="text-green-300 font-semibold">{session.user.name}</span>
                        </button>

                        {dropDown && (
                            <div className="z-50 divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700 absolute top-14 right-0">
                                <ul className="py-2 text-sm text-gray-200">
                                    <li>
                                        <Link href="/dashboard" onClick={() => {setDropDown(false)}} className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link href={`/${session.user.name}`} onClick={() => {setDropDown(false)}} className="block px-4 py-2 hover:bg-gray-600 hover:text-white">Your Profile</Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => signOut({ callbackUrl: "/" })}
                                            className="block cursor-pointer px-4 w-full text-left py-2 hover:bg-gray-600 hover:text-white"
                                        >
                                            Sign out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
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
