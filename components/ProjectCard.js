const ProjectCard = ({ project }) => {
    React.useEffect(() => {
        lucide.createIcons();
    }, []);

    return (
        <motion.div 
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -10 }}
            className="group glass-effect rounded-3xl overflow-hidden flex flex-col h-full"
        >
            <div className="relative h-64 overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    <a href={project.link} className="text-sm font-semibold flex items-center gap-2 text-indigo-400 hover:text-indigo-300">
                        View Case Study <i data-lucide="arrow-up-right" className="w-4 h-4"></i>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};