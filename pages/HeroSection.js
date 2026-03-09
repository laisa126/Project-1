const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-20 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium">
                        Available for new opportunities
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Building Digital <br />
                        <span className="gradient-text">Experiences</span> That <br />
                        Matter.
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                        I'm a Full Stack Engineer specializing in building exceptional digital products that are fast, accessible, and visually stunning.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center gap-2">
                            View My Work <i data-lucide="arrow-right" className="w-4 h-4"></i>
                        </a>
                        <a href="#contact" className="px-8 py-4 glass-effect hover:bg-white/10 text-white rounded-xl font-semibold transition-all">
                            Let's Talk
                        </a>
                    </div>
                    
                    <div className="mt-12 flex items-center gap-6 text-slate-500">
                        <div className="flex -space-x-3">
                            {[1,2,3,4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030712] bg-slate-800 flex items-center justify-center text-[10px]">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-medium">Trusted by 20+ companies worldwide</p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden glass-effect p-4">
                        <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center relative overflow-hidden">
                             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"></div>
                             <pre className="fira-code text-xs text-indigo-300/60 leading-relaxed">
{`const developer = {
  name: 'Alex Johnson',
  role: 'Full Stack Engineer',
  skills: ['React', 'Node.js', 'TypeScript'],
  passion: 'Building scalable web apps',
  status: 'Open to Work',
  sayHello: () => {
    console.log("Let's build something!");
  }
};

// Ready to start a project?
developer.sayHello();`}
                             </pre>
                        </div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-500/20 blur-2xl rounded-full"></div>
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};