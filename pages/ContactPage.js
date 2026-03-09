const ContactPage = () => {
    const [formState, setFormState] = React.useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSent, setIsSent] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSent(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Let's work together</h2>
                        <p className="text-slate-400 text-lg mb-10">
                            Have a project in mind? I'm currently available for freelance work and full-time positions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                                    <i data-lucide="mail"></i>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Email me at</div>
                                    <div className="text-lg font-medium">hello@alexdev.com</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                                    <i data-lucide="map-pin"></i>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500">Location</div>
                                    <div className="text-lg font-medium">San Francisco, CA</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            {['github', 'twitter', 'linkedin', 'dribbble'].map(social => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition-all">
                                    <i data-lucide={social} className="w-5 h-5"></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="glass-effect p-8 rounded-3xl">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Your Name</label>
                                    <input 
                                        required
                                        type="text" 
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        placeholder="John Doe"
                                        value={formState.name}
                                        onChange={e => setFormState({...formState, name: e.target.value})}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <input 
                                        required
                                        type="email" 
                                        className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        placeholder="john@example.com"
                                        value={formState.email}
                                        onChange={e => setFormState({...formState, email: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Message</label>
                                <textarea 
                                    required
                                    rows="4"
                                    className="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                    placeholder="Tell me about your project..."
                                    value={formState.message}
                                    onChange={e => setFormState({...formState, message: e.target.value})}
                                ></textarea>
                            </div>
                            <button 
                                disabled={isSubmitting}
                                type="submit" 
                                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : isSent ? (
                                    <>Message Sent! <i data-lucide="check" className="w-5 h-5"></i></>
                                ) : (
                                    <>Send Message <i data-lucide="send" className="w-5 h-5"></i></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};