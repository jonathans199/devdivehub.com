'use client'

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './home.module.scss'

import Hero from './_components/homeComponents/Hero'
import Events from './_components/homeComponents/Events'
import Organizers from './_components/homeComponents/Organizers'
import { CarouselImages } from './_components/homeComponents/Carousel'
import { Sponsors } from './_components/homeComponents/Sponsors'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Dev Dive Meetup</title>
				<meta name='description' content='Dev Dive Meetup' />
				<link rel='icon' href='/favicon.ico' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta property='og:title' content='Dev Dive Meetup' />
				<meta property='og:description' content='Join us for the Dev Dive Monthly Meetup Workshop for developers!' />
				<meta property='og:image' content='/images/logos/devdive-logo-dark.svg' />
				<meta property='og:url' content='https://www.devdivehub.com' />
				<meta property='og:type' content='website' />
			</Head>
			<Hero />

			<section id='services' className={`${styles['maintaining']} bg-cover bg-fixed bg-center`}>
				<div className='text-center mx-24'>
					<h2 className=' text-4xl'>Celebrating the South Florida tech community</h2>
					{/* <h2 className="text-white-900 text-3xl font-bold tracking-tight sm:text-4xl">International Service Center</h2> */}
					<p className='mt-6 text-xl leading-8 text-zinc-100'>
						🏆Join us for the Dev Dive Monthly Meetup Workshop for developers! Thanks to our collaboration with the
						South Florida Tech Hub organization, we&rsquo;ve had a successful 2024. This workshop is a fantastic
						opportunity to network, learn, and grow within the vibrant South Florida tech community. 🌴
					</p>
					<div className='mt-10'>
						<a
							href='mailto:devdivehub@gmail.com'
							className='rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-icp-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							Get involved <span aria-hidden='true'>&rarr;</span>
						</a>
					</div>
				</div>
			</section>
			<Sponsors />
			<Organizers />
			<CarouselImages />
			<Events />

			{/* <div className='bg-white'>
				<div className='relative isolate overflow-hidden bg-gradient-to-b '>
					<div className='mx-auto max-w-7xl items-center pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40'>
						<div className='px-6 lg:px-0 lg:pt-4'>
							<div className='mx-auto max-w-2xl'>
								<div className='max-w-lg'>
									<h1 className='mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
										Don&lsquo;t on the best tech event of the year!
									</h1>
									<div className='mt-10 flex items-center gap-x-6'>
										<a href='/brands' className='text-sm font-semibold leading-6 text-gray-900'>
											Find out more <span aria-hidden='true'>→</span>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className='mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen'>
							<div className='shadow-lg md:rounded-3xl'>
								<div className=' [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]'>
									<div className='h-56 sm:h-64 xl:h-80 2xl:h-96'></div>
								</div>
							</div>
						</div>
					</div>
					<div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
				</div>
			</div> */}
		</>
	)
}

export default Home
