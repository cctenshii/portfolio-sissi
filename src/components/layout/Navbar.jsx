import React from 'react';

const Navbar = ({currentPage, setCurrentPage, language, setLanguage}) => {
    const socialLinks = {
        github: "https://github.com/cctenshii",
        linkedin: "https://www.linkedin.com/in/sissi-wang-877572208/"
    };

    const navItems = [
        {id: 'about', label: '✦_ABOUT'},
        {id: 'projects', label: '✦_ARCHIVE'},
        {id: 'contact', label: '✦_CONTACT'}
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-pixel-dark/95 border-b-4 border-pixel-moss/40 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 font-pixel">
                    {/* Logo / Name */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={() => setCurrentPage('home')}
                            className="text-2xl font-bold text-pixel-rose pixel-glow hover:text-pixel-gold transition-colors cursor-pointer tracking-widest"
                        >
                            SISSI_W.EXE
                        </button>
                    </div>

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className={`transition-all cursor-pointer text-base tracking-[0.2em] ${
                                    currentPage === item.id
                                        ? 'text-pixel-rose border-b-2 border-pixel-rose'
                                        : 'text-pixel-moss/70 hover:text-pixel-rose'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Language Switcher & Social Links */}
                    <div className="flex items-center space-x-6">
                        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                           className="text-pixel-moss/40 hover:text-pixel-rose transition-colors text-xs uppercase tracking-widest">
                            [GHUB]
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                           className="text-pixel-moss/40 hover:text-pixel-rose transition-colors text-xs uppercase tracking-widest">
                            [LNKD]
                        </a>

                        {/* Language Switcher */}
                        <div className="flex gap-2 mr-4 border-l border-pixel-moss/20 pl-4">
                            <button
                                onClick={() => setLanguage('en')}
                                className={`text-[10px] px-1 hover:text-pixel-rose transition-colors ${language === 'en' ? 'text-pixel-rose underline' : 'text-pixel-moss/40'}`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage('nl')}
                                className={`text-[10px] px-1 hover:text-pixel-rose transition-colors ${language === 'nl' ? 'text-pixel-rose underline' : 'text-pixel-moss/40'}`}
                            >
                                NL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
