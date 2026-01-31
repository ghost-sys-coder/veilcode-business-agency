"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Database, Home, Layers, LayoutTemplate, Menu, Send } from 'lucide-react'
import Link from 'next/link'
import { DialogTitle } from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils';

const mobileLinks = [
    { text: "home", url: "/", icon: Home },
    { text: "services", url: "/services", icon: Layers },
    { text: "about", url: "/about", icon: Database },
    { text: "work", url: "/work", icon: LayoutTemplate },
    { text: "contact", url: "/contact", icon: Send },
]

const MobileNavbar = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className='block md:hidden'>
                <Menu />
            </SheetTrigger>
            <SheetContent className='block md:hidden'>
                <DialogTitle className='sr-only'>Mobile Navbar</DialogTitle>
                <div className="mt-15 flex flex-col gap-5 px-4">
                    {mobileLinks.map((link, index) => (
                        <Link className={cn(
                            'flex gap-2 justify-start items-center w-full text-gray-500 text-sm font- hover:bg-gray-100 p-2 hover:rounded-sm',
                            link.url === pathname && "bg-blue-500 text-white rounded-sm"
                        )} href={link.url} key={index}>
                            <link.icon />
                            <span className='capitalize'>{link.text}</span>
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNavbar