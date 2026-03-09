const SkillBadge = ({ name }) => (
    <div className="px-4 py-2 glass-effect rounded-xl text-sm font-medium text-slate-300 flex items-center gap-2 border border-white/5 hover:border-indigo-500/50 transition-all cursor-default">
        <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
        {name}
    </div>
);