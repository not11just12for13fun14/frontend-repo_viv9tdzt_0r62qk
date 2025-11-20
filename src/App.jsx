import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  const [invite, setInvite] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchInvite = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/discord/invite/ayodhya`)
        if (!res.ok) throw new Error('Failed to fetch invite info')
        const data = await res.json()
        setInvite(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchInvite()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]" />

      <Header inviteData={invite} />

      <main className="relative">
        {loading ? (
          <div className="min-h-[60vh] flex items-center justify-center">
            <p className="text-blue-200">Loading server details...</p>
          </div>
        ) : error ? (
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
              <p className="text-red-300">{error}</p>
              <p className="text-blue-200/80 text-sm mt-2">We’ll still show the site, but live stats may be unavailable.</p>
            </div>
          </div>
        ) : (
          <>
            <Hero inviteData={invite} />
            <section id="about" className="py-20">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-white mb-4">Welcome to Ayodhya</h2>
                    <p className="text-blue-100/80 leading-relaxed">
                      A vibrant corner of the internet to hang out, make friends, and vibe. Whether you’re into gaming, music, or just late-night conversations, there’s a spot for you here.
                    </p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <h3 className="text-white font-semibold mb-2">Live Stats</h3>
                    <ul className="text-blue-100/90 text-sm space-y-1">
                      <li><span className="text-white font-medium">Members:</span> {invite?.approximate_member_count?.toLocaleString?.() || '—'}</li>
                      <li><span className="text-white font-medium">Online:</span> {invite?.approximate_presence_count?.toLocaleString?.() || '—'}</li>
                      <li><span className="text-white font-medium">Invite:</span> {invite?.code || 'ayodhya'}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <Features />
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default App
