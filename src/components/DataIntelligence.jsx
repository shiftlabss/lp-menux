import React from 'react';
import styles from './DataIntelligence.module.css';

const DataIntelligence = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.headline}>
                        Inteligência de dados para você<br />
                        decidir com segurança
                    </h2>
                    <p className={styles.subtext}>
                        Com o Backoffice do Menux Intelligence, você deixa de “sentir” o cardápio e passa a enxergar o<br />
                        que acontece de verdade. Você vê o que é muito visto e pouco pedido, o que tem alta aceitação<br />
                        quando sugerido e onde existe oportunidade clara de ajuste, destaque ou remoção.
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.grid}>

                    {/* Row 1 */}
                    <div className={styles.cardLarge}>
                        <div className={styles.imageContainer}>
                            <img src="/bento-grid/1.svg" alt="Visão executiva" className={styles.image} />
                        </div>
                        <div className={styles.contentContainer}>
                            <h3 className={styles.cardTitle}>Visão executiva do dia e do mês</h3>
                            <p className={styles.cardDescription}>
                                Receita e itens em destaque, com<br />
                                leitura rápida para entender o turno.
                            </p>
                        </div>
                    </div>
                    <div className={styles.cardLarge}>
                        <div className={styles.imageContainer}>
                            <img src="/bento-grid/2.svg" alt="Engenharia de cardápio" className={styles.image} />
                        </div>
                        <div className={styles.contentContainer}>
                            <h3 className={styles.cardTitle}>Engenharia de cardápio com dados reais</h3>
                            <p className={styles.cardDescription}>
                                Ações claras para melhorar fotos,<br />
                                descrições e posicionamento dos itens.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className={styles.cardSmall}>
                        <div className={styles.imageContainer}>
                            <img src="/bento-grid/3.svg" alt="Sugestões" className={styles.image} />
                        </div>
                        <div className={styles.contentContainer}>
                            <h3 className={styles.cardTitle}>Sugestões que viraram venda</h3>
                            <p className={styles.cardDescription}>
                                Acompanhe recomendações aceitas e<br />
                                o impacto direto no ticket médio.
                            </p>
                        </div>
                    </div>
                    <div className={styles.cardSmall}>
                        <div className={styles.imageContainer}>
                            <img src="/bento-grid/4.svg" alt="Oportunidades" className={styles.image} />
                        </div>
                        <div className={styles.contentContainer}>
                            <h3 className={styles.cardTitle}>Oportunidades para melhorar conversão</h3>
                            <p className={styles.cardDescription}>
                                Identifique itens fracos e ajuste texto,<br />
                                foto e posição para vender mais.
                            </p>
                        </div>
                    </div>
                    <div className={styles.cardSmall}>
                        <div className={styles.imageContainer}>
                            <img src="/bento-grid/5.svg" alt="Operação" className={styles.image} />
                        </div>
                        <div className={styles.contentContainer}>
                            <h3 className={styles.cardTitle}>Operação e evolução contínua</h3>
                            <p className={styles.cardDescription}>
                                Teste itens, meça resultados e decida<br />
                                com dados o que fica no cardápio.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default DataIntelligence;
