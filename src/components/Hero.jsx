import React from 'react';
import styles from './Hero.module.css';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>

                {/* Static Badge */}
                <Reveal>
                    <div className={styles.badge}>
                        <span className={styles.badgeIcon}>
                            <img src="/icon-menux.svg" alt="menux" className={styles.badgeLogo} />
                        </span>
                        <span className={styles.badgeText}>
                            <span className={styles.badgeGray}>Conheça o </span>
                            <span className={styles.badgeBold}>menuxIA</span>
                        </span>
                    </div>
                </Reveal>

                {/* Headline */}
                <Reveal delay={0.1}>
                    <h1 className={styles.headline}>
                        Aumente em até 30% o<br />
                        ticket médio do seu<br />
                        restaurante
                    </h1>
                </Reveal>

                {/* Subtext */}
                <Reveal delay={0.2}>
                    <p className={styles.subtext}>
                        Conheça o Menux IA, o assistente inteligente que explica pratos, tira dúvidas e recomenda itens, ajudando sua equipe a vender mais com menos esforço
                    </p>
                </Reveal>

                {/* Actions */}
                <Reveal delay={0.3}>
                    <div className={styles.actions}>
                        <div className={styles.secondaryAction}>
                            <motion.button
                                className={styles.primaryButton}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Descobrir o Menux &rarr;
                            </motion.button>
                            <motion.button
                                className={styles.secondaryButton}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Solicitar demonstração
                            </motion.button>
                        </div>
                    </div>
                </Reveal>

            </div>

            {/* Dashboard Placeholder */}
            <Reveal delay={0.4} className={styles.dashboardPlaceholder}>
                <img src="/img-menux.png" alt="Menux Dashboard" className={styles.dashboardImage} />
            </Reveal>
        </section>
    );
};

export default Hero;
