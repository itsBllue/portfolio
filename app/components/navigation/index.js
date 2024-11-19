          "use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
    { name: "About", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" }
];

const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    },
    exit: { opacity: 0 }
};

const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3
        }
    },
    exit: { opacity: 0, y: -20 }
};

export default function Navigation({ isOpen, toggleMenu }) {
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                        onClick={toggleMenu}
                    >
                        <motion.nav
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col items-center justify-center h-full space-y-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    variants={menuItemVariants}
                                    whileHover={{ 
                                        scale: 1.1,
                                        color: "var(--primary-focus)",
                                        transition: { duration: 0.2 }
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    custom={index}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-4xl font-bold text-primary transition-all duration-200 hover:text-primary-focus"
                                        onClick={() => {
                                            toggleMenu();
                                            if (item.href.startsWith('#')) {
                                                setTimeout(() => {
                                                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                                                }, 300);
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};