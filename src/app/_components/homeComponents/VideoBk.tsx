const VideoBackground = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="js-player"
        poster=""
        height="100%"
        width="100%"
        preload="auto"
        autoPlay={true}
        muted={true}
        loop={true}
        // webkitPlaysinLine={true}
        playsInline={true}
      >
        <source src="https://techhubsouthflorida.org/wp-content/uploads/2024/08/TECHpalooza-2023-Buzz-Reel.mp4" type="" />
      </video>
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-70" />
      <div className="absolute left-0 top-0 z-20 flex h-screen w-full flex-col justify-center sm:pt-96 ">
        <div className=" flex w-auto items-center justify-between px-2 md:px-28  ">
          <div className="">
            <h2>WELCOME TO</h2>
            <img className="h-24 w-auto"
                      src="/img/logos/techalooza-main-logo.png"
                      alt="ICP Miami - Heavy Equipment Parts & Machinery"
                    />
            {/* <h1 className="text-4xl font-bold tracking-tight text-icp-orange sm:text-6xl ">ICP MIAMI</h1> */}
            <h2 className="mt-6 text-2xl leading-8 text-gray-300 md:text-4xl">
              DECEMBER 11, 2024 | FT. LAUDERDALE, FL
            </h2>
            <div className="mt-10 flex items-center gap-x-6 md:justify-center lg:justify-start">
              <a
                href="/contact"
                className="rounded-md bg-pink-500 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get your tickets! <span aria-hidden="true">→</span>
              </a>
              <a href="/about" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <a className="mt-60" href="#about">
            <img src="/img/home/dropdownChevron.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoBackground
