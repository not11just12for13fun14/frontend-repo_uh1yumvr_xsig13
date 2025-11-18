import React from 'react'
import { Menu, ShieldCheck, Github } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl shadow-2xl shadow-blue-500/10">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-blue-500/40 via-cyan-400/40 to-indigo-500/40 blur"></div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 ring-1 ring-white/10">
                  <ShieldCheck className="h-6 w-6 text-cyan-300" />
                </div>
              </div>
              <span className="text-white font-semibold tracking-tight">AegisBot</span>
              <span className="hidden sm:inline text-xs text-blue-200/70 px-2 py-0.5 rounded-md border border-white/10 bg-white/5">Security</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-sm text-blue-100/80">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#trust" className="hover:text-white transition-colors">Why us</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=0000000000&permissions=8&scope=bot%20applications.commands"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all active:scale-[0.98]"
              >
                Add to Discord
              </a>
              <a
                href="#"
                className="p-2 rounded-xl border border-white/10 text-blue-200/80 hover:text-white hover:border-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <button className="md:hidden p-2 rounded-xl border border-white/10 text-blue-200/80">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
