import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('project');

    const companyInfo = {
        role: 'Full Stack Developer',
        company: 'SR Integrated Circuit Pvt. Ltd.',
        parentBrand: 'Componentbuy',
        duration: '3 Months',
        location: 'Bengaluru, KA, India (Hybrid)',
        overview: 'SR Integrated Circuit India Private Limited is a leading technology distributor and wholesaler of electronic components and semiconductors. Operating the enterprise Componentbuy digital platform, the company provides automated component-sourcing integrations, interactive system designs, and logistics support to global OEMs and EMS suppliers.',
        technologies: [
            { name: 'React.js', icon: 'bxl-react', color: '#61dafb' },
            { name: 'TypeScript', icon: 'bxl-typescript', color: '#3178c6' },
            { name: 'Tailwind CSS', icon: 'bxl-tailwind-css', color: '#38bdf8' },
            { name: 'NestJS', icon: 'bx-layer', color: '#e0234e' },
            { name: 'Node.js', icon: 'bxl-nodejs', color: '#6cc24a' },
            { name: 'PostgreSQL', icon: 'bx-data', color: '#336791' },
            { name: 'REST APIs', icon: 'bx-transfer', color: '#ec4899' },
            { name: 'Git/Gitea', icon: 'bxl-git', color: '#609926' },
            { name: 'Selenium & Python', icon: 'bxl-python', color: '#ffde57' }
        ]
    };

    const features = [
        {
            title: 'Attendance Management',
            icon: 'bx-calendar-check',
            desc: 'Developed an automated daily attendance logging system for both students and staff, implementing real-time logging feeds and aggregated statistical views.'
        },
        {
            title: 'Student Profile Management',
            icon: 'bx-user-badge',
            desc: 'Built a 360-degree digital database profile tracking personal data, emergency contact lines, current academic records, and disciplinary histories.'
        },
        {
            title: 'Assignment Management',
            icon: 'bx-file',
            desc: 'Engineered an interactive coursework dashboard enabling instructors to upload resources and students to submit assignments with automated deadline indicators.'
        },
        {
            title: 'Settings & Config Module',
            icon: 'bx-slider-alt',
            desc: 'Implemented institutional settings dashboards allowing admin-level styling customizations, grading schemas, class timetables, and scheduling rules.'
        },
        {
            title: 'Dashboard & Reporting',
            icon: 'bx-bar-chart-alt-2',
            desc: 'Created dynamic analytics dashboards generating visualization diagrams of attendance scores, test marks distributions, and active metrics reports.'
        },
        {
            title: 'Authentication & RBAC',
            icon: 'bx-lock-alt',
            desc: 'Implemented secure session gates and precise Role-Based Access Controls to segment visibility among Admins, Teachers, Students, and Parents.'
        }
    ];

    const contributions = [
        {
            category: 'Frontend Engineering',
            icon: 'bx-devices',
            detail: 'Crafted the responsive, modern frontend architecture from scratch using React.js and TypeScript, applying Tailwind CSS to guarantee seamless cross-device mobile/desktop compatibility.'
        },
        {
            category: 'Backend Architectures',
            icon: 'bx-server',
            detail: 'Designed and implemented secure and modular REST endpoints in NestJS and Node.js, establishing a maintainable, enterprise-standard code foundation.'
        },
        {
            category: 'API & DB Integrations',
            icon: 'bx-git-merge',
            detail: 'Optimized PostgreSQL relational structures, executing clean migrations and writing efficient query schemas to minimize server-side latency.'
        },
        {
            category: 'Quality Automation',
            icon: 'bx-terminal',
            detail: 'Wrote robust web automation test scripts using Selenium and Python to execute automated UI checks, reducing deployment testing time and validating critical auth flows.'
        },
        {
            category: 'Refactoring & Bug Fixes',
            icon: 'bx-wrench',
            detail: 'Analyzed legacy render loops and database bottlenecks, optimizing client state loading and backend processing algorithms for improved responsiveness.'
        }
    ];

    const achievements = [
        {
            metric: '40% Faster Load Times',
            desc: 'Refactored complex PostgreSQL query chains and integrated server-side route caching, decreasing query execution times and report generation speed by over 40%.'
        },
        {
            title: 'Resolved Concurrency Bottlenecks',
            desc: 'Overcame critical database record conflicts during high-concurrency peak attendance hours by deploying atomic transactions and row-locking strategies.'
        },
        {
            title: 'Agile Team Collaboration',
            desc: 'Cooperated closely with standard engineering pods, executing detailed code reviews on GitHub, maintaining high code standards, and contributing to automated pipelines.'
        }
    ];

    const tabVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: -15, transition: { duration: 0.2 } }
    };

    return (
        <section id="experience" className="py-20 px-8 md:px-20 bg-secondary transition-colors duration-300 relative overflow-hidden">
            {/* Soft Ambient Light Glows */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px] -z-10"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-[120px] -z-10"></div>

            <h2 className="text-4xl font-bold text-center mb-16 text-text">
                Work <span className="text-accent">Experience</span>
            </h2>

            <div className="flex flex-col lg:flex-row gap-10 items-start">

                {/* Left Panel: Company Overview Card */}
                <motion.div
                    className="w-full lg:w-1/3 bg-primary/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -z-10"></div>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center border border-accent/20">
                            <i className="bx bx-chip text-3xl text-accent animate-pulse"></i>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-text">{companyInfo.role}</h3>
                            <p className="text-sm text-accent font-medium">{companyInfo.company}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mb-6 border-b border-gray-200 dark:border-gray-800/80 pb-6 text-sm text-text/70">
                        <div className="flex items-center gap-2">
                            <i className="bx bx-time-five text-accent text-lg"></i>
                            <span><strong>Duration:</strong> {companyInfo.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="bx bx-map text-accent text-lg"></i>
                            <span><strong>Location:</strong> {companyInfo.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="bx bx-shopping-bag text-accent text-lg"></i>
                            <span><strong>Distributor Brand:</strong> <span className="text-text font-semibold">{companyInfo.parentBrand}</span></span>
                        </div>
                    </div>

                    <h4 className="font-semibold text-text mb-2 text-base">Company Overview</h4>
                    <p className="text-sm text-text/80 leading-relaxed mb-6">
                        {companyInfo.overview}
                    </p>

                    <h4 className="font-semibold text-text mb-3 text-base">Technologies Implemented</h4>
                    <div className="flex flex-wrap gap-2">
                        {companyInfo.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/80 dark:bg-secondary border border-gray-200 dark:border-gray-800 text-xs text-text/90 rounded-full hover:border-accent/40 hover:shadow-[0_0_10px_rgba(56,189,248,0.15)] transition-all duration-300 cursor-default"
                            >
                                <i className={`bx ${tech.icon}`} style={{ color: tech.color }}></i>
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Right Panel: Interactive Tabs */}
                <div className="w-full lg:w-2/3 flex flex-col gap-6">

                    {/* Navigation Tabs */}
                    <div className="flex flex-wrap sm:flex-nowrap bg-primary/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 p-1.5 rounded-2xl gap-1.5 self-center sm:self-start w-full sm:w-auto justify-center">
                        {[
                            { id: 'project', label: 'Project', icon: 'bx-layer' },
                            { id: 'contributions', label: 'Contributions', icon: 'bx-code-block' },
                            { id: 'achievements', label: 'Achievements', icon: 'bx-trophy' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative flex-1 sm:flex-initial px-3 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer z-10 ${activeTab === tab.id
                                    ? 'text-primary'
                                    : 'text-text/70 hover:text-text'
                                    }`}
                            >
                                <i className={`bx ${tab.icon} text-base sm:text-lg`}></i>
                                <span>{tab.label}</span>

                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTabBg"
                                        className="absolute inset-0 bg-accent rounded-xl -z-10 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Panels */}
                    <div className="bg-primary/40 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-xl min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {activeTab === 'project' && (
                                <motion.div
                                    key="project-tab"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={tabVariants}
                                    className="flex flex-col gap-6"
                                >
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-3 py-1 bg-accent/10 border border-accent/25 text-accent text-xs font-bold uppercase rounded-md">Enterprise Product</span>
                                            <span className="text-text/50 text-xs">Full Lifecycle Development</span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-text mb-3">School Management System (SMS)</h3>
                                        <p className="text-text/80 text-sm md:text-base leading-relaxed">
                                            Designed and developed a highly scalable, multi-tenant academic operations software package designed to digitize modern school operations. Centralizing essential institutional features, the package helps administrators, instructors, and guardians interact seamlessly.
                                        </p>
                                    </div>

                                    <h4 className="text-lg font-bold text-text border-b border-gray-200 dark:border-gray-800 pb-2">Developed Features Core Modules</h4>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {features.map((feat, index) => (
                                            <div
                                                key={index}
                                                className="p-4 bg-secondary border border-gray-200 dark:border-gray-800/80 rounded-2xl hover:border-accent/30 transition-all duration-300 flex items-start gap-4 hover:shadow-md group"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/15 group-hover:bg-accent/10 transition-colors shrink-0">
                                                    <i className={`bx ${feat.icon} text-xl text-accent`}></i>
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-text text-sm mb-1 group-hover:text-accent transition-colors">{feat.title}</h5>
                                                    <p className="text-xs text-text/75 leading-relaxed">{feat.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'contributions' && (
                                <motion.div
                                    key="contributions-tab"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={tabVariants}
                                    className="flex flex-col gap-6"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold text-text mb-2">Technical Contributions</h3>
                                        <p className="text-text/80 text-sm md:text-base leading-relaxed">
                                            Engineered clean solutions to complex frontend styling, backend database mapping, and testing workflows, driving clean software development methodologies.
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        {contributions.map((contrib, index) => (
                                            <div
                                                key={index}
                                                className="p-5 bg-secondary border border-gray-200 dark:border-gray-800/80 rounded-2xl flex gap-4 items-start hover:border-accent/20 transition-all duration-300"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-accent/5 flex items-center justify-center border border-accent/10 shrink-0 text-accent text-xl">
                                                    <i className={`bx ${contrib.icon}`}></i>
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-text text-sm mb-1.5">{contrib.category}</h5>
                                                    <p className="text-xs md:text-sm text-text/75 leading-relaxed">{contrib.detail}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'achievements' && (
                                <motion.div
                                    key="achievements-tab"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={tabVariants}
                                    className="flex flex-col gap-6"
                                >
                                    <div>
                                        <h3 className="text-2xl font-bold text-text mb-2">Engineering Achievements & Impact</h3>
                                        <p className="text-text/80 text-sm md:text-base leading-relaxed">
                                            Highlighting business outcomes, performance improvements, and critical problem-solving delivered during the development cycle.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-6">
                                        {achievements.map((ach, index) => (
                                            <div
                                                key={index}
                                                className="p-6 bg-secondary border border-gray-200 dark:border-gray-800 rounded-2xl relative overflow-hidden group hover:border-accent/30 transition-all duration-300"
                                            >
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-xl -z-10 group-hover:bg-accent/10 transition-colors"></div>

                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent text-lg">
                                                        <i className="bx bx-badge-check"></i>
                                                    </div>
                                                    <h4 className="text-lg font-bold text-text group-hover:text-accent transition-colors">
                                                        {ach.metric || ach.title}
                                                    </h4>
                                                </div>
                                                <p className="text-sm text-text/75 leading-relaxed">
                                                    {ach.desc}
                                                </p>
                                            </div>
                                        ))}

                                        {/* Gained Skills/Selenium Automation Card */}
                                        <div className="p-6 bg-gradient-to-r from-accent/5 to-transparent border border-accent/15 rounded-2xl flex flex-col md:flex-row gap-5 items-center justify-between">
                                            <div className="flex gap-4 items-center">
                                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center border border-accent/20 shrink-0 text-accent text-2xl">
                                                    <i className="bx bx-cog"></i>
                                                </div>
                                                <div>
                                                    <h5 className="font-bold text-text text-base">Key Skill: QA Automation</h5>
                                                    <p className="text-xs text-text/70 leading-relaxed mt-0.5">
                                                        Acquired deep comprehension of test scripting using <strong>Selenium & Python</strong>, mapping component query models to automate manual workflows.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="px-4 py-2 bg-accent text-primary text-xs font-bold rounded-lg shadow-md hover:shadow-lg transition-all shrink-0 cursor-default">
                                                Hands-on Experience
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
