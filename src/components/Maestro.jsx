import React from 'react';
import styles from './Maestro.module.css';

const Maestro = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    {/* Placeholder for small icon if needed, or just text */}
                    <div className={styles.maestroLabel}>
                        <img src="/maestro-icon.svg" alt="Maestro" className={styles.icon} />
                        Maestro
                    </div>
                    <h2 className={styles.title}>
                        Maestro, o assistente<br />
                        do seu restaurante
                    </h2>
                    <p className={styles.subtitle}>
                        O Maestro vive no cardápio, tira dúvidas e orienta a escolha.<br />
                        Assim o pedido sai mais rápido e completo, com menos perguntas<br />
                        para a equipe e mais venda por mesa.
                    </p>
                </header>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Sugestões que viraram venda</h3>
                        <p className={styles.cardDescription}>
                            Acompanhe recomendações aceitas e<br />
                            o impacto direto no ticket médio.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Acelera a decisão e recomenda no timing</h3>
                        <p className={styles.cardDescription}>
                            Organiza a escolha em poucos passos e sugere entradas,<br />
                            bebidas e sobremesas no momento certo, sem empurrar<br />
                            e sem depender da memória da equipe.
                        </p>
                    </div>

                    <div className={`${styles.card} ${styles.cardFullWidth}`}>
                        <h3 className={styles.cardTitle}>Entrega pedido mais pronto e gera sinais</h3>
                        <p className={styles.cardDescription}>
                            O cliente chega na validação mais consciente, com<br />
                            menos correção e retrabalho. E você vê o que é muito<br />
                            visto e pouco pedido, e o que converte quando sugerido.
                        </p>
                    </div>
                </div>

                <footer className={styles.footer}>
                    <p className={styles.footerText}>
                        <span className={styles.footerHighlight}>O Maestro não substitui sua equipe.</span>{' '}
                        <span className={styles.footerDimmed}>Ele</span><br />
                        <span className={styles.footerDimmed}>reduz a parte repetitiva e dá mais tempo para</span><br />
                        <span className={styles.footerHighlight}>atendimento humano e venda consultiva.</span>
                    </p>
                    <button className={styles.button}>
                        Solicitar demonstração
                    </button>
                </footer>
            </div>
        </section>
    );
};

export default Maestro;
