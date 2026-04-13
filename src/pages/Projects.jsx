import React, {useState} from 'react';
import projectsData from '../data/projects.json';

const ProjectCard = ({project, language, t, onProjectClick}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    return (
        <div
            onClick={() => onProjectClick(project.id)}
            className="relative group p-4 md:p-8 bg-pixel-moss/5 pixel-card hover:bg-pixel-moss/10 transition-all cursor-crosshair group/card"
        >
            <div className="absolute top-0 right-0 p-3 md:p-4 flex flex-col items-end gap-2 z-10">
                <div className="text-[8px] md:text-[10px] text-pixel-gold/40 font-bold uppercase italic tracking-widest font-mono">
                    ID: {project.id}
                </div>
                {project.isSchoolProject && (
                    <div
                        className="bg-pixel-rose/20 text-pixel-rose text-[7px] md:text-[8px] px-1.5 py-0.5 md:px-2 md:py-1 font-bold tracking-widest border border-pixel-rose/40">
                        [ {t.schoolTag} ]
                    </div>
                )}
            </div>

            {/* Image Slider Area */}
            <div
                className="bg-pixel-dark h-48 md:h-72 mb-6 md:mb-8 relative overflow-hidden flex flex-col items-center justify-center border-b-4 border-pixel-moss/20 group/slider">
                {project.images && project.images.length > 0 ? (
                    <>
                        <img
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} - ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 md:grayscale md:group-hover:grayscale-0"
                        />

                        {/* Navigation Arrows (shown on hover or always on mobile) */}
                        {project.images.length > 1 && (
                            <div
                                className="absolute inset-0 flex items-center justify-between px-2 md:px-4 md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity">
                                <button
                                    onClick={prevImage}
                                    className="bg-pixel-dark/80 text-pixel-rose p-1.5 md:p-2 border border-pixel-rose/30 hover:bg-pixel-rose hover:text-pixel-dark transition-all font-bold"
                                >
                                    &lt;
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="bg-pixel-dark/80 text-pixel-rose p-1.5 md:p-2 border border-pixel-rose/30 hover:bg-pixel-rose hover:text-pixel-dark transition-all font-bold"
                                >
                                    &gt;
                                </button>
                            </div>
                        )}

                        {/* Image Counter/Dots */}
                        {project.images.length > 1 && (
                            <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 md:gap-2">
                                {project.images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1 w-1 md:h-1.5 md:w-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'bg-pixel-rose w-3 md:w-4' : 'bg-pixel-gold/30'}`}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <span
                            className="text-pixel-gold/30 text-[10px] md:text-xs tracking-widest text-center uppercase italic leading-loose font-bold italic px-4">
                          [ RENDERING_DREAM... ]<br/>
                          LUMINESCENCE_98%
                        </span>
                        <div className="mt-4 md:mt-8 text-pixel-rose/10 text-2xl md:text-4xl animate-pulse">✦</div>
                    </>
                )}
                <div
                    className="absolute bottom-0 left-0 w-full h-1 bg-pixel-rose/20 transform -translate-x-full md:group-hover:translate-x-0 transition-transform duration-700"></div>
            </div>

            <div className="space-y-4 md:space-y-6">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl md:text-3xl font-bold tracking-widest text-pixel-gold group-hover/card:text-pixel-rose transition-colors italic underline decoration-pixel-rose/20 underline-offset-4 md:underline-offset-8 uppercase leading-tight">
                        {project.title}
                    </h3>
                    <span
                        className="hidden md:block text-[10px] text-pixel-rose opacity-0 group-hover/card:opacity-100 transition-opacity tracking-[0.2em] font-bold shrink-0">
                        [ {t.viewDetail} ]
                    </span>
                </div>
                <p className="text-[10px] md:text-xs tracking-widest text-pixel-moss/60 font-bold opacity-80 uppercase italic line-clamp-3 md:line-clamp-none">
                    // {project.description[language]}
                </p>
                <div className="pt-4 md:pt-8 flex flex-wrap gap-6 md:gap-12 items-center border-t border-pixel-moss/10"
                     onClick={(e) => e.stopPropagation()}>
                    <a href={project.links.live} target="_blank"
                       className="text-pixel-gold font-bold hover:text-pixel-rose transition-colors text-[10px] md:text-xs tracking-widest uppercase italic">
                        {t.viewLive}
                    </a>
                    <a href={project.links.source} target="_blank"
                       className="text-pixel-moss/60 font-bold hover:text-pixel-rose transition-colors text-[10px] md:text-xs tracking-widest uppercase italic">
                        {t.viewSource}
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = ({language = 'en', onProjectClick}) => {
    const projects = projectsData;

    const translations = {
        en: {
            title: "✦_ARCHIVE",
            subtitle: "// DATABASE_ENTRY_POINT // SISSI_WANG // 2026",
            viewLive: "_WAKE_MODULE",
            viewSource: "_SOURCE_ESSENCE",
            viewDetail: "OPEN_FILE",
            schoolTag: "SCHOOL_PROJECT"
        },
        nl: {
            title: "✦_ARCHIEF",
            subtitle: "// DATABASE_TOEGANGSPUNT // SISSI_WANG // 2026",
            viewLive: "_LIVE_BEKIJKEN",
            viewSource: "_BRON_CODE",
            viewDetail: "BESTAND_OPENEN",
            schoolTag: "SCHOOL_PROJECT"
        }
    };

    const t = translations[language];

    return (
        <div className="min-h-[calc(100vh-64px)] py-12 md:py-20 bg-pixel-dark font-pixel text-pixel-cream overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-24 relative">
                    <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-widest pixel-glow text-pixel-rose mb-4">{t.title}</h2>
                    <div className="mt-2 h-1 md:h-2 w-32 md:w-48 bg-pixel-moss/40 mx-auto rounded-full"></div>
                    <p className="mt-6 md:mt-8 text-[8px] md:text-xs tracking-[0.3em] md:tracking-[0.6em] text-pixel-gold/40 uppercase font-bold italic px-4">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 relative">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            language={language}
                            t={t}
                            onProjectClick={onProjectClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
