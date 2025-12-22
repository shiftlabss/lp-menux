import React from 'react';
import styles from './Intelligence.module.css';

const Intelligence = () => {
    const features = [
        {
            title: "Não inventa. Entende o cardápio.",
            description: "Responde às dúvidas do salão usando o seu cardápio, sem termos técnicos ou respostas genéricas."
        },
        {
            title: "Recomenda com contexto",
            description: "Sugere entradas, bebidas e sobremesas com lógica configurável, no momento certo da jornada."
        },
        {
            title: "Gera inteligência para decisão",
            description: "Registra o comportamento de aceitação para mostrar o que funciona e onde ajustar a oferta."
        }
    ];

    return (
        <section className={styles.intelligence}>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.headline}>
                        Menux Intelligence é a inteligência artificial especialista em restaurantes.
                    </h2>
                    <p className={styles.subtext}>
                        A única inteligência que realmente entende o seu cardápio, sugere harmonizações e<br />
                        aumenta o ticket médio sem substituir a hospitalidade.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <img src="/banner-temp.svg" alt={`Feature ${index + 1}`} className={styles.banner} />
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Intelligence;
