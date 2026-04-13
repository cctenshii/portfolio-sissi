import React from 'react';
import sissiImage from '../assets/sissi_image.jpg';

const About = ({language = 'en'}) => {
    const translations = {
        en: {
            title: "✦_ABOUT",
            subtitle: "// ARCHIVE_ID: SISSI_WANG // 2026",
            quote: "Creativity meets technology to shape new worlds.",
            description: "I am a Creative Media and Game Technologies student with a passion for designing interactive experiences and bringing ideas to life through technology and creativity.",
            skillsetTitle: "// ARCHIVE_SKILLSET //",
            signal: "SIGNAL_RECEIVED"
        },
        nl: {
            title: "✦_OVER",
            subtitle: "// ARCHIEF_ID: SISSI_WANG // 2026",
            quote: "Creativiteit en technologie komen samen om nieuwe werelden te vormen.",
            description: "Ik ben een Creative Media en Game Technologie student met een passie voor het ontwerpen van interactieve ervaringen en het tot leven brengen van ideeën met technologie en creativiteit.",
            skillsetTitle: "// ARCHIEF_VAARDIGHEDEN //",
            signal: "SIGNAAL_ONTVANGEN"
        }
    };

    const t = translations[language];

    return (
        <div className="min-h-[calc(100vh-64px)] py-20 bg-pixel-dark text-pixel-cream font-pixel">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24 relative">
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-widest pixel-glow text-pixel-rose mb-4">{t.title}</h2>
                    <div className="mt-2 h-2 w-48 bg-pixel-moss/40 mx-auto rounded-full"></div>
                    <p className="mt-6 text-xs tracking-[0.5em] text-pixel-gold/40 uppercase font-bold italic">
                        {t.subtitle}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div
                            className="bg-pixel-moss/5 p-10 border-4 border-dashed border-pixel-moss/20 rounded-3xl relative">
                            <div
                                className="absolute top-0 left-10 -mt-3 bg-pixel-dark px-4 text-pixel-rose text-xs tracking-widest uppercase italic font-bold italic">{t.signal}
                            </div>
                            <p className="text-2xl leading-relaxed text-pixel-gold font-bold italic opacity-90">
                                "{t.quote}"
                            </p>
                        </div>

                        <p className="text-xl leading-relaxed text-pixel-moss tracking-wider border-t-4 border-pixel-moss/10 pt-10 uppercase font-bold italic">
                            {t.description}
                        </p>

                        <div className="pt-8">
                            <h3 className="font-bold text-pixel-gold uppercase tracking-[0.4em] mb-10 text-sm italic underline decoration-pixel-rose/40 decoration-4 underline-offset-8">
                                {t.skillsetTitle}
                            </h3>
                            <div className="flex flex-wrap gap-6">
                                {['HTML_CSS', 'PHP', 'MYSQL', 'JAVASCRIPT', 'EXCALIBUR_JS', 'TAILWIND_CSS', 'LARAVEL', 'BLADE', 'REACT', 'ADOBE'].map((skill) => (
                                    <span key={skill}
                                          className="px-6 py-3 bg-pixel-moss text-pixel-dark font-bold text-xs tracking-widest hover:bg-pixel-rose transition-all cursor-crosshair shadow-[4px_4px_0px_#f5cac340] uppercase">
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative group p-4">
                        <div
                            className="absolute inset-0 bg-pixel-rose/20 rotate-6 transition-transform group-hover:rotate-0 rounded-3xl"></div>
                        <div
                            className="relative bg-pixel-dark/40 aspect-square pixel-card flex flex-col items-center justify-center p-8 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-pixel-gold/20"></div>
                            <div
                                className="w-full h-full relative overflow-hidden rounded-2xl border-4 border-pixel-moss/20 shadow-inner">
                                {/*<img*/}
                                {/*    src={sissiImage}*/}
                                {/*    alt="Sissi Wang"*/}
                                {/*    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"*/}
                                {/*/>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
