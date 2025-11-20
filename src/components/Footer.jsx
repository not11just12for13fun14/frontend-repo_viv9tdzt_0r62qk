export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-blue-200/70 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Ayodhya Community. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://discord.gg/ayodhya" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Join</a>
          <a href="/test" className="hover:text-white transition-colors">System Status</a>
        </div>
      </div>
    </footer>
  )
}
