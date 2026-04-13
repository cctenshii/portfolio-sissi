import React, {useState} from 'react';

const Contact = ({language = 'en'}) => {
    const [status, setStatus] = useState("");

    const translations = {
        en: {
            title: "✦_CONTACT",
            subtitle: "// NEW_WHISPER_INTERFACE // 2026",
            channel: "CHANNEL: LUMOS_99",
            status: "STATUS: DREAMING",
            messageSown: "_MESSAGE_SOWN_",
            messageSuccess: "EMAIL_CLIENT_OPENED. COMPLETE_THE_WHISPER.",
            startNewWhisper: "_START_NEW_WHISPER",
            signalIdentifier: "// IDENTIFIER //",
            namePlaceholder: "NAME_OR_ALIAS",
            signalAddress: "// SIGNAL_ADDRESS //",
            emailPlaceholder: "USER@DREAM.NET",
            whisperContent: "// CONTENT //",
            messagePlaceholder: "PLANT_YOUR_WORDS_HERE...",
            signalLost: "_EMAIL_CLIENT_NOT_FOUND_",
            sending: "_OPENING_EMAIL_CLIENT...",
            castWhisper: "_SEND_VIA_EMAIL"
        },
        nl: {
            title: "✦_CONTACT",
            subtitle: "// NIEUWE_FLUISTER_INTERFACE // 2026",
            channel: "KANAAL: LUMOS_99",
            status: "STATUS: DROMEND",
            messageSown: "_BERICHT_GEZAAID_",
            messageSuccess: "EMAIL_CLIENT_GEOPEND. VOLTOOI_DE_FLUISTERING.",
            startNewWhisper: "_START_NIEUWE_FLUISTERING",
            signalIdentifier: "// IDENTIFICATIE //",
            namePlaceholder: "NAAM_OF_ALIAS",
            signalAddress: "// SIGNAAL_ADRES //",
            emailPlaceholder: "GEBRUIKER@DROOM.NET",
            whisperContent: "// INHOUD //",
            messagePlaceholder: "PLANT_HIER_JE_WOORDEN...",
            signalLost: "_EMAIL_CLIENT_NIET_GEVONDEN_",
            sending: "_EMAIL_CLIENT_OPENEN...",
            castWhisper: "_VERSTUUR_VIA_EMAIL"
        }
    };

    const t = translations[language];

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        );

        const mailtoLink = `mailto:1092146@hr.nl?subject=${subject}&body=${body}`;

        // Try opening email client
        window.location.href = mailtoLink;

        // Simulate success state
        setTimeout(() => {
            setStatus("success");
        }, 500);

        // Fallback if nothing happens
        setTimeout(() => {
            if (status !== "success") {
                alert("If your email client didn't open, please email me at: sissiwang2003@email.com");
                setStatus("error");
            }
        }, 1500);
    };

    return (
        <div className="min-h-[calc(100vh-64px)] py-20 bg-pixel-dark font-pixel text-pixel-cream overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-24 relative">
                    <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-widest pixel-glow text-pixel-rose mb-4">
                        {t.title}
                    </h2>
                    <div className="mt-2 h-2 w-48 bg-pixel-moss/40 mx-auto rounded-full"></div>
                    <p className="mt-8 text-xs tracking-[0.6em] text-pixel-gold/40 uppercase font-bold italic">
                        {t.subtitle}
                    </p>
                </div>

                <div className="max-w-3xl mx-auto p-16 pixel-card relative bg-pixel-dark/40 overflow-hidden">

                    <div
                        className="absolute top-0 left-0 p-6 text-[10px] text-pixel-moss/40 tracking-[0.4em] font-bold uppercase italic font-mono">
                        {t.channel}
                    </div>

                    <div
                        className="absolute bottom-0 right-0 p-6 text-[10px] text-pixel-moss/40 tracking-[0.4em] font-bold uppercase italic font-mono">
                        {t.status}
                    </div>

                    {status === "success" ? (
                        <div className="text-center py-24 border-4 border-dashed border-pixel-moss/20 rounded-3xl">
                            <div
                                className="text-pixel-rose text-4xl font-bold mb-8 tracking-widest pixel-glow uppercase italic animate-bounce">
                                {t.messageSown}
                            </div>
                            <p className="text-pixel-gold/60 text-sm tracking-[0.3em] mb-12 uppercase italic leading-loose">
                                {t.messageSuccess}
                            </p>
                            <button
                                onClick={() => setStatus("")}
                                className="btn-pixel px-16 py-5 text-xl tracking-widest"
                            >
                                {t.startNewWhisper}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-16">

                            <div>
                                <label
                                    className="block text-xs font-bold text-pixel-gold/60 uppercase tracking-[0.4em] mb-6 italic underline decoration-pixel-rose/20 underline-offset-8 font-mono">
                                    {t.signalIdentifier}
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    className="w-full px-8 py-6 bg-pixel-dark border-b-4 border-pixel-moss/30 text-pixel-rose focus:border-pixel-rose focus:bg-pixel-rose/5 outline-none transition-all font-pixel tracking-[0.4em] uppercase text-lg italic"
                                    placeholder={t.namePlaceholder}
                                />
                            </div>

                            <div>
                                <label
                                    className="block text-xs font-bold text-pixel-gold/60 uppercase tracking-[0.4em] mb-6 italic underline decoration-pixel-rose/20 underline-offset-8 font-mono">
                                    {t.signalAddress}
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    className="w-full px-8 py-6 bg-pixel-dark border-b-4 border-pixel-moss/30 text-pixel-rose focus:border-pixel-rose focus:bg-pixel-rose/5 outline-none transition-all font-pixel tracking-[0.4em] uppercase text-lg italic"
                                    placeholder={t.emailPlaceholder}
                                />
                            </div>

                            <div>
                                <label
                                    className="block text-xs font-bold text-pixel-gold/60 uppercase tracking-[0.4em] mb-6 italic underline decoration-pixel-rose/20 underline-offset-8 font-mono">
                                    {t.whisperContent}
                                </label>
                                <textarea
                                    required
                                    name="message"
                                    rows="6"
                                    className="w-full px-8 py-6 bg-pixel-dark border-b-4 border-pixel-moss/30 text-pixel-rose focus:border-pixel-rose focus:bg-pixel-rose/5 outline-none transition-all font-pixel tracking-[0.4em] uppercase text-lg italic resize-none"
                                    placeholder={t.messagePlaceholder}
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-pixel-rose text-xs font-bold tracking-[0.4em] uppercase italic animate-pulse">
                                    {t.signalLost}
                                </p>
                            )}

                            <div className="pt-12 flex justify-center">
                                <button
                                    disabled={status === "sending"}
                                    type="submit"
                                    className="btn-pixel w-full py-6 text-2xl tracking-[0.5em] font-bold italic"
                                >
                                    {status === "sending" ? t.sending : t.castWhisper}
                                </button>
                            </div>

                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;