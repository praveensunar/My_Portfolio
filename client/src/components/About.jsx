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
                <h4 className="text-xl font-bold mb-4 text-text">Full Stack Developer</h4>
                <p className="mb-6 leading-relaxed text-text/80">
                    I'm Praveen Vishwakarma, a dynamic Full Stack Developer with a Master's in Computer Applications (MCA) from the Community Institute of Management Studies, Bengaluru, and a Bachelor's in Computer Applications (BCA) from Sharnbasva University, Kalaburagi. I specialize in building robust enterprise web applications, leveraging modern frontend frameworks like React and powerful backend architectures like NestJS and Node.js.
                    <br /><br />
                    Through professional hands-on experience and internships, I have engineered scalable projects like the School Management System, Quiz Master, and Gold Loan Management System. I am adept at designing relational databases (PostgreSQL, MySQL), writing automated test suites (Selenium, Python), and collaborating in Agile teams to deliver high-performance, responsive software solutions.
                </p>
                <a href="#" className="inline-block px-8 py-3 bg-accent text-slate-900 font-bold rounded-full hover:shadow-[0_0_20px_#0ef] transition-shadow duration-300">Read More</a>
            </div>
        </section>
    );
};

export default About;
