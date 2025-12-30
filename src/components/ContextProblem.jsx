import React from 'react';
import styles from './ContextProblem.module.css';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const ContextProblem = () => {




    const CrossIcon = () => (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const CheckIcon = () => (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal>
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            O seu cardápio não está<br />ajudando ninguém a decidir
                        </h2>
                        <div className={styles.subheadline}>
                            <p>Quando o cliente tem dúvida ou indecisão, ele chama o garçom. Em horário de pico, isso vira atraso, retrabalho e venda perdida. O Menux entra exatamente aqui: transforma o cardápio em uma experiência que explica, orienta e recomenda, sem substituir a hospitalidade.</p>
                        </div>
                    </div>
                </Reveal>

                <div className={styles.problemSequence}>
                    {/* Vertical Line */}
                    <div className={styles.timelineLine}></div>

                    <Reveal delay={0.1} className={styles.problemItem}>
                        <div className={styles.timelineMarker}>
                            <div className={styles.numberCircle}>01</div>
                        </div>
                        <div className={styles.contentBox}>
                            <h3 className={styles.itemTitle}>Dúvida vira gargalo no salão</h3>
                            <p className={styles.itemText}>
                                Porção, ingredientes, restrições e diferenças entre pratos geram chamadas repetitivas e quebram o ritmo do atendimento.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.2} className={styles.problemItem}>
                        <div className={styles.timelineMarker}>
                            <div className={styles.numberCircle}>02</div>
                        </div>
                        <div className={styles.contentBox}>
                            <h3 className={styles.itemTitle}>Venda de adicionais fica inconsistente</h3>
                            <p className={styles.itemText}>
                                Entrada, bebida e sobremesa dependem de memória e timing. No pico, isso raramente acontece com consistência.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3} className={styles.problemItem}>
                        <div className={styles.timelineMarker}>
                            <div className={styles.numberCircle}>03</div>
                        </div>
                        <div className={styles.contentBox}>
                            <h3 className={styles.itemTitle}>Decisão no achismo custa dinheiro</h3>
                            <p className={styles.itemText}>
                                Sem dados de navegação e aceitação, você não enxerga o que é muito visto e pouco pedido, nem onde existe oportunidade clara de ajuste.
                            </p>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.4}>
                    <div className={styles.comparisonContainer}>
                        <div className={styles.comparisonMeta}>
                            <div className={styles.comparisonColumn}>
                                <div className={styles.columnHeader}>Antes</div>
                                <div className={`${styles.pill} ${styles.before}`}>
                                    <div className={styles.iconBefore}><CrossIcon /></div>
                                    Cliente navega sem clareza
                                </div>
                                <div className={`${styles.pill} ${styles.before}`}>
                                    <div className={styles.iconBefore}><CrossIcon /></div>
                                    Dúvida chama o garçom
                                </div>
                                <div className={`${styles.pill} ${styles.before}`}>
                                    <div className={styles.iconBefore}><CrossIcon /></div>
                                    Escolha fica mais lenta
                                </div>
                                <div className={`${styles.pill} ${styles.before}`}>
                                    <div className={styles.iconBefore}><CrossIcon /></div>
                                    Menos adicionais por pedido
                                </div>
                                <div className={`${styles.pill} ${styles.before}`}>
                                    <div className={styles.iconBefore}><CrossIcon /></div>
                                    Gestor decide por percepção
                                </div>
                            </div>

                            <div className={styles.comparisonColumn}>
                                <div className={styles.backgroundGlow}>
                                    <img src="/bg-menux-lp.png" alt="" />
                                </div>
                                <div className={`${styles.columnHeader} ${styles.menuxHeader}`}>Com o Menux</div>
                                <div className={`${styles.pill} ${styles.after}`}>
                                    <div className={styles.iconAfter}>
                                        <img src="/icon-menux.svg" alt="Menux Icon" className={styles.customIcon} />
                                    </div>
                                    Cliente entende rápido o que faz sentido
                                </div>
                                <div className={`${styles.pill} ${styles.after}`}>
                                    <div className={styles.iconAfter}>
                                        <img src="/icon-menux.svg" alt="Menux Icon" className={styles.customIcon} />
                                    </div>
                                    Dúvidas comuns se resolvem no cardápio
                                </div>
                                <div className={`${styles.pill} ${styles.after}`}>
                                    <div className={styles.iconAfter}>
                                        <img src="/icon-menux.svg" alt="Menux Icon" className={styles.customIcon} />
                                    </div>
                                    Sugestões no momento certo
                                </div>
                                <div className={`${styles.pill} ${styles.after}`}>
                                    <div className={styles.iconAfter}>
                                        <img src="/icon-menux.svg" alt="Menux Icon" className={styles.customIcon} />
                                    </div>
                                    Mais adicionais com naturalidade
                                </div>
                                <div className={`${styles.pill} ${styles.after}`}>
                                    <div className={styles.iconAfter}>
                                        <img src="/icon-menux.svg" alt="Menux Icon" className={styles.customIcon} />
                                    </div>
                                    Gestor decide com dados e recomendações
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.5}>
                    <div className={styles.ctaWrapper}>
                        <motion.button
                            className={styles.button}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Solicitar demonstração
                        </motion.button>
                        <span className={styles.microcopy}>
                            Você vê isso aplicado no seu cardápio.
                        </span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default ContextProblem;
