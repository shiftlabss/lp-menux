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
                            <span className={styles.badgeBold}>Conheça o Menux</span>
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
                        Menux é o cardápio por QR Code com o Maestro, um assistente que explica pratos, tira dúvidas e sugere combinações no momento certo, para você vender mais por mesa com menos esforço da equipe.
                    </p>
                </Reveal>

                {/* Actions */}
                <Reveal delay={0.3}>
                    <div className={styles.actionsContainer}>
                        <div className={styles.actions}>
                            <motion.button
                                className={styles.primaryButton}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Solicitar demonstração
                            </motion.button>
                            <motion.button
                                className={styles.secondaryButton}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Ver como funciona
                            </motion.button>
                        </div>
                        <span className={styles.microcopy}>
                            Demonstração rápida. Sem compromisso.
                        </span>
                    </div>
                </Reveal>

            </div>

            {/* Dashboard Mockups */}
            <Reveal delay={0.4} className={styles.mockupWrapper}>
                <div className={styles.mockupContainer}>
                    <img src="/web-mock.svg" alt="Menux Web Dashboard" className={styles.webMock} />
                    <img src="/mobile-mock.svg" alt="Menux Mobile App" className={styles.mobileMock} />
                </div>
            </Reveal>
        </section>
    );
};

export default Hero;
