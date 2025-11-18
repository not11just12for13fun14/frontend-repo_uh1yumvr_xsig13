import React from 'react'

export default function CTA() {
  return (
    <section className="relative py-20" id="pricing">
      <div className="absolute inset-0 bg-[radial-gradient(500px_160px_at_20%_20%,rgba(99,102,241,0.10),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-slate-900 via-slate-900 to-slate-800">
          <div className="grid md:grid-cols-2">
            <div className="p-10">
              <h3 className="text-white text-3xl font-bold tracking-tight">Start protecting your server in minutes</h3>
              <p className="mt-3 text-blue-200/80">Free forever for small communities. Upgrade for advanced automations and insights.</p>
              <div className="mt-8 flex items-center gap-3">
                <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all">
                  Add to Discord
                </a>
                <a href="#faq" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-blue-200/80 ring-1 ring-white/15 hover:text-white hover:ring-white/30 transition-all">
                  FAQs
                </a>
              </div>
            </div>
            <div className="p-10 border-t md:border-t-0 md:border-l border-white/10">
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-white font-semibold">Free</div>
                  <div className="text-3xl font-black text-white mt-2">$0</div>
                  <ul className="mt-3 text-blue-200/80 space-y-1">
                    <li>• Core security</li>
                    <li>• Anti‑raid & spam</li>
                    <li>• Basic logs</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-cyan-500/5 p-5 ring-1 ring-white/10">
                  <div className="text-white font-semibold">Pro</div>
                  <div className="text-3xl font-black text-white mt-2">$9<span className="text-base font-semibold">/mo</span></div>
                  <ul className="mt-3 text-blue-200/80 space-y-1">
                    <li>• Advanced automod</li>
                    <li>• Threat radar</li>
                    <li>• Compliance exports</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
