import React, { useState } from 'react';
import styles from './Experience.module.css';
import Reveal from './Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('cliente');

    // SVG Icons
    const CheckIcon = () => (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 4.5L6.75 12.75L3 9" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const TimerIcon = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8C14.6667 4.3181 11.6819 1.33334 8 1.33334C4.3181 1.33334 1.33334 4.3181 1.33334 8C1.33334 11.6819 4.3181 14.6667 8 14.6667Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 3.33334V8L10.6667 9.33334" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const FoodIcon = () => (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.6667 11.3333H13.6667C14.219 11.3333 14.6667 10.8856 14.6667 10.3333V6.33334C14.6667 5.78105 14.219 5.33334 13.6667 5.33334H12.6667M12.6667 11.3333V4.00001C12.6667 2.89544 11.7712 2.00001 10.6667 2.00001H4.00001C2.89544 2.00001 2.00001 2.89544 2.00001 4.00001V11.3333C2.00001 12.4379 2.89544 13.3333 4.00001 13.3333H10.6667C11.7712 13.3333 12.6667 12.4379 12.6667 11.3333Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.66666 4.66666H10" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.66666 7.33334H10" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const tabs = [
        { id: 'cliente', label: 'Visão do Cliente' },
        { id: 'garcom', label: 'Visão do Garçom' },
        { id: 'gerente', label: 'Visão do Gerente' },
    ];

    const content = {
        cliente: {
            title: <>Pede com confiança e<br />decide mais rápido</>,
            items: [
                <>Entende pratos, ingredientes, porções e<br />restrições, sem precisar chamar o garçom</>,
                <>Tira dúvidas comuns com base no<br />cardápio real do restaurante</>,
                <>Recebe sugestões de entradas, bebidas<br />e sobremesas no momento certo</>,
                <>Monta um pedido mais completo<br />com menos indecisão</>
            ],
            tags: [
                { icon: TimerIcon, text: "Menos tempo até decidir" },
                { icon: FoodIcon, text: "Mais pedidos com bebida e sobremesa" }
            ],
            cta: "Ver exemplo do cardápio com o Maestro"
        },
        garcom: {
            title: <>Menos repetição,<br />mais venda consultiva</>,
            items: [
                <>Reduz perguntas repetidas do salão,<br />liberando tempo de atendimento humano</>,
                <>Ajuda a abordar no timing certo<br />com sugestões prontas e discretas</>,
                <>Padroniza o discurso de venda<br />sem robotizar</>,
                <>Pedido sai mais completo e com<br />menos retrabalho de correção</>
            ],
            tags: [
                { icon: TimerIcon, text: "Menos idas e voltas por mesa" },
                { icon: FoodIcon, text: "Mais consistência no atendimento e no upsell" }
            ],
            cta: "Ver exemplos de script e sugestões por mesa"
        },
        gerente: {
            title: <>Dados para decidir,<br />ações para vender mais</>,
            items: [
                <>Enxerga o que é muito visto e pouco<br />pedido, com impacto estimado</>,
                <>Acompanha o que o Maestro sugeriu, o que<br />foi aceito e quanto gerou de resultado</>,
                <>Identifica oportunidades claras em<br />foto, descrição, preço e posição</>,
                <>Evolui o cardápio com segurança<br />e base em dados reais</>
            ],
            tags: [
                { icon: TimerIcon, text: "Ticket médio com atribuição" },
                { icon: FoodIcon, text: "Conversão por etapa e por categoria" }
            ],
            cta: "Ver o backoffice em ação"
        }
    };

    const currentContent = content[activeTab] || content.cliente;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal>
                    <div className={styles.header}>
                        <h2 className={styles.sectionTitle}>
                            Menux para cada pessoa da operação
                        </h2>
                        <p className={styles.subtitle}>
                            O Menux se adapta ao papel de cada pessoa no restaurante, entregando experiências diferentes para quem pede, para quem atende e para quem decide, sem mudar a operação.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.2} className={styles.mainCard}>
                    <div className={styles.tabsContainer}>
                        {tabs.map(tab => (
                            <motion.button
                                key={tab.id}
                                className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {tab.label}
                            </motion.button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            className={styles.contentWrapper}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className={styles.contentTitle}>{currentContent.title}</h3>

                            <div className={styles.checklist}>
                                {currentContent.items.map((item, index) => (
                                    <div key={index} className={styles.checkItem}>
                                        <div className={styles.checkIcon}>
                                            <CheckIcon />
                                        </div>
                                        <span className={styles.checkText}>{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.tagsContainer}>
                                {currentContent.tags.map((Tag, index) => (
                                    <div key={index} className={styles.tag}>
                                        <div className={styles.tagIcon}>
                                            <Tag.icon />
                                        </div>
                                        {Tag.text}
                                    </div>
                                ))}
                            </div>

                            <motion.button
                                className={styles.ctaButton}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {currentContent.cta}
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>
                </Reveal>
            </div>
        </section>
    );
};

export default Experience;
