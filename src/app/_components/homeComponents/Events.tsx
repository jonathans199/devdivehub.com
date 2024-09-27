/* eslint-disable @next/next/no-img-element */
const features = [
	{
		name: "Introvert's guide to pair programming",
		instructor: 'Greg Barbosa',
		title: 'Director of Innovation and systems @ Avulux',
		date: '2021-10-10',
		location: 'Miami, FL',
		eventDetails:
			'https://www.eventbrite.com/e/devdive-workshop-introverts-guide-to-pair-programming-spoiler-its-ai-tickets-998131647627',
		description:
			'Join us for an in-depth, hands-on workshop where you`ll learn how to harness the power of AI directly on your local machine—privately, efficiently, and free of charge. This session is designed for software developers looking to integrate AI tools into their workflow, specifically focusing on using a locally hosted Large Language Model (LLM) to interact with your own codebase.',
		imageSrc: '/images/home/devdive-event-5.jpeg',
		imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
	},
	{
		name: 'Secure Your Bytes: Safeguarding Your Digital Life',
		instructor: 'Yesenia Yser',
		title: 'Co-founder @ The Lioness Instincts',
		description:
			'A dynamic workshop designed to empower attendees with essential knowledge and practical skills in protecting personal and professional data online. Throughout this session, participants will explore the fundamentals of data privacy, learn about the potential risks and vulnerabilities associated with digital data, and delve into effective strategies for safeguarding information. Attendees will engage in hands-on activities to implement real-world data protection solutions in their own personal lives. Enhance your understanding of crucial privacy principles in today’s tech-driven world and provide you with resources to start your digital protection journey.',
		imageSrc: '/images/home/devdive-event-4.jpeg',
		imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
	},
	{
		name: 'Spatial Design',
		instructor: 'Jake Nachlas',
		title: 'UX Designer @ The Home Depot',
		eventDetails:
			'https://www.eventbrite.com/e/devdive-peer-group-designing-spatial-experiences-a-hands-on-workshop-tickets-861044255547',
		description:
			'Let’s dive into the world of spatial design, where you’ll learn the fundamentals of creating immersive, 3D experiences. We’ll explore principles of spatial design, how to tackle real-world problems in 3D spaces, and guide you through planning your very own spatial experience. We’ll also go over the best tools to kick-start your journey. You will leave this workshop with not just new theoretical knowledge of spatial design but a tangible detailed plan to bring your experience to life.',
		imageSrc: '/images/home/devdive-event-2.jpeg',
		imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
	},
	{
		name: 'AI Model Training',
		instructor: 'Enes Grahovac',
		title: 'Sr. Machine Learning & Software Engineer',
		description:
			'You will learn how to collect data and train your own AI model! It’s going to be a fun time, where we will collect music lyrics and generate a song or lyrics from your favorite musical artist. No previous experience needed.',
		imageSrc: '/images/home/devdive-event-1.jpeg',
		imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
		eventDetails:
			'https://www.eventbrite.com/e/devdive-peer-group-ai-model-training-workshop-for-all-levels-in-person-tickets-836709559817',
	},
]

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}

export default function Events() {
	return (
		<div className='bg-white'>
			<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
				<div className='mx-auto max-w-3xl text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>Dev Dive&apos;s</h2>
					<p className='mt-4 text-gray-500'>
						Explore our list of past and upcoming DevDive meetups, where you can join hands-on workshops, networking
						opportunities, and skill-building sessions designed to help you grow as a developer.
					</p>
				</div>

				<div className='mt-32 space-y-40'>
					{features.map((feature, featureIdx) => (
						<div
							key={feature.name}
							className='flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 w-full'>
							<div
								className={classNames(
									featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
									'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4'
								)}>
								<h3 className='text-xl mb-5 font-bold text-gray-900'>{feature.name}</h3>
								<h4 className='text-md font-semibold text-gray-900'>{feature.instructor}</h4>
								<h4 className='font-light text-gray-400'>{feature.title}</h4>
								<p className='my-5 text-sm text-gray-600'>{feature.description}</p>
								<p>
									<a href={feature.eventDetails} className='font-semibold text-pink-600' target='_blank'>
										<span aria-hidden='true'> Event details</span>
										<span aria-hidden='true'>&rarr;</span>
									</a>
								</p>
							</div>
							<div
								className={classNames(
									featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
									'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
								)}>
								<div className='aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100'>
									<img alt={feature.imageAlt} src={feature.imageSrc} className='object-cover object-center' />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
