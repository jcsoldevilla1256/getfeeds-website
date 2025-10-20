import Image from "next/image";

export default function Content1() {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Turn feedback into connection</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Whether you&apos;re a creator, student, or business owner, GetFeeds helps you gather reactions that matter.
                        Share your link or QR code anywhere — and start collecting insights that help you grow.</p>
                        
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <Image src="https://i.ibb.co/Rk8YWqMW/Product-Mockup.png" alt="mockup" width={600} height={600} />
                    </div>                
                </div>
            </section>
        </div>
    )
}