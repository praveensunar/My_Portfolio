import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const technicalSkills = [
        { name: 'HTML', icon: 'bxl-html5', color: '#f0a000', percentage: 95 },
        { name: 'CSS', icon: 'bxl-css3', color: '#9145c7', percentage: 90 },
        { name: 'JavaScript', icon: 'bxl-javascript', color: '#f4f43e', percentage: 85 },
        { name: 'React', icon: 'bxl-react', color: '#471da0', percentage: 80 },
        { name: 'Node.js', icon: 'bxl-nodejs', color: '#6cc24a', percentage: 75 },
        { name: 'Express.js', icon: 'bx-server', color: '#ffffff', percentage: 70 },
        { name: 'MongoDB', icon: 'bxl-mongodb', color: '#4db33d', percentage: 60 },
        { name: 'Tailwind CSS', icon: 'bxl-tailwind-css', color: '#38bdf8', percentage: 90 },
        { name: 'Redux', icon: 'bxl-redux', color: '#764abc', percentage: 70 },
        { name: 'OOPs', icon: 'bx-code-alt', color: '#e0e0e0', percentage: 85 },
        { name: 'Git', icon: 'bxl-git', color: '#f05032', percentage: 80 },
        { name: 'Java', icon: 'bxl-java', color: '#f12e2e', percentage: 70 },
        { name: 'Python', icon: 'bxl-python', color: '#6ae258', percentage: 50 },
    ];

    const professionalSkills = [
        { name: 'Creativity', percentage: 90 },
        { name: 'Self Learning', percentage: 80 },
        { name: 'Problem Solving', percentage: 70 },
        { name: 'TeamWork', percentage: 95 },
    ];

    return (
        <section id="skills" className="py-20 px-8 md:px-20 bg-primary transition-colors duration-300">
            <h2 className="text-4xl font-bold text-center mb-16 text-text">My <span className="text-accent">Skills</span></h2>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Technical Skills */}
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-8 text-center md:text-left text-text">Technical Skills</h3>
                    <div className="flex flex-col gap-6">
                        {technicalSkills.map((skill, index) => (
                            <div key={index}>
                                <div className="flex items-center justify-between mb-2 text-text">
                                    <span className="flex items-center gap-2">
                                        <i className={`bx ${skill.icon} text-2xl`} style={{ color: skill.color }}></i>
                                        {skill.name}
                                    </span>
                                    <span>{skill.percentage}%</span>
                                </div>
                                <div className="w-full bg-secondary h-3 rounded-full overflow-hidden border border-gray-200 dark:border-transparent">
                                    <motion.div
                                        className="h-full bg-accent rounded-full shadow-[0_0_10px_#0ef]"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.percentage}%` }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Professional Skills */}
                <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-8 text-center md:text-left text-text">Professional Skills</h3>
                    <div className="grid grid-cols-2 gap-8">
                        {professionalSkills.map((skill, index) => (
                            <div key={index} className="flex flex-col items-center text-text">
                                <div className="relative w-32 h-32">
                                    <svg className="w-full h-full transform -rotate-90">
                                        <circle cx="64" cy="64" r="50" className="stroke-secondary fill-transparent" strokeWidth="8" />
                                        <motion.circle
                                            cx="64" cy="64" r="50" className="stroke-accent fill-transparent" strokeWidth="8"
                                            strokeDasharray="314"
                                            strokeDashoffset="314"
                                            initial={{ strokeDashoffset: 314 }}
                                            whileInView={{ strokeDashoffset: 314 - (314 * skill.percentage) / 100 }}
                                            transition={{ duration: 1.5, delay: 0.5 }}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-text">
                                        {skill.percentage}%
                                    </div>
                                </div>
                                <span className="mt-4 font-bold">{skill.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* AI & Vibe Coding Tools */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-text">AI Tools & Vibe Coding</h3>
                        <p className="text-text/75 text-sm mb-6 leading-relaxed text-center md:text-left">
                            Leveraging state-of-the-art LLMs and agentic coding workflows to accelerate full-stack prototyping, automate testing scripts, and optimize code generation.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {[
                                { name: 'Claude', icon: 'bx-brain', color: '#d97706' },
                                { name: 'Gemini', icon: 'bx-star', color: '#4f46e5' },
                                { name: 'Antigravity', icon: 'bx-rocket', color: '#06b6d4' },
                                { name: 'DeepSeek', icon: 'bx-search', color: '#3b82f6' },
                                { name: 'ChatGPT', icon: 'bx-chat', color: '#10b981' }
                            ].map((tool, index) => (
                                <motion.span
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2.5 bg-secondary border border-gray-200 dark:border-gray-800 text-sm font-semibold text-text rounded-2xl shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:border-accent/40 transition-all duration-300 cursor-default"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <i className={`bx ${tool.icon} text-lg`} style={{ color: tool.color }}></i>
                                    {tool.name}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
