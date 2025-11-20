import { motion } from 'framer-motion'

export default function Hero({ inviteData }) {
  const guild = inviteData?.guild
  const bannerUrl = guild?.banner
    ? `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=1024`
    : null
  const iconUrl = guild?.id && guild?.icon
    ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png?size=256`
    : '/flame-icon.svg'

  const members = inviteData?.approximate_member_count
  const online = inviteData?.approximate_presence_count

  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] rounded-full bg-indigo-500 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-blue-500 blur-3xl" />
      </div>

      {bannerUrl && (
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url(${bannerUrl})`, backgroundSize: 'cover', backgroundPosition: 'center'}} />
      )}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src={iconUrl} alt="Ayodhya" className="w-16 h-16 rounded-2xl shadow-lg" />
              <div>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                  {guild?.name || 'Ayodhya'}
                </h1>
                {guild?.description && (
                  <p className="text-blue-100/80 mt-2 max-w-prose">{guild.description}</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 text-blue-100/90 mb-8">
              {typeof members === 'number' && (
                <div className="bg-white/5 rounded-xl px-4 py-2">
                  <span className="font-semibold text-white">{members.toLocaleString()}</span> members
                </div>
              )}
              {typeof online === 'number' && (
                <div className="bg-white/5 rounded-xl px-4 py-2">
                  <span className="font-semibold text-emerald-300">{online.toLocaleString()}</span> online
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://discord.gg/ayodhya"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-500/20 transition"
              >
                Join the Community
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl font-semibold transition"
              >
                Explore Features
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
              <iframe
                title="Discord Widget"
                src="https://discord.com/widget?id=1092626528533518396&theme=dark"
                width="100%"
                height="100%"
                allowTransparency={true}
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </div>
            <p className="text-xs text-blue-200/60 mt-2">Live community preview</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
