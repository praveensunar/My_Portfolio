import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header className="fixed top-0 left-0 w-full p-4 md:px-10 md:py-5 bg-white/10 dark:bg-primary/80 backdrop-blur-md border-b border-white/10 flex justify-between items-center z-50 sticky-header transition-colors duration-300">
            <a href="#" className="text-2xl font-bold text-text cursor-pointer transition-transform hover:scale-105">Portfolio</a>

            {/* Desktop Navbar */}
            <nav className="hidden md:flex items-center gap-8">
                {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                    <Link
                        key={item}
                        to={item.toLowerCase()}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-text font-medium text-lg transition-colors hover:text-accent hover:shadow-2xs cursor-pointer"
                        activeClass="text-accent"
                    >
                        {item}
                    </Link>
                ))}

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                     className="w-10 h-8 flex items-center justify-center 
             rounded-full border border-text text-text 
             hover:bg-text hover:text-primary 
             transition-all duration-300"
                    aria-label="Toggle Theme"
                >
                    <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'} text-xl`}></i>
                </button>
            </nav>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="p-1 rounded-full text-text text-2xl"
                >
                    <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`}></i>
                </button>
                <div className="text-3xl text-text cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
                </div>
            </div>

            {/* Mobile Navbar */}
            {menuOpen && (
                <nav className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md border-b border-white/10 p-5 flex flex-col gap-4 md:hidden shadow-lg animate-slideIn">
                    {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item.toLowerCase()}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="text-text text-xl font-medium block text-center py-2 hover:text-accent transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
};

export default Header;
