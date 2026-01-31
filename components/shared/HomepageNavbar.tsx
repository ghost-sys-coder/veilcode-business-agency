"use client";
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import MobileNavbar from './MobileNavbar'
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const links = [
    { url: "/", text: "Home" },
    { url: "/services", text: "Services" },
    { url: "/about", text: "About" },
    { url: "/work", text: "Work" },
    { url: "/contact", text: "Contact"}
]

const HomepageNavbar = () => {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-500">Veilcode</div>
                <div className="space-x-4 max-md:hidden">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className={cn(
                                "text-slate-600 hover:text-blue-500 transition",
                                pathname === link.url && "bg-blue-500 text-white p-2 rounded-sm"
                            )}
                        >
                            {link.text}
                        </Link>
                    ))}
                </div>
                <Button variant="outline" asChild className='max-md:hidden'>
                    <Link href="/work">View Our Work</Link>
                </Button>
                <MobileNavbar />
            </div>
        </nav>
    )
}

export default HomepageNavbar