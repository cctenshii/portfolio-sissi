import React from 'react';

const Footer = ({setCurrentPage}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="bg-pixel-dark border-t-4 border-pixel-moss/10 py-16 font-pixel text-pixel-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative">
                    <div className="text-pixel-moss/40 text-xs tracking-[0.5em] uppercase font-bold italic">
                        © {currentYear} SISSI_PIXELS // PORTFOLIO_V1.0
                    </div>

                    <div className="flex items-center space-x-16">
                        <a href="#"
                           className="text-pixel-gold/40 hover:text-pixel-rose transition-colors text-xs tracking-[0.3em] font-bold uppercase italic shadow-[0_4px_0_rgba(245,202,195,0.1)]">_GHUB_SEED</a>
                        <a href="#"
                           className="text-pixel-gold/40 hover:text-pixel-rose transition-colors text-xs tracking-[0.3em] font-bold uppercase italic shadow-[0_4px_0_rgba(245,202,195,0.1)]">_LNKD_ROOT</a>
                    </div>

                    <div className="text-pixel-rose/20 text-xs italic tracking-[0.4em] uppercase font-bold">
                        ✦ BUILT_ON_DREAMS_AND_VITE ✦
                    </div>
                </div>

                <div className="mt-16 pt-12 border-t-4 border-dashed border-pixel-moss/5 text-center">
                    <button
                        onClick={() => setCurrentPage('home')}
                        className="text-[10px] text-pixel-gold/20 hover:text-pixel-rose transition-colors tracking-[1.5em] uppercase cursor-pointer font-bold italic"
                    >
                        _REAWAKEN_DREAM
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
