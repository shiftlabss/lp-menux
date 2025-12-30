import React from 'react';
import styles from './ContextProblem.module.css';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const ContextProblem = () => {

    // Icons
    const ErrorIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 12.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8-8 8z" />
        </svg>
    );

    const ShoppingCartOffIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.41 1.13 0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.54-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-1.1.59-1.84.59-1.1 0-2-.9-2-2H5.5c0 1.1.9 2 2 2 1.1 0 2-.9 2-2h3.41l3.55 3.55 1.41-1.41L1.41 1.13zM7 15l1.1-2h2.36l2 2H7zM20 6h-7.53l5 5h2.53l-2.89-6z" />
        </svg>
    );

    const ArrowSplitIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.71 1.42-1.42-4.71-4.71z" />
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
                                <div className={styles.backgroundGlow}>
                                    <img src="/bg-menux-lp.png" alt="" />
                                </div>
                                <div className={`${styles.columnHeader} ${styles.menuxHeader}`}>Com o menuxIA</div>
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
                                    Dúvidas comuns resolvidas no cardápio
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
