export default function Header({
    isScrolled,
    isDarkMode,
    toggleDarkMode,
    activeSection,
    isMobileMenuOpen,
    setIsMobileMenuOpen
}: {
    isScrolled: boolean;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    activeSection: string;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
}) {
    return (
        /* Header/Navbar */
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg shadow-slate-100/50 dark:shadow-none border-b border-slate-100 dark:border-slate-800"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="container flex items-center justify-between">
                <a
                    href="#home"
                    className="font-bold text-2xl tracking-tight bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent"
                >
                    Erlangga<span className="text-slate-800 dark:text-white">Juni</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-8 font-medium">
                        {["home", "about", "portfolio", "skills"].map((section) => (
                            <li key={section}>
                                <a
                                    href={`#${section}`}
                                    className={`capitalize text-sm transition-colors relative py-1 ${activeSection === section
                                        ? "text-primary font-semibold"
                                        : "text-slate-600 dark:text-slate-300 hover:text-primary"
                                        }`}
                                >
                                    {section === "portfolio" ? "Portfolio" : section}
                                    {activeSection === section && (
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Dark Mode Toggle (Desktop) */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-600 dark:text-slate-300"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? (
                            // Sun Icon
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                            </svg>
                        ) : (
                            // Moon Icon
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.3 1.2-.9 1.3-3.7.8-6.4 4-6.4 7.7 0 4.4 3.6 8 8 8 3.7 0 6.9-2.6 7.7-6.4.1-.6.7-1 1.3-.9.6.1 1 .7.9 1.3-.9 4.6-5 8.1-9.9 8.1z" />
                            </svg>
                        )}
                    </button>
                </nav>

                {/* Mobile Actions Container */}
                <div className="flex items-center gap-4 md:hidden">
                    {/* Dark Mode Toggle (Mobile) */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-slate-600 dark:text-slate-300"
                        aria-label="Toggle theme"
                    >
                        {isDarkMode ? (
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.01c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12.3 22h-.1c-5.5 0-10-4.5-10-10 0-4.8 3.5-8.9 8.2-9.8.6-.1 1.2.3 1.3.9.1.6-.3 1.2-.9 1.3-3.7.8-6.4 4-6.4 7.7 0 4.4 3.6 8 8 8 3.7 0 6.9-2.6 7.7-6.4.1-.6.7-1 1.3-.9.6.1 1 .7.9 1.3-.9 4.6-5 8.1-9.9 8.1z" />
                            </svg>
                        )}
                    </button>

                    {/* Mobile Hamburger menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-md focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            // Close Icon
                            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // Hamburger Icon
                            <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 shadow-xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="px-6 py-4 flex flex-col gap-4 font-semibold">
                    {["home", "about", "portfolio", "skills"].map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block py-2 capitalize transition-colors ${activeSection === section
                                    ? "text-primary"
                                    : "text-slate-600 dark:text-slate-300"
                                    }`}
                            >
                                {section === "portfolio" ? "Portfolio" : section}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}