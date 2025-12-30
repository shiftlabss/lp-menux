import React from 'react';
import styles from './Intelligence.module.css';
import Reveal from './Reveal';

const Intelligence = () => {
    const features = [
        {
            title: "1. Aprende o seu cardápio",
            description: "Responde às dúvidas do salão usando o seu cardápio, sem termos técnicos ou respostas genéricas."
        },
        {
            title: "2. Recomenda com contexto",
            description: "Sugere entradas, bebidas e sobremesas com regras configuráveis, no timing certo da jornada da mesa."
        },
        {
            title: "3. Gera inteligência para decisão",
            description: "Registra o que a mesa aceita, ignora e pergunta, para você ajustar oferta e descrições com dados."
        }
    ];

    return (
        <section className={styles.intelligence}>
            <div className={styles.container}>

                {/* Header */}
                <Reveal>
                    <div className={styles.header}>
                        <h2 className={styles.headline}>
                            Menux Intelligence é a IA especialista em restaurantes
                        </h2>
                        <p className={styles.subtext}>
                            Ela entende o seu cardápio, responde dúvidas do salão e sugere combinações no momento certo, para você vender mais sem perder a hospitalidade.
                        </p>
                    </div>
                </Reveal>

                {/* Grid */}
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <Reveal key={index} delay={index * 0.15} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src="/banner-temp.svg" alt={`Feature ${index + 1}`} className={styles.banner} />
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </Reveal>
                    ))}
                </div>

                {/* CTA */}
                <Reveal delay={0.4}>
                    <div className={styles.ctaWrapper}>
                        <button className={styles.button}> Ver o Maestro em ação </button>
                        <span className={styles.microcopy}>
                            Você vê em 2 minutos como fica no seu cardápio.
                        </span>
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default Intelligence;
