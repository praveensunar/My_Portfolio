import React from 'react';
import quizImg from '../assets/quiz.png';
import talkImg from '../assets/talk.png';
import weatherImg from '../assets/weather.png';
import goldImg from '../assets/gold-loan.png';
import demo1 from '../assets/demo-1.gif';
import demo2 from '../assets/demo-2.gif'; // Imported for future use or if we want to toggle
import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            title: 'Quiz Web Application',
            desc: 'A dynamic quiz app using Django, HTML, CSS, JavaScript. Features user accounts, score tracking, and admin dashboard.',
            img: quizImg,
            link: 'https://github.com/praveensunar/DjangoQuiz-master.git'
        },
        {
            title: 'Realtime Chat App',
            desc: 'MERN Stack chat application with Socket.IO, authentication, and responsive UI.',
            img: talkImg,
            link: 'https://github.com/praveensunar/mern-chat-app.git'
        },
        {
            title: 'Weather Tracker',
            desc: 'Responsive weather app using HTML, CSS, JavaScript and REST APIs.',
            img: weatherImg,
            link: 'https://github.com/praveensunar/weather.git'
        },
        {
            title: 'Gold Loan Web App',
            desc: 'Web platform for gold loan management, interest calculation, and customer records.',
            img: goldImg,
            link: 'https://omsaigoldloan.netlify.app/'
        },
        {
            title: 'Blinkit Clone',
            desc: 'E-commerce quick-commerce clone. Features product listing, cart, and order management.',
            img: demo1, // Using Demo 1 GIF as the project preview
            link: 'https://github.com/praveensunar/BinkeyIt'
        }
    ];

    return (
        <section id="portfolio" className="py-20 px-8 md:px-20 bg-secondary transition-colors duration-300">
            <h2 className="text-4xl font-bold text-center mb-16 text-text">Latest <span className="text-accent">Projects</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative group rounded-2xl overflow-hidden shadow-lg h-64 md:h-80 border border-gray-200 dark:border-gray-800"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        {project.img ? (
                            <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        ) : (
                            <div className="w-full h-full bg-secondary flex items-center justify-center text-text/50">
                                <span className="text-xl font-bold">{project.title}</span>
                            </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4 transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 duration-500">
                            <h4 className="text-2xl font-bold mb-2 text-text">{project.title}</h4>
                            <p className="text-sm text-text/80 mb-4">{project.desc}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-text rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                                <i className='bx bx-link-external text-primary text-2xl'></i>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
