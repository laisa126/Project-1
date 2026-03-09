const SectionHeading = ({ title, subtitle, noCenter }) => (
    <div className={`mb-16 ${noCenter ? '' : 'text-center'}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <div className={`h-1.5 w-20 bg-indigo-600 rounded-full mb-6 ${noCenter ? '' : 'mx-auto'}`}></div>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {subtitle}
        </p>
    </div>
);