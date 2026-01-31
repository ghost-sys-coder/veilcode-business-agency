import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HomepageNavbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-500">Veilcode</div>
                <div className="space-x-4">
                    <Link href="/" className="text-slate-600 hover:text-blue-500 transition">Home</Link>
                    <Link href="/services" className="text-slate-600 hover:text-blue-500 transition">Services</Link>
                    <Link href="/work" className="text-slate-600 hover:text-blue-500 transition">Work</Link>
                    <Link href="/contact" className="text-slate-600 hover:text-blue-500 transition">Contact</Link>
                </div>
                <Button variant="outline" asChild>
                    <Link href="/work">View Our Work</Link>
                </Button>
            </div>
        </nav>
    )
}

export default HomepageNavbar