import { Tooltip } from 'flowbite-react'

/* eslint-disable @next/next/no-img-element */
export const Sponsors = () => {
	return (
		<div className='bg-white py-12 sm:py-32'>
			<h2
				id='details-heading'
				className='text-center my-24 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
				Sponsors & Venues
			</h2>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
					<a href='https://dexian.com/' target='_blank' rel='noopener noreferrer'>
						<img
							alt='Transistor'
							src='https://dexian.com/wp-content/themes/dexian/images/dexian-logo.svg'
							width={158}
							height={48}
							className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
						/>
					</a>
					<img
						alt='Reform'
						src='https://techhubsouthflorida.org/wp-content/uploads/2022/04/Techstrong_Logo_Techyellow.png'
						width={158}
						height={48}
						className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
					/>
					<img
						alt='Tuple'
						src='https://assets.website-files.com/5d9df710f28632786a98f21a/5dd837010422d34e2b071e31_Digital-Resource-logo.png'
						width={158}
						height={48}
						className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
					/>
					<img
						alt='SavvyCal'
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_QX9XaKPs0loPew7y_9oI4rupJQ_wYBs7E7R-zO3hWOq9dxfLrv0pEXFHJ2SibyjTQ&usqp=CAU'
						width={158}
						height={48}
						className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
					/>
					<img
						alt='Statamic'
						src='https://content.energage.com/company-images/SE90948/SE90948_logo_orig.png'
						width={158}
						height={48}
						className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
					/>
				</div>

				<div className='mt-16 flex justify-center'>
					<p className='relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5'>
						<span className='hidden md:inline'>Interested in sponsoring a future Dev Dive? </span>{'  '}
						<a href='mailto:devdivehub@gmail.com' className='font-semibold text-pink-600 pl-3'>
							<span aria-hidden='true' className='absolute inset-0' /> Get in touch
							<span aria-hidden='true'>&rarr;</span>
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}
