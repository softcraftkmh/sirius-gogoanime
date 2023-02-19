'use client'

import Link from 'next/link'

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Oops! Something went wrong.
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please try again later, or contact support if the problem persists.
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            type="button"
            href="/"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
