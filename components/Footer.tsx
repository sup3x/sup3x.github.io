export function Footer() {
  return (
    <footer className="border-t border-cyan-500/10 py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          Built with <span className="text-slate-400 hover:text-cyan-400 transition-colors">Next.js</span> and deployed on{" "}
          <span className="text-slate-400 hover:text-cyan-400 transition-colors">GitHub Pages</span>
        </p>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 animate-pulse" />
          <p className="font-mono text-xs text-slate-600">
            &copy; {new Date().getFullYear()} sup3x
          </p>
        </div>
      </div>
    </footer>
  );
}
