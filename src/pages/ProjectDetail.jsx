import React from 'react';
import projectsData from '../data/projects.json';

const ProjectDetail = ({ language = 'en', projectId, onBack }) => {
    const project = projectsData.find(p => p.id === projectId);

    if (!project) {
        return (
            <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-pixel-dark font-pixel text-pixel-rose px-6 text-center">
                <p className="text-xl md:text-2xl uppercase tracking-[0.3em] md:tracking-[0.5em] mb-8">ERROR: FILE_NOT_FOUND</p>
                <button onClick={onBack} className="btn-pixel px-8 py-4">_RETURN_TO_ARCHIVE</button>
            </div>
        );
    }

    const translations = {
        en: {
            back: "_BACK_TO_ARCHIVE",
            status: "STATUS: DECRYPTED",
            techStack: "// TECH_STACK //",
            live: "VIEW_LIVE",
            source: "VIEW_SOURCE"
        },
        nl: {
            back: "_TERUG_NAAR_ARCHIEF",
            status: "STATUS: ONTSLEUTELD",
            techStack: "// TECHNOLOGIE_STAPEL //",
            live: "LIVE_BEKIJKEN",
            source: "BRON_CODE"
        }
    };

    const t = translations[language];

    return (
        <div className="min-h-[calc(100vh-64px)] py-12 md:py-20 bg-pixel-dark font-pixel text-pixel-cream overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Navigation */}
                <button 
                    onClick={onBack}
                    className="mb-8 md:mb-12 text-pixel-moss/60 hover:text-pixel-rose transition-colors text-[10px] md:text-xs tracking-widest uppercase italic font-bold flex items-center gap-2"
                >
                    &lt; {t.back}
                </button>

                <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
                    {/* Left Side: Images Gallery */}
                    <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                        {project.images.map((img, index) => (
                            <div key={index} className="pixel-card border-2 md:border-4 border-pixel-moss/10 overflow-hidden bg-pixel-moss/5">
                                <img 
                                    src={img} 
                                    alt={`${project.title} - ${index + 1}`}
                                    className="w-full h-auto md:grayscale md:hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Details */}
                    <div className="lg:sticky lg:top-32 h-fit space-y-8 md:space-y-12 order-1 lg:order-2">
                        <div className="relative">
                            <span className="text-pixel-rose text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] font-bold uppercase mb-2 md:mb-4 block">
                                ID: {project.id} // {t.status}
                            </span>
                            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-widest text-pixel-gold italic underline decoration-pixel-rose/20 underline-offset-4 md:underline-offset-8 leading-tight">
                                {project.title}
                            </h2>
                        </div>

                        <div className="space-y-6 md:space-y-8 bg-pixel-moss/5 p-6 md:p-10 border-l-4 border-pixel-rose">
                            <p className="text-lg md:text-xl leading-relaxed text-pixel-cream/80 uppercase italic whitespace-pre-line">
                                {project.longDescription[language]}
                            </p>
                        </div>

                        {project.technologies && (
                            <div className="space-y-4 md:space-y-6">
                                <h3 className="text-pixel-gold font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[12px] md:text-sm underline decoration-pixel-rose/20 underline-offset-4">
                                    {t.techStack}
                                </h3>
                                <div className="flex flex-wrap gap-2 md:gap-4">
                                    {project.technologies.map(tech => (
                                        <span key={tech} className="px-3 py-1.5 md:px-4 md:py-2 bg-pixel-dark border border-pixel-moss/30 text-pixel-moss text-[9px] md:text-[10px] tracking-widest">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pt-6 md:pt-12 flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-center">
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn-pixel w-full sm:w-auto px-10 py-5 text-lg tracking-widest text-center">
                                _{t.live}
                            </a>
                            <a href={project.links.source} target="_blank" rel="noopener noreferrer" className="text-pixel-moss/60 hover:text-pixel-rose transition-colors text-xs tracking-widest uppercase italic font-bold px-4 sm:px-0">
                                _{t.source}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
