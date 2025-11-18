import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-blue-200/70">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
            <span>© {new Date().getFullYear()} AegisBot</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
