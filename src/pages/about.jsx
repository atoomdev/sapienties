import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import clquConfig from '../../clqu.config'
import Button from 'components/Global/Button'
import Carousel from "react-multi-carousel";

export default function About() {
    const { page } = usePage();

    return <>
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
                <div>
                    <h1 className="text-4xl font-bold">Who Are <span className="relative whitespace-nowrap text-primary">We</span>?</h1>
                    <p className="text-xl mt-1">
                    Sapienties: <span className="relative whitespace-nowrap text-primary">The Key to Your Success</span>.
                    At Sapienties, we are dedicated to enhancing your business's revenue and visibility.
                    Whether it's managing your social media, company, or any project remotely, our expert team is here to ensure your success.
                    With our subsidiaries, Atomsoft providing cutting-edge software solutions, and FlexMark delivering impactful advertising and marketing strategies, we offer comprehensive support to elevate your business.
                    Trust Sapienties to secure your PATH TO SUCCESS.
                    </p>
                    
                </div>
                <div className="relative flex-shrink-0">
                    <img src="https://i.ibb.co/Fw69rfK/Screenshot-1photo-Aid-removed-background-2.png" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                    <div className="-right-3 top-0 absolute w-full h-full top-0 right-0 border-1 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
                </div>
            </div>
        </div>

    </>
}
