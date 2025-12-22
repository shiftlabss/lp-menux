import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>

                {/* Static Badge */}
                <div className={styles.badge}>
                    <span className={styles.badgeIcon}>
                        <img src="/icon-menux.svg" alt="menux" className={styles.badgeLogo} />
                    </span>
                    <span className={styles.badgeText}>
                        <span className={styles.badgeGray}>Conheça o </span>
                        <span className={styles.badgeBold}>menuxIA</span>
                    </span>
                </div>

                {/* Headline */}
                {/* Headline */}
                <h1 className={styles.headline}>
                    Aumente em até 30% o<br />
                    ticket médio do seu<br />
                    restaurante
                </h1>

                {/* Subtext */}
                <p className={styles.subtext}>
                    Conheça o Menux IA, o assistente inteligente que explica pratos, tira dúvidas e recomenda itens, ajudando sua equipe a vender mais com menos esforço
                </p>

                {/* Actions */}
                <div className={styles.actions}>
                    <div className={styles.secondaryAction}>
                        <button className={styles.primaryButton}>
                            Descobrir o Menux &rarr;
                        </button>
                        <button className={styles.secondaryButton}>
                            Solicitar demonstração
                        </button>
                    </div>
                </div>

            </div>

            {/* Dashboard Placeholder */}
            <div className={styles.dashboardPlaceholder}>
                <img src="/img-menux.png" alt="Menux Dashboard" className={styles.dashboardImage} />
            </div>
        </section>
    );
};

export default Hero;
