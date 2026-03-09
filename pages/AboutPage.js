const AboutPage = () => {
    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"] },
        { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis"] },
        { category: "Tools", items: ["Docker", "AWS", "Git", "Figma", "Vercel"] }
    ];

    return (
        <section id="about" className="py-24 px-6 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
                <SectionHeading 
                    title="About Me" 
                    subtitle="A brief introduction to my background and skills" 
                />

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold">Passionate about solving complex problems through code.</h3>
                        <p className="text-slate-400 leading-relaxed">
                            With over 5 years of experience in web development, I've had the privilege of working with startups and established brands to build high-performance web applications. My approach focuses on clean architecture, user-centric design, and scalable codebases.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentorship.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="p-4 glass-effect rounded-2xl">
                                <div className="text-3xl font-bold text-indigo-500">5+</div>
                                <div className="text-sm text-slate-400">Years Experience</div>
                            </div>
                            <div className="p-4 glass-effect rounded-2xl">
                                <div className="text-3xl font-bold text-indigo-500">40+</div>
                                <div className="text-sm text-slate-400">Projects Completed</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {skills.map((skillGroup, idx) => (
                            <div key={idx}>
                                <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                    {skillGroup.category}
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {skillGroup.items.map(skill => (
                                        <SkillBadge key={skill} name={skill} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};