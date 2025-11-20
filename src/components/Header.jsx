import { useState, useEffect } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({ inviteData }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const guild = inviteData?.guild
  const iconUrl = guild?.id && guild?.icon
    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=128`
    : '/flame-icon.svg'

  return (
    <header className={classNames(
      'fixed top-0 inset-x-0 z-50 transition-all',
      scrolled ? 'backdrop-blur bg-slate-900/70 border-b border-white/10' : 'bg-transparent'
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={iconUrl} alt="Ayodhya" className="w-8 h-8 rounded-lg" />
          <span className="text-white font-semibold tracking-tight">{guild?.name || 'Ayodhya'}</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-blue-100/80">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#community" className="hover:text-white transition-colors">Community</a>
        </nav>
        <a
          href="https://discord.gg/ayodhya"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          Join Server
        </a>
      </div>
    </header>
  )
}
