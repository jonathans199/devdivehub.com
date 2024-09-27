import { Carousel } from 'flowbite-react'

export const CarouselImages = () => {
	return (
		<div className='h-[500px] xl:h-80'>
			<Carousel>
				<img src='/images/home/carousel-1.jpeg' alt='...' />
				<img src='/images/home/carousel-2.jpeg' alt='...' />
				<img src='/images/home/carousel-3.jpeg' alt='...' />
				<img src='/images/home/carousel-4.jpeg' alt='...' />
				<img src='/images/home/carousel-5.jpeg' alt='...' />
			</Carousel>
		</div>
	)
}
