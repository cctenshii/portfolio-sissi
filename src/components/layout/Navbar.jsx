import React, { useState } from 'react';

const Navbar = ({currentPage, setCurrentPage, language, setLanguage}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const socialLinks = {
        github: "https://github.com/cctenshii",
        linkedin: "https://www.linkedin.com/in/sissi-wang-877572208/"
    };

    const navItems = [
        {id: 'about', label: '✦_ABOUT'},
        {id: 'projects', label: '✦_ARCHIVE'},
        {id: 'contact', label: '✦_CONTACT'}
    ];

    const handleNavClick = (id) => {
        setCurrentPage(id);
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-pixel-dark/95 border-b-4 border-pixel-moss/40 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 font-pixel">
                    {/* Logo / Name */}
                    <div className="flex-shrink-0 flex items-center">
                        <button
                            onClick={() => handleNavClick('home')}
                            className="text-xl md:text-2xl font-bold text-pixel-rose pixel-glow hover:text-pixel-gold transition-colors cursor-pointer tracking-widest truncate"
                        >
                            SISSI_W.EXE
                        </button>
                    </div>

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`transition-all cursor-pointer text-base tracking-[0.2em] ${
                                    currentPage === item.id
                                        ? 'text-pixel-rose border-b-2 border-pixel-rose'
                                        : 'text-pixel-moss/70 hover:text-pixel-rose'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        
                        {/* Social & Language Links (Desktop) */}
                        <div className="flex items-center space-x-4 border-l border-pixel-moss/20 pl-6 ml-4">
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                               className="text-pixel-moss/40 hover:text-pixel-rose transition-colors text-xs uppercase tracking-widest">
                                [GHUB]
                            </a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                               className="text-pixel-moss/40 hover:text-pixel-rose transition-colors text-xs uppercase tracking-widest">
                                [LNKD]
                            </a>
                            <div className="flex gap-2">
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

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-pixel-moss hover:text-pixel-rose p-2 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-pixel-dark border-t-2 border-pixel-moss/20 font-pixel">
                    <div className="px-4 pt-4 pb-6 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className={`block w-full text-left transition-all cursor-pointer text-lg tracking-[0.2em] py-2 ${
                                    currentPage === item.id
                                        ? 'text-pixel-rose pl-4 border-l-4 border-pixel-rose'
                                        : 'text-pixel-moss/70 hover:text-pixel-rose pl-4 border-l-4 border-transparent'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        
                        <div className="flex flex-wrap gap-6 pt-6 border-t border-pixel-moss/10 px-4">
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"
                               className="text-pixel-moss/40 hover:text-pixel-rose transition-colors text-sm uppercase tracking-widest">
                                [GHUB]
                            </a>
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
                               className="text-pixel-moss/40 hover:text-pixel-rose transition-colors text-sm uppercase tracking-widest">
                                [LNKD]
                            </a>
                            <div className="flex gap-4">
                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`text-xs px-2 py-1 hover:text-pixel-rose transition-colors ${language === 'en' ? 'bg-pixel-rose/10 text-pixel-rose' : 'text-pixel-moss/40'}`}
                                >
                                    EN
                                </button>
                                <button
                                    onClick={() => setLanguage('nl')}
                                    className={`text-xs px-2 py-1 hover:text-pixel-rose transition-colors ${language === 'nl' ? 'bg-pixel-rose/10 text-pixel-rose' : 'text-pixel-moss/40'}`}
                                >
                                    NL
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
