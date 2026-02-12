import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-secondary p-6 px-8 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300">
            <div className="text-center md:text-left text-text">
                <p>Copyright &copy; 2024 by Praveen Vishwakarma | All Rights Reserved.</p>
            </div>

            <div className="flex justify-center md:justify-end">
                <a href="#home" className="p-3 bg-accent rounded-lg hover:shadow-[0_0_20px_#0ef] transition-all">
                    <i className='bx bx-up-arrow-alt text-slate-900 text-xl'></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
