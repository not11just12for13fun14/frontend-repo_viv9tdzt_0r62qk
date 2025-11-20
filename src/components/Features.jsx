export default function Features() {
  const features = [
    {
      title: 'Community Events',
      desc: 'Regular activities, giveaways, and themed events to keep things lively.',
    },
    {
      title: 'Chill Voice Rooms',
      desc: 'Hang out, study together, or just vibe with music in curated channels.',
    },
    {
      title: 'Helpful Staff',
      desc: 'A friendly moderation team to keep the server safe and welcoming.',
    },
    {
      title: 'Leveling & Roles',
      desc: 'Earn roles as you participate and unlock exclusive channels.',
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">What you get</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-xl p-5 text-blue-100/90">
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
