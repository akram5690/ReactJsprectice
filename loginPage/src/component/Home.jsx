import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Empdatashow from './employee/Empdatashow'


const Home = () => {

  return (
    <>
      <Navbar />

      <div className="relative isolate overflow-hidden bg-gray-900 mt-18 py-24 sm:py-32">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80"
          alt=""
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />

        {/* Background blur shapes */}
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Welcome to Dashboard
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Manage user accounts, admin activities, and job applications all in one place. Stay organized and in control with your personalized panel.
            </p>
          </div>

          {/* Links */}
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">View Registered Users <span aria-hidden="true">→</span></a>
              <a href="#">Admin Login Panel <span aria-hidden="true">→</span></a>
              <a href="#">System Overview <span aria-hidden="true">→</span></a>
              <a href="#">Contact Developer <span aria-hidden="true">→</span></a>
            </div>

            {/* Stats */}
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base text-gray-300">Total Users</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">120</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base text-gray-300">Admins Active</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">5</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base text-gray-300">Applications Received</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">240+</dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base text-gray-300">System Uptime</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">99.9%</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <Empdatashow />
    </>
  )
}

export default Home
