const ProjectsPage = () => {
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
                        <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium">All</button>
                        <button className="px-4 py-2 rounded-lg glass-effect text-slate-400 text-sm font-medium hover:text-white transition-colors">Web App</button>
                        <button className="px-4 py-2 rounded-lg glass-effect text-slate-400 text-sm font-medium hover:text-white transition-colors">Mobile</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECT_DATA.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};