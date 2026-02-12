import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profileImg from '../assets/profile1.jpg'; // Adjust if needed
import { motion } from 'framer-motion';

const Hero = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Frontend Developer', 'Web Designer', 'YouTuber'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:px-20 gap-10 pt-28 md:pt-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -z-10 animate-float"></div>

            <div className="flex-1 text-center md:text-left z-10">
                <h3 className="text-2xl font-bold mb-2">Hello, It's Me</h3>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient inline-block">Praveen Vishwakarma</h1>
                <h3 className="text-2xl font-bold mb-6">And I'm a <span className="text-accent" ref={el}></span></h3>
                <p className="mb-8 text-base md:text-lg leading-relaxed text-text/80">
                    Passionate "web developer" dedicated to crafting engaging and innovative solutions for the digital world. With a focus on "front-end design", I strive to turn ideas into reality.
                </p>

                <div className="flex justify-center md:justify-start gap-4 mb-8">
                    {[
                        { icon: 'bxl-linkedin', link: 'https://www.linkedin.com/in/praveen-vishwakarma-599871190' },
                        { icon: 'bxl-whatsapp', link: 'https://wa.me/9035884440' },
                        { icon: 'bx-envelope', link: 'mailto:praveensunar656@gmail.com' },
                        { icon: 'bxl-instagram', link: 'https://www.instagram.com/praveensunar?igsh=Y21hMGNxdWRiaHkw' },
                        { icon: 'bxl-github', link: 'https://github.com/praveensunar' }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center border-2 border-accent rounded-full text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(56,189,248,0.6)]"
                        >
                            <i className={`bx ${social.icon}`}></i>
                        </a>
                    ))}
                </div>

                <a href="#" className="inline-block px-8 py-3 bg-accent text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-300">More About Me</a>
            </div>

            <div className="flex-1 flex justify-center z-10">
                <motion.div
                    className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_50px_rgba(56,189,248,0.3)]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
