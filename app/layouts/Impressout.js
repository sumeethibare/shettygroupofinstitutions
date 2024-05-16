import React from 'react'
import { Suspense } from 'react'
import Advert from './Advert'

function Impressout() {
    return (
        <>
            <div className='h-4/5 bg-zinc-100 flex justify-center lg:items-center items-start flex-col p-10 lg:gap-y-2 gap-y-10'>
                <h1 className='lg:text-8xl text-6xl font-serif font-medium italic text-blue-950 lg:p-10'>
                    creativity meets talent
                </h1>
                <a className='lg:p-20 lg:px-40 bg-black rounded-full p-12 px-24'></a>
            </div>

            <section>
                <Suspense fallback={<p>Loading video...</p>}>
                    <Advert />
                </Suspense>
            </section>
        </>
    )
}

export default Impressout