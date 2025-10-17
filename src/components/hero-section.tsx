"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroHeader } from './header'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pt-12 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">Ship 10x Faster with NS</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Highly customizable components for building modern websites and applications that look and feel the way you mean it.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Link 
                                        href="#link"
                                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        <span className="text-nowrap">Start Building</span>
                                    </Link>
                                    <Link 
                                        href="#link"
                                        className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                        <span className="text-nowrap">Request a demo</span>
                                    </Link>
                                </div>
                            </div>
                            <Image
                                className="-z-10 order-first ml-auto h-56 w-full object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                                src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                                alt="Abstract Object"
                                height="4000"
                                width="3000"
                                unoptimized
                            />
                        </div>
                    </div>
                </section>
                
            </main>
        </>
    )
}
