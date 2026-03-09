const ProjectsPage = () => {
    const [filter, setFilter] = React.useState('All');
    
    const filteredProjects = filter === 'All' 
        ? PROJECT_DATA 
        : PROJECT_DATA.filter(p => p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <SectionHeading 
                            title="Featured Projects" 
                            subtitle="A selection of my recent work and personal projects" 
                            noCenter
                        />
                    </div>
                    <div className="flex gap-2">
                        {['All', 'Web App', 'Web3', 'AI'].map(cat => (
                            <button 
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === cat ? 'bg-indigo-600 text-white' : 'glass-effect text-slate-400 hover:text-white'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div 
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard key={project.title} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};