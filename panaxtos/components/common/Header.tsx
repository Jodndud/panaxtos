import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from 'lucide-react';

export default function Header(){
    return(
        <div className="border-b border-[#eee]">
            <div className="default-container h-25 flex justify-between items-center">
                <div className=""><Link href="/"><Image src="/logo-black.png" alt="logo" width={154} height={34} /></Link></div>
                <ul className="flex gap-8">
                    <li className="hover:text-[#EF9300]"><Link href="https://www.panaxtos.com/">파낙토스</Link></li>
                    <li className="relative group cursor-pointer">
                    <span className="flex items-center gap-2 text-black group-hover:text-[#EF9300] transition-colors duration-200">
                        지사소개<ChevronDown className="w-4" />
                    </span>
                        <ul className="absolute left-0 top-full mt-3 w-40 bg-white rounded-lg shadow-md border-t-2 border-[#EF9300]
                            opacity-0 group-hover:opacity-100 invisible group-hover:visible
                            transition-all duration-300 ease-in-out"
                        >
                            <li className="px-4 py-4 hover:text-[#EF9300]"><Link href="/greeting">인사말</Link></li>
                            <li className="px-4 py-4 hover:text-[#EF9300]"><Link href="/location">오시는길</Link></li>
                        </ul>
                    </li>
                    <li className="hover:text-[#EF9300]"><Link href="/reservation">상담예약</Link></li>
                </ul>
            </div>
        </div>
    )
}