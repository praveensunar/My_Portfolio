import React from 'react';
import aboutImg from '../assets/profile3.JPG'; // Adjust if needed
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 px-8 md:px-20 bg-secondary flex flex-col md:flex-row items-center gap-10 transition-colors duration-300">
            <div className="flex-1 flex justify-center">
                <motion.div
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent shadow-[0_0_20px_#0ef]"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={aboutImg} alt="About Me" className="w-full h-full object-cover" />
                </motion.div>
            </div>

            <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold mb-4 text-text">About <span className="text-accent">Me</span></h2>
                <h4 className="text-xl font-bold mb-4 text-text">Front-end Developer</h4>
                <p className="mb-6 leading-relaxed text-text/80">
                    I'm Praveen Vishwakarma, a software developer with a Master's in Computer Applications from the Community Institute of Management Studies, Bengaluru, and a Bachelor's in Computer Applications from Sharnbasva University, Kalaburagi. I specialize in web development with expertise in JavaScript, React.js, and modern technologies.
                    <br /><br />
                    With hands-on experience from multiple internships, I've built projects like Quiz Master, Weather Tracker, and Gold Loan Management System, showcasing my technical skills and creativity. Certified in key technologies like HTML, CSS, Python, Java and MySQL, I focus on delivering scalable and impactful solutions. Explore my portfolio to see my work in action!
                </p>
                <a href="#" className="inline-block px-8 py-3 bg-accent text-slate-900 font-bold rounded-full hover:shadow-[0_0_20px_#0ef] transition-shadow duration-300">Read More</a>
            </div>
        </section>
    );
};

export default About;
