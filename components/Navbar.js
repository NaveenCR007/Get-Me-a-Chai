"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session } = useSession()

    return (
        <nav className='flex justify-between px-4 items-center bg-zinc-900 text-white h-15 py-4'>
            <div className='font-bold text-2xl flex items-center justify-center gap-2'>
                <a href="/">Get Me a Chai</a>
                <img width={40} height={40} src="/tea.gif" alt="chai" />
            </div>

            {/* Conditional Rendering */}
            <div>
                {session ? (
                    <div className="flex items-center gap-4">
                        {/* show image of user */}
                        {session.user?.image && (
                            <img
                                src={session.user.image}
                                alt="Profile"
                                className="w-8 h-8 rounded-full shadow-sm"
                            />
                        )}
                        <button
                            onClick={() => signOut()}
                            className="text-black font-semibold bg-white hover:bg-slate-200 cursor-pointer focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-sm px-3 py-2"
                        >
                            Sign out
                        </button>
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
