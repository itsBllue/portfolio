"use client";
import React from "react";
import TechIcon from "../../cards/techicon";
import TabView from "../../tabview";
import SocialIcon from "../../socialicon";
import toClipboard from "@/app/utils/toClipboard";
import { motion } from "framer-motion";

const frontendTech = [
    {
        name: 'React',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        name: 'React Native',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        name: 'Expo',
        img: 'https://www.vectorlogo.zone/logos/expo/expo-icon.svg',
        width: 45,
        height: 45
    },
    {
        name: 'Next.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    },
    {
        name: 'Tailwind',
        img: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
    },
    {
        name: 'TypeScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
        name: 'JavaScript',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    }
]

const backendTech = [
    {
        name: 'Node.js',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        width: 75,
        height: 75
    },
    {
        name: 'Express',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
        name: 'Apollo',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
    },
    {
        name: 'GraphQL',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
    },
    {
        name: 'MySQL',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        width: 100,
        height: 100
    },
    {
        name: 'MongoDB',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    }
]

const otherTech = [
    {
        name: 'Figma',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        width: 30,
        height: 30
    },
    {
        name: 'Adobe XD',
        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg'
    },
    {
        name: 'AWS',
        img: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg'
    }
]

const SocialLink = ({ icon, text, href, onClick }) => {
    const content = (
        <motion.div 
            className="flex items-center gap-3 p-3 rounded-lg backdrop-blur-sm border border-white/5 bg-secondary hover:bg-secondary-focus/80 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            <SocialIcon className="w-6 h-6" fill="fill-neutral-content" svg name={icon} href={href}/>
            <span className="text-sm font-medium text-secondary-content hover:text-primary transition-colors ">{text}</span>
        </motion.div>
    );

    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {content}
        </a>
    ) : (
        <div onClick={onClick}>
            {content}
        </div>
    );
};

function TechTab(props){
    const {content}  = props;
    return(
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 p-4'>
            {content.map((tech, index) => (
                <motion.div
                    key={tech.name + "fd"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-secondary-focus/30 backdrop-blur-sm rounded-lg hover:bg-secondary-focus/50 transition-colors duration-300"
                >
                    <TechIcon
                        name={tech.name}
                        icon={tech.img}
                        width={tech.width || undefined}
                        height={tech.height || undefined}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default function AboutMobileSection() {
    return (
        <section id="home" className="w-full bg-slate-900"> 
            <div className="w-full max-w-4xl mx-auto px-4 py-8 mt-12">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative d"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-xl blur-lg opacity-50" />
                    
                    <div className="relative bg-secondary shadow-xl rounded-xl border border-white/5 overflow-hidden">
                        <div className="relative p-4 border-b border-white/5">
                            <h1 className="text-xl font-bold text-neutral-content">About me</h1>
                            <motion.div
                                className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl -z-10"
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.1, 0.15, 0.1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>

                        <div className="p-4 space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="space-y-4"
                            >
                                <h2 className="text-2xl font-medium text-primary">Hey there! 👋</h2>
                                <p className="text-secondary-content/90 leading-relaxed">
                                    I&apos;m a software developer with a passion for creativity and continuous growth. 
                                    I&apos;m always on the lookout for new technologies and ways to improve my skills, and I love learning from others&apos; feedback.
                                </p>
                                <p className="text-secondary-content/90 leading-relaxed">
                                    My experience with different development cycles and stacks has helped me become a quick learner and adaptable problem solver.
                                    I&apos;m a team player and love working with others to create innovative solutions. In fact, 
                                    I&apos;m a natural leader and enjoy guiding and motivating my teammates towards success.
                                </p>
                                <p className="text-lg font-medium text-primary">
                                    Let&apos;s create something amazing together!
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
                            >
                                <SocialLink 
                                    icon="github" 
                                    text="ItsBllue" 
                                    href="https://github.com/itsBllue"
                                />
                                <SocialLink 
                                    icon="linkedin" 
                                    text="/in/tkb/" 
                                    href="https://www.linkedin.com/in/tkb/"
                                />
                                <SocialLink 
                                icon="email" 
                                text="Tanweerkbaig@gmail.com" 
                                onClick={() => toClipboard("Tanweerkbaig@gmail.com")}
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                <TabView 
                    titles={['Frontend', 'Backend', 'Other skills']} 
                    content={[
                        <TechTab key="1" content={frontendTech}/>, 
                        <TechTab key="2" content={backendTech}/>, 
                        <TechTab key="3" content={otherTech}/>
                    ]}
                />
            </div>
        </section>
    );
}