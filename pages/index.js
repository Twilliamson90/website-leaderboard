import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="gradient leading-relaxed tracking-wide flex flex-col">
        <nav id="header" className="w-full z-30 top-0 text-white py-1 lg:py-6">
          <div
            className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6"
          >
            <div className="pl-4 flex items-center">
              <a
                className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                href="#"
              >
                <svg
                  className="h-6 w-6 inline-block fill-current text-yellow-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z" />
                </svg>
                Website Leaderboard
              </a>
            </div>

            <div className="block lg:hidden pr-4">
              <button
                id="nav-toggle"
                className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-green-500 appearance-none focus:outline-none"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <div
              className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
              id="nav-content"
            >
              <ul className="list-reset lg:flex justify-end flex-1 items-center">
                <li className="mr-3">
                  <a
                    className="inline-block py-2 px-4 text-black font-bold no-underline"
                    href="#"
                    >Active</a
                  >
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    href="#"
                    >link</a
                  >
                </li>
                <li className="mr-3">
                  <a
                    className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    href="#"
                    >link</a
                  >
                </li>
              </ul>
              <button
                id="navAction"
                className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
              >
                Action
              </button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto h-screen">
          <div className="text-center px-3 lg:px-0">
            <h1
              className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"
            >
              Where does your site rank?
            </h1>
            <p
              className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8"
            >
              Sub-hero message, not too long and not too short. Make it just right!
            </p>

            <button
              className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
            >
              Sign Up
            </button>
            <a
              href="#"
              className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
              >View Additional Action</a
            >
          </div>

          <div className="flex items-center w-full mx-auto content-end">
            <div
              className="browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}