import React from 'react';
import styles from './ContextProblem.module.css';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const ContextProblem = () => {

    // Icons
    const AlertIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const TrendIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const EyeOffIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7.03 20 2.55 16.5 1 12C2.07 8.92 4.67 6.4 7.94 5.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1 1L23 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 4C14.16 4 16.14 4.5 17.93 5.4C20.46 6.85 22.37 9.24 23 12C22.25 14.17 20.89 16 19.11 17.31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

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
                        <div className={styles.descriptionGrid}>
                            <div className={styles.descriptionItem}>
                                <span className={styles.bullet}>•</span>
                                <p>Hoje, a maioria dos cardápios no QR só mostra uma lista. Quando o cliente tem dúvida ou indecisão, ele chama o garçom. Em horário de pico, isso vira atraso, retrabalho e oportunidade perdida de venda.</p>
                            </div>
                            <div className={styles.descriptionItem}>
                                <span className={styles.bullet}>•</span>
                                <p>O Menux entra exatamente aqui. Ele transforma o cardápio em uma experiência que explica, orienta e recomenda, sem substituir a hospitalidade.</p>
                            </div>
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
                            <div className={styles.iconWrapper}>
                                <AlertIcon />
                            </div>
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
                            <div className={styles.iconWrapper}>
                                <EyeOffIcon /> {/* Changed icon to match visual flow better or keep Trend? Trend seems better for inconsistency */}
                                {/* Let's stick to Trend for Inconsistency as planned */}
                                <TrendIcon />
                            </div>
                            <h3 className={styles.itemTitle}>Venda de adicionais é inconsistente</h3>
                            <p className={styles.itemText}>
                                Entrada, bebida e sobremesa dependem de memória e timing. No pico, isso simplesmente não acontece com consistência.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.3} className={styles.problemItem}>
                        <div className={styles.timelineMarker}>
                            <div className={styles.numberCircle}>03</div>
                        </div>
                        <div className={styles.contentBox}>
                            <div className={styles.iconWrapper}>
                                <EyeOffIcon />
                            </div>
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
                                    Dúvida chama garçom
                                </div>
                                <div className={`${styles.pill} ${styles.before}`}>
                                    <div className={styles.iconBefore}><CrossIcon /></div>
                                    Escolha mais lenta
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
                                <div className={styles.columnHeader}>Com o menuxIA</div>
                                <div className={`${styles.pill} ${styles.after}`}>
                                    <div className={styles.iconAfter}><CheckIcon /></div>
                                    Cliente entende rápido o que faz sentido
                                </div>
                                <div className={`${styles.pill} ${styles.after}`}>
                                    <div className={styles.iconAfter}><CheckIcon /></div>
                                    Dúvidas comuns resolvidas no cardápio
                                </div>
                                <div className={`${styles.pill} ${styles.after}`}>
                                    <div className={styles.iconAfter}><CheckIcon /></div>
                                    Sugestões no momento certo
                                </div>
                                <div className={`${styles.pill} ${styles.after}`}>
                                    <div className={styles.iconAfter}><CheckIcon /></div>
                                    Mais adicionais com naturalidade
                                </div>
                                <div className={`${styles.pill} ${styles.after}`}>
                                    <div className={styles.iconAfter}><CheckIcon /></div>
                                    Gestor decide com dados e sugestões
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
                            Fale com nossa equipe de vendas
                        </span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default ContextProblem;
