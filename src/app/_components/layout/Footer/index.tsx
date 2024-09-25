import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const navigation = {
    company: [
      { name: 'About', href: '/' },
      { name: 'Contact', href: '/' },
      { name: 'Request for Quote', href: '/' },
      { name: 'Inventory', href: '/' },
    ],
    brands: [
      { name: 'Genie', href: '/' },
      { name: 'Mecalac', href: '/' },
      { name: 'Rokbak', href: '/' },
      { name: 'Tadano', href: '/' },
      { name: 'Terex', href: '/' },
    ],
    social: [
      {
        name: 'Facebook',
        href: '/',
        icon: () => <FaFacebook size="20" />,
      },
      {
        name: 'Instagram',
        href: '/',
        icon: () => <FaInstagram size="20" />,
      },
      {
        name: 'Linkedin',
        href: '/',
        icon: () => <FaLinkedinIn size="20" />,
      },
      {
        name: 'YouTube',
        href: '/',
        icon: () => <FaYoutube size="20" />,
      },
    ],
  }

  return (
    // <footer className={styles['footer']}>
    //   <div className={styles['footer-left']}>
    //     <img src='/img/icp-logo-black.svg' alt='' width='200px' />
    //     <p>
    //       ICP MIAMI has been proudly serving the construction & mining industries for over 12 years, in which we have earned a reputation for
    //       excellent product quality, friendly customer service and distinguished technical support.
    //     </p>
    //     <img src='/img/creditcards.png' alt='' width='200px' />
    //   </div>
    //   <div className={styles['footer-right']}>
    //     <h3>USEFUL LINKS</h3>
    //     <hr />
    //     <div className={styles['footer-right__links']}>
    //       <a href='#about'>About</a>
    //       <a href='#services'>Services</a>
    //       <a href='#family'>ICP Family</a>
    //       <a href='#contact'>Contact Us</a>
    //     </div>
    //   </div>
    // </footer>

    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-2 xl:gap-6">
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 md:gap-48 ">
            <div className="md:grid md:grid-cols-1 md:gap-6">
              <div className=" md:mt-0">
                <img src="/img/logos/dark-logo.jpeg" alt="" width="200px" />
                <p className="mb-5 mt-8 text-sm text-gray-600 ">
                  South Florida Tech Hub has been proudly serving the construction & mining industries for over 12
                  years, in which we have earned a reputation for excellent product quality, friendly customer service
                  and distinguished technical support.
                </p>
                {/* <img src="/img/creditcards.png" alt="" width="200px" /> */}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Brands</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.brands.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="mt-10 xl:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">Subscribe to our newsletter</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              The latest news, articles, and resources, sent to your inbox.
            </p>
            <form className="mt-6 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="w-full min-w-0 appearance-none rounded-md border-0 bg-white px-3 py-1.5 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                placeholder="Enter your email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-md bg-icp-orange px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-icp-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-icp-orange"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div> */}
        </div>
        <div className="mt-3 border-t border-gray-900/10 pt-3 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-10">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            &copy; 2024 South Florida Tech Hub, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
