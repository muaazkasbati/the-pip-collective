import Link from 'next/link'
import React from 'react'

export default function Button({ link = false, children, onClick, href }) {
    return (
        <>
            {link ?
                <Link href={href} className="bg-transparent text-white px-6 py-3 font-bold rounded-full border border-[#A200F5] shadow shadow-[#A200F5]">{children}</Link>
                : <button onClick={onClick} className="bg-transparent text-white px-6 py-3 font-bold rounded-full border border-[#A200F5] shadow shadow-[#A200F5]">{children}</button>}
        </>
    )
}
