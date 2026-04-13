import React from 'react';

const Hero = ({language = 'en', setCurrentPage}) => {
    const translations = {
        en: {
            level: "LEVEL_2026 // ACTIVE",
            role: "✦ WEB_DEVELOPER // FULL_STACK_DEVELOPER ✦",
            tagline: "Digital Portfolio.",
            explore: "_EXPLORE_PROJECTS",
            read: "_READ_SCROLL"
        },
        nl: {
            level: "NIVEAU_2026 // ACTIEF",
            role: "✦ WEB_ONTWIKKELAAR // FULL_STACK_ONTWIKKELAAR ✦",
            tagline: "Digitaal Portfolio.",
            explore: "_PROJECTEN_ONTDEKKEN",
            read: "_LEES_SCROLL"
        }
    };

    const t = translations[language];

    return (
        <section
            className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center p-6 bg-pixel-dark font-pixel">
            <div className="relative mb-12">
                <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter text-pixel-rose pixel-glow mb-4">
                    SISSI <span className="text-pixel-moss">WANG</span>
                </h1>
                <div
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-pixel-gold/40 tracking-[0.5em] uppercase">
                    {t.level}
                </div>
            </div>

            <div className="space-y-4 max-w-2xl">
                <p className="text-xl md:text-3xl text-pixel-gold italic tracking-widest bg-pixel-moss/10 px-6 py-3 border-4 border-dashed border-pixel-moss/30 rounded-lg shadow-[8px_8px_0px_#f5cac320]">
                    {t.role}
                </p>
                <p className="text-xs text-pixel-moss/60 uppercase tracking-[0.3em]">{t.tagline}</p>
            </div>

            <div className="mt-16 flex flex-wrap gap-12 justify-center">
                <button className="btn-pixel px-10 py-4 text-xl tracking-widest"
                        onClick={() => setCurrentPage("projects")}
                >
                    {t.explore}
                </button>

                <button
                    className="px-10 py-4 border-4 border-pixel-moss/30 text-pixel-moss hover:bg-pixel-moss/10 transition-all text-xl tracking-widest"
                    onClick={() => setCurrentPage("about")}
                >
                    {t.read}
                </button>
            </div>

            <div
                className="mt-24 grid grid-cols-3 gap-16 text-[10px] text-pixel-moss/40 tracking-[0.5em] uppercase italic">
                <div>HP: 100/100</div>
                <div>MP: 999/999</div>
                <div>XP: 2.0.2.4</div>
            </div>
        </section>
    );
};

export default Hero;
