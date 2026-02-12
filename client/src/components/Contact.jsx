import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-8 md:px-20 bg-primary min-h-screen flex flex-col justify-center transition-colors duration-300">
            <h2 className="text-4xl font-bold text-center mb-16 text-text">Contact <span className="text-accent">Me</span></h2>

            <form action="#" className="max-w-3xl mx-auto w-full flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <input type="text" placeholder="Full Name" className="flex-1 p-4 rounded-lg bg-secondary text-text border-2 border-transparent focus:border-accent outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500 shadow-md" required />
                    <input type="email" placeholder="Email Address" className="flex-1 p-4 rounded-lg bg-secondary text-text border-2 border-transparent focus:border-accent outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500 shadow-md" required />
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <input type="number" placeholder="Mobile Number" className="flex-1 p-4 rounded-lg bg-secondary text-text border-2 border-transparent focus:border-accent outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500 shadow-md" />
                    <input type="text" placeholder="Email Subject" className="flex-1 p-4 rounded-lg bg-secondary text-text border-2 border-transparent focus:border-accent outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-500 shadow-md" />
                </div>

                <textarea cols="30" rows="10" placeholder="Your Message" className="p-4 rounded-lg bg-secondary text-text border-2 border-transparent focus:border-accent outline-none transition-colors resize-none placeholder-gray-400 dark:placeholder-gray-500 shadow-md"></textarea>

                <div className="text-center">
                    <button type="submit" className="px-10 py-3 bg-accent text-slate-900 font-bold rounded-lg hover:shadow-[0_0_20px_#0ef] transition-shadow duration-300 cursor-pointer">Send Message</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
