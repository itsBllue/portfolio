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
                                            // Add a small delay to allow the animation to complete
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

export default Navigation;