const Footer = () => (
    <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
                <div className="text-xl font-bold tracking-tighter">ALEX<span className="text-indigo-500">.</span>DEV</div>
                <p className="text-slate-500 text-sm">© 2024 Alex Johnson. All rights reserved.</p>
            </div>
            
            <div className="flex gap-8">
                {NAV_LINKS.map(link => (
                    <a key={link.label} href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
                Built with <span className="text-rose-500">♥</span> using React & Tailwind
            </div>
        </div>
    </footer>
);