import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f2]">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-10"
    style={{
      backgroundImage:
        "url('https://www.leadsnextech.com/_next/static/media/bg.153fe1e6.jpg')",
    }}
  ></div>

  {/* Soft Gradient Glow */}
  <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

  <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-20 lg:flex-row lg:justify-between">
    
    {/* Left Content */}
    <div className="max-w-2xl text-center lg:text-left">
      <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-white/90 px-6 py-3 text-base font-medium text-gray-700 shadow-lg backdrop-blur-sm">
  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-lg">
    ✍️
  </span>

  <span className="tracking-wide">
    Your thoughts deserve a beautiful place to breathe
  </span>
</p>

      <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-7xl">
        Clear your mind.
        <br />
        <span className="text-gray-500">
          Understand yourself better.
        </span>
      </h1>

      <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600">
        A guided journaling space designed for clarity, reflection,
        decision-making, growth, and direction. Capture your thoughts
        before they dissolve into the static of everyday life.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
        <Link to={'/login'} className="rounded-2xl bg-gray-900 px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-gray-800">
          Login
        </Link>

        <Link to={'/login'} className="rounded-2xl border border-gray-300 bg-white px-8 py-4 text-sm font-semibold text-gray-700 transition hover:border-gray-900 hover:text-gray-900">
          Register
        </Link>
      </div>
    </div>

    {/* Right Card */}
    <div className="mt-16 w-full max-w-md lg:mt-0">
      <div className="rounded-3xl border border-white/50 bg-white/70 p-8 shadow-2xl backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-900">
            Today’s Reflection
          </h2>

          <div className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
            Journal
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl bg-[#f8f6f2] p-5">
            <p className="mb-2 text-sm font-medium text-gray-500">
              What excited me today?
            </p>

            <p className="text-gray-700">
              The feeling that I’m slowly becoming more disciplined and
              intentional with my time.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8f6f2] p-5">
            <p className="mb-2 text-sm font-medium text-gray-500">
              What drained my energy?
            </p>

            <p className="text-gray-700">
              Too much distraction and not enough silence.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f8f6f2] p-5">
            <p className="mb-2 text-sm font-medium text-gray-500">
              What did I learn?
            </p>

            <p className="text-gray-700">
              Clarity often appears after writing, not before it.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Wave */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
        fill="white"
      />
    </svg>
  </div>
</section>
  )
}

export default Hero
