import styles from './Hero.module.scss'

export const Hero = ({
  heading,
  subHeading,
  type,
  // height,
}: {
  heading: string
  subHeading: string
  type: string
  height: string
}) => {
  return (
    <div className={`${styles[`hero-${type}`]} h-96`}>
      <div className="flex h-full max-w-2xl flex-col justify-center p-8 md:pl-32 lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">{heading}</h2>
        <p className="text-lg leading-8 text-gray-300">{subHeading}</p>
      </div>
    </div>
  )
}
