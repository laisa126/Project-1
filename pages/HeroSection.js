const HeroSection = () => {
    React.useEffect(() => {
        lucide.createIcons();
    }, []);

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
                        <span className="text-sm uppercase tracking-widest font-bold">Follow Me</span>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><i data-lucide="github" className="w-5 h-5"></i></a>
                            <a href="#" className="hover:text-white transition-colors"><i data-lucide="linkedin" className="w-5 h-5"></i></a>
                            <a href="#" className="hover:text-white transition-colors"><i data-lucide="twitter" className="w-5 h-5"></i></a>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-white/10">
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" 
                            alt="Alex Dev" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-64 p-6 glass-effect rounded-2xl z-20 border border-white/10 shadow-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                                <i data-lucide="check-circle" className="w-6 h-6"></i>
                            </div>
                            <div>
                                <div className="text-sm font-bold">Project Completed</div>
                                <div className="text-xs text-slate-400">24 mins ago</div>
                            </div>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-indigo-500"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};