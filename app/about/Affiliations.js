import React from 'react'
import Image from 'next/image'
import gov from './logos/govofkarnataka.png'
import aicte from './logos/aicte.png'
import ayush from './logos/ayush.png'
import homeopathy from './logos/homeopathy.png'
import ncism from './logos/ncism.png'
import pharmacy from './logos/pharmacy.png'
import rajiv from './logos/rajiv.png'
import vtu from './logos/vtu.png'

function Affiliations() {
    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                    <h2 class="mb-8 lg:mb-16 text-3xl font-medium tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Affiliation & Accreditation</h2>
                    <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                        <Image src={gov} />
                        <Image src={aicte} />
                        <Image src={ayush} />
                        <Image src={homeopathy} />
                        <Image src={ncism} />
                        <Image src={pharmacy} />
                        <Image src={rajiv} />
                        <Image src={vtu} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Affiliations