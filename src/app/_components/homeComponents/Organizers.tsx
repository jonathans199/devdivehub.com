/* eslint-disable @next/next/no-img-element */
import { FaEnvelope, FaLinkedinIn, FaPhone, FaSafari } from 'react-icons/fa'

export default function Organizers() {
	return (
		<div className='bg-gray-50'>
			<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
				{/* Details section */}
				<section aria-labelledby='details-heading'>
					<div className='flex flex-col items-center text-center'>
						<h2 id='details-heading' className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
							DevDive&apos;s Organizers
						</h2>
						<p className='mt-3 max-w-3xl text-lg text-gray-600'>
							We host DevDive&apos;s monthly meetup to foster a thriving community of developers who are passionate
							about learning and growing together. By creating a collaborative space where attendees can share
							knowledge, network, and enhance their skills, we aim to bridge the gap between theory and practice. Our
							goal is to empower developers to stay at the forefront of technology while building meaningful connections
							within the local tech scene.
						</p>
					</div>

					<div className='mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
						<div>
							<div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
								<img
									alt='Rebbeca Bakels'
									src='/images/home/rebecca-bakels.jpeg'
									className='h-full w-full object-cover object-center'
								/>
							</div>
							<h2 className='font-bold text-slate-800 text-lg my-3'>Rebecca Bakels</h2>
							<p className='text-base text-gray-500'>
								Software engineer and tech community advocate at CITY Furniture based out of South Florida with a
								mission to continuously grow and encourage others to start their journey in tech
							</p>
							<div className='flex space-x-6 md:order-2 mt-5'>
								<a
									href='https://www.linkedin.com/in/rebecca-bakels/'
									target='_blank'
									className='text-gray-400 hover:text-gray-500'>
									<FaLinkedinIn size='20' />
								</a>
							</div>
						</div>
						<div>
							<div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
								<img
									alt='Jonathan Sanchez'
									src='/images/home/jonathan-sanchez.jpeg'
									className='h-full w-full object-cover object-center'
								/>
							</div>

							<h2 className='font-bold text-slate-800 text-lg my-3'>Jonathan Sanchez</h2>
							<p className='text-base text-gray-500'>
								A passionate hands on CTO and software engineer who loves building solutions that impact people&apos;s
								lives, by making software accessible and less scary, trying to make difference in the tech community.
							</p>
							<div className='flex space-x-6 md:order-2 mt-5'>
								<a href='https://www.linkedin.com/in/jonathansanchez199/' className='text-gray-400 hover:text-gray-500'>
									<FaLinkedinIn size='20' />
								</a>
								<a href='mailto:jonathans199@gmail.com' className='text-gray-400 hover:text-gray-500'>
									<FaEnvelope size='20' />
								</a>
								<a href='tel:3057428820' className='text-gray-400 hover:text-gray-500'>
									<FaPhone size='20' />
								</a>
								<a href='https://jonathansanchez.dev' target='_blank' className='text-gray-400 hover:text-gray-500'>
									<FaSafari size='20' />
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}
