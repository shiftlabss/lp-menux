import React from 'react';
import styles from './HowItWorks.module.css';
import Reveal from './Reveal';

const HowItWorks = () => {
    const steps = [
        {
            title: "Cliente escaneia o QR Code",
            description: "O cardápio abre com um assistente que explica pratos e entende dúvidas comuns, como porção, ingredientes e restrições."
        },
        {
            title: "Cliente escolhe com ajuda da nossa IA",
            description: "O Menux orienta a decisão e recomenda entradas, bebidas e sobremesas no momento certo, com naturalidade e contexto."
        },
        {
            title: "Garçom valida e segue o fluxo normal",
            description: "O cliente chama o garçom para confirmar. O pedido fica mais claro, com menos correção e menos retrabalho."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal>
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            Funciona no seu<br />
                            restaurante em 3 passos
                        </h2>
                        <p className={styles.subtitle}>
                            Você não precisa mudar sua operação para começar. O Menux funciona sobre o seu QR Code e se encaixa no fluxo do salão com leveza.
                        </p>
                    </div>
                </Reveal>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className={styles.card}>
                                <div className={styles.imagePlaceholder}></div>
                                <h3 className={styles.cardTitle}>{step.title}</h3>
                                <p className={styles.cardDescription}>{step.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
