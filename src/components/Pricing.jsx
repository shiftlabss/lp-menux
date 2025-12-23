import React from 'react';
import styles from './Pricing.module.css';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.checkIcon}>
        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Pricing = () => {
    const plans = [
        {
            name: "Pulse",
            description: "Casas que precisam aliviar o salão e explicar melhor o cardápio.",
            price: "1.500",
            setup: "4.900",
            tables: "20 mesas incluídas",
            extraTable: "25",
            isPopular: false
        },
        {
            name: "Advisor",
            description: "Casas com foco em aumentar ticket médio com upsell estruturado.",
            price: "1.990",
            setup: "7.900",
            tables: "40 mesas incluídas",
            extraTable: "35",
            isPopular: true
        },
        {
            name: "Pulse", // Kept as Pulse per image, though might be Enterprise conceptually
            description: "Redes e operações grandes que precisam orquestrar fluxo e padrão.",
            price: "2.990",
            setup: "9.900",
            tables: "60 mesas incluídas",
            extraTable: "45",
            isPopular: false
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal>
                    <header className={styles.header}>
                        <h2 className={styles.sectionTitle}>Pricing for every stage of growth</h2>
                        <p className={styles.subtitle}>
                            O Menux facilita para os líderes financeiros a previsão e gerenciamento de custos,
                            com preços SaaS diretos baseados nas necessidades do seu negócio.
                        </p>
                    </header>
                </Reveal>

                <div className={styles.grid}>
                    {plans.map((plan, index) => (
                        <Reveal key={index} delay={index * 0.1} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.planTitleRow}>
                                    <span className={styles.planLabel}>PLANO</span>
                                    <h3 className={styles.planName}>{plan.name}</h3>
                                </div>
                                {plan.isPopular && (
                                    <span className={styles.badge}>
                                        Mais popular <span>🔥</span>
                                    </span>
                                )}
                            </div>

                            <div className={styles.cardBody}>
                                <p className={styles.description}>{plan.description}</p>

                                <div className={styles.priceContainer}>
                                    <p className={styles.priceLabel}>Mensalidade a partir de</p>
                                    <div className={styles.priceValue}>
                                        R${plan.price} <span className={styles.pricePeriod}>/mês</span>
                                    </div>
                                </div>

                                <hr className={styles.divider} />

                                <ul className={styles.featuresList}>
                                    <li className={styles.featureItem}>
                                        <CheckIcon />
                                        <span>Setup a partir de R$ {plan.setup}</span>
                                    </li>
                                    <li className={styles.featureItem}>
                                        <CheckIcon />
                                        <span>{plan.tables}</span>
                                    </li>
                                    <li className={styles.featureItem}>
                                        <CheckIcon />
                                        <span>Mesa extra a partir de R$ {plan.extraTable}</span>
                                    </li>
                                </ul>

                                <motion.button
                                    className={styles.button}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Assinar plano
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.button>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
