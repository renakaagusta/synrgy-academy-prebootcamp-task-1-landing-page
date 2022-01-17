import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function HomePage() {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  return (
    <div className='scroll-smooth'>
      {scrollY > 10 && (
        <Link href='#home'>
          <a onClick={() => setMenuVisibility(false)}>
            <div className='bg-white bottom-8 fixed p-3 right-8 rounded shadow'>
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
          </a>
        </Link>
      )}
      <nav
        className={`fixed z-50 ${
          scrollY > 10
            ? 'transition duration-500 bg-white ease-in-out shadow-sm'
            : 'transition duration-500 bg-transparent ease-in-out'
        }`}
      >
        <div className='flex flex-col my-6 px-8 w-screen lg:flex-row'>
          <div className='flex flex-row'>
            <Link href='#home'>
              <a
                onClick={() => setMenuVisibility(false)}
                className='inline-flex items-center mr-4 p-2'
              >
                <span className='font-bold text-2xl text-gray-700 tracking-wide uppercase lg:text-3xl'>
                  LOGO
                </span>
              </a>
            </Link>
            <button
              className='inline-flex ml-auto outline-none p-3 text-dark lg:hidden hover:bg-gray-200 hover:text-dark'
              onClick={() => setMenuVisibility(!menuVisibility)}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <div
            className={`mr-6 w-full lg:flex-grow lg:inline-flex lg:w-auto ${
              menuVisibility ? 'visible' : 'hidden'
            } lg:visible`}
          >
            <div className='flex flex-col items-start w-full lg:flex-row lg:h-auto lg:inline-flex lg:items-center lg:ml-auto lg:w-auto'>
              <Link href='#about'>
                <a
                  onClick={() => setMenuVisibility(false)}
                  className='items-center justify-center px-6 py-2 text-dark w-full lg:inline-flex lg:w-auto'
                >
                  ABOUT
                </a>
              </Link>
              <Link href='#articles'>
                <a
                  onClick={() => setMenuVisibility(false)}
                  className='items-center justify-center px-6 py-2 text-dark w-full lg:inline-flex lg:w-auto'
                >
                  ARTICLES
                </a>
              </Link>
              <Link href='#subscribe'>
                <a
                  onClick={() => setMenuVisibility(false)}
                  className='border-2 border-gray-600 border-solid items-center justify-center px-6 py-2 text-dark w-full lg:inline-flex lg:w-auto hover:bg-gray-600 hover:text-white'
                >
                  SUBSCRIBE
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className='flex flex-col'>
        <div
          id='home'
          className="bg-[url('/images/bg-welcome.jpg')] bg-cover bg-fixed bg-no-repeat flex h-screen w-screen"
        >
          <div className='align-center flex flex-col h-100 items-center m-auto text-center'>
            <h1 className='mb-6 text-3xl text-gray-700 lg:text-5xl'>
              ART OF PLANT
            </h1>
            <p className='mb-6 text-gray-700 text-md lg:text-lg'>
              ALL ABOUT ART OF NATURE
            </p>
            <hr className='bg-gray-500 border-2 border-gray-500 w-24' />
          </div>
        </div>

        <div
          id='articles'
          className='bg-gray-100 flex min-w-screen pt-6 lg:h-screen'
        >
          <div className='flex flex-col h-100 items-center mt-6 text-center w-screen'>
            <h1 className='mb-6 text-gray-700 text-xl'>LATEST ARTICLES</h1>
            <hr className='bg-gray-500 border-2 border-gray-500 w-20' />

            <div className='flex flex-col mt-8 w-3/4 lg:flex-row lg:space-x-8'>
              <div className='bg-white flex flex-col items-center max-w-20 mb-4 min-w-20 p-0 shadow lg:mb-0'>
                <img src='/images/article-1.jpg' className='w-max' />
                <div className='flex flex-col items-center py-5'>
                  <hr className='bg-gray-500 border-2 border-gray-500 mt-6 w-20' />
                  <p className='italic mt-4 text-gray-700 text-xl'>
                    Title Of Articles
                  </p>
                  <p className='font-thin mb-8 mt-2 mt-3 text-lg lg:text-md lg:w-60'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className='bg-white flex flex-col items-center max-w-20 mb-4 min-w-20 p-0 shadow lg:mb-0'>
                <img src='/images/article-2.jpg' className='w-max' />
                <div className='flex flex-col items-center py-5'>
                  <hr className='bg-gray-500 border-2 border-gray-500 mt-6 w-20' />
                  <p className='italic mt-4 text-gray-700 text-xl'>
                    Title Of Articles
                  </p>
                  <p className='font-thin mb-8 mt-2 mt-3 text-lg lg:text-md lg:w-60'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className='bg-white flex flex-col items-center max-w-20 mb-4 min-w-20 p-0 shadow lg:mb-0'>
                <img src='/images/article-3.jpg' className='w-max' />
                <div className='flex flex-col items-center py-5'>
                  <hr className='bg-gray-500 border-2 border-gray-500 mt-6 w-20' />
                  <p className='italic mt-4 text-gray-700 text-xl'>
                    Title Of Articles
                  </p>
                  <p className='font-thin mb-8 mt-2 mt-3 text-lg lg:text-md lg:w-60'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='about' className='bg-gray-100 flex pt-6 w-screen lg:h-screen'>
          <div className='flex flex-col w-screen lg:flex-row'>
            <img src='/images/about-us.jpg' className='w-max lg:w-1/2' />
            <div className='bg-white flex h-1/2 lg:h-screen lg:w-1/2'>
              <div className='flex flex-col items-center m-auto py-5 w-5/6'>
                <p className='font-bold text-2xl text-gray-700 lg:mt-4 lg:text-3xl'>
                  About
                </p>
                <hr className='bg-gray-500 border-2 border-gray-500 mt-6 w-20' />

                <p className='font-thin mt-2 mt-3 mt-5 text-justify text-lg'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id='subscribe' className='bg-gray-100 flex h-screen w-screen'>
          <div className='align-center flex flex-col h-100 items-center m-auto text-center'>
            <h1 className='mb-6 text-2xl text-gray-700'>SUBSCRIBE</h1>
            <p className='font-thin mb-6 text-gray-700 text-lg'>
              Sign up to our newsletters
            </p>
            <input
              className='bg-gray-200 border-4 border-white p-3 px-7 w-96'
              placeholder='Your email here..'
            />
            <button className='border-2 border-gray-600 mt-8 px-8 py-2 hover:bg-gray-600 hover:text-white'>
              SUBMIT
            </button>
          </div>
        </div>
      </main>
      <footer>
        <div className='flex flex-row justify-center px-8 py-8 lg:justify-end'>
          <Link href='#about'>
            <a className='items-center justify-center px-3 py-2 text-dark w-full lg:inline-flex lg:w-auto'>
              ABOUT
            </a>
          </Link>
          <Link href='#home'>
            <a className='items-center justify-center px-3 py-2 text-dark w-full lg:inline-flex lg:w-auto'>
              HOME
            </a>
          </Link>
          <Link href='#articles'>
            <a className='items-center justify-center px-3 py-2 text-dark w-full lg:inline-flex lg:w-auto'>
              ARTICLES
            </a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
