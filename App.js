const { useState, useEffect } = React;
const { motion, AnimatePresence } = FramerMotion;

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate initial load
        const timer = setTimeout(() => {
            setIsLoading(false);
            // Re-initialize icons after loading
            setTimeout(() => lucide.createIcons(), 100);
        }, 1200);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-[#030712]">
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-indigo-500/20 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen relative bg-[#030712]">
            {/* Background Blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"></div>
            </div>

            <Navbar />
            
            <main>
                <HeroSection />
                <AboutPage />
                <ProjectsPage />
                <ContactPage />
            </main>

            <Footer />
        </div>
    );
};