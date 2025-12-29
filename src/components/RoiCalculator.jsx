import React, { useState, useEffect } from 'react';
import styles from './RoiCalculator.module.css';
import Reveal from './Reveal';
import { motion } from 'framer-motion';

const RoiCalculator = () => {
    // Default values matching the screenshot designs
    const [revenue, setRevenue] = useState(80000);
    const [ticket, setTicket] = useState(95);
    const [tables, setTables] = useState(20);

    const [potentialGain, setPotentialGain] = useState(0);
    const [paybackDays, setPaybackDays] = useState(0);

    const PLAN_PRICE = 2990;
    const UPLIFT_FACTOR = 0.0975; // ~9.75% based on screen visual (80000 -> 7800)

    useEffect(() => {
        // Logic Definitions:
        // 1. Monthly Orders = Revenue / Ticket
        // 2. Impacted Orders = Monthly Orders * 30% (Conservative adoption)
        // 3. Max Impact Cap = Tables * 12.5 (Saturation point per table to ensure table count matters)
        // 4. Gain = Min(Impacted, Cap) * R$ 31,00 (Fixed Avg Add-on Value)

        const safeRevenue = revenue > 0 ? revenue : 0;
        const safeTicket = ticket > 0 ? ticket : 1; // Prevent div by zero
        const safeTables = tables > 0 ? tables : 0;

        // 1. Derive Volume
        const monthlyOrders = safeRevenue / safeTicket;

        // 2. Calculate Potential Impact (30% of orders)
        const POTENTIAL_IMPACT_RATE = 0.30;
        const potentialImpactedOrders = monthlyOrders * POTENTIAL_IMPACT_RATE;

        // 3. Apply Table Constraint
        // Calibrated constant: 12.5 impacted orders/table/month puts the default (80k/95/20)
        // slightly above the cap, ensuring that adding tables visibly increases gain.
        const TABLE_CAP_FACTOR = 12.5;
        const maxImpactedOrders = safeTables * TABLE_CAP_FACTOR;

        // 4. Final Calculation
        const actualImpactedOrders = Math.min(potentialImpactedOrders, maxImpactedOrders);
        const AVG_ADDON_VALUE = 31; // R$ 31.00 per impacted order

        const gain = Math.round(actualImpactedOrders * AVG_ADDON_VALUE);
        setPotentialGain(gain);

        // Payback Calculation
        // Payback Days = (Plan Price / Daily Gain)
        const monthlyGain = gain > 0 ? gain : 1; // Prevent div by zero
        const dailyGain = monthlyGain / 30;

        let days = 0;
        if (dailyGain > 0) {
            days = Math.ceil(PLAN_PRICE / dailyGain);
        }
        setPaybackDays(days);

    }, [revenue, ticket, tables]);

    // Formatters
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 0
        }).format(value);
    };

    // Handlers with basic validation
    const handleRevenueChange = (e) => {
        // Remove non-digits
        const raw = e.target.value.replace(/\D/g, '');
        const val = raw ? parseInt(raw, 10) : 0;
        setRevenue(val);
    };

    const handleTicketChange = (e) => {
        const raw = e.target.value.replace(/\D/g, '');
        const val = raw ? parseInt(raw, 10) : 0;
        setTicket(val);
    };

    const handleTablesChange = (e) => {
        const raw = e.target.value.replace(/\D/g, '');
        const val = raw ? parseInt(raw, 10) : 0;
        setTables(val);
    };

    const highlightedGain = formatCurrency(potentialGain);
    const highlightedPayback = `${paybackDays} dias`;

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <Reveal>
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            O Menux se paga com<br />
                            poucos adicionais por dia
                        </h2>
                        <p className={styles.subtitle}>
                            Simule o retorno no seu restaurante em uma conta simples.
                        </p>
                    </div>
                </Reveal>

                <div className={styles.grid}>
                    {/* Calculator Card */}
                    <Reveal delay={0.1} className={styles.calculatorCard}>
                        <div>
                            <h3 className={styles.cardTitle}>Calculadora ROI</h3>
                            <p className={styles.cardDescription}>
                                Veja como pequenos adicionais por dia podem impactar o faturamento do seu restaurante.
                            </p>

                            <div className={styles.inputsRow}>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Faturamento Mensal</label>
                                    <div className={styles.inputContainer}>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            value={revenue ? `R$${revenue.toLocaleString('pt-BR')}` : ''}
                                            onChange={handleRevenueChange}
                                            placeholder="R$0"
                                        />
                                    </div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Ticket Médio</label>
                                    <div className={styles.inputContainer}>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            value={ticket ? `R$${ticket.toLocaleString('pt-BR')}` : ''}
                                            onChange={handleTicketChange}
                                            placeholder="R$0"
                                        />
                                    </div>
                                </div>
                                <div className={styles.inputGroup}>
                                    <label className={styles.label}>Mesas no Salão</label>
                                    <div className={styles.inputContainer}>
                                        <input
                                            type="text"
                                            className={styles.input}
                                            value={tables || ''}
                                            onChange={handleTablesChange}
                                            placeholder="0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.resultsContainer}>
                                <div className={styles.resultBoxMain}>
                                    <span className={styles.resultLabel}>Ganho adicional estimado por mês</span>
                                    <span className={styles.resultValue} style={{ fontWeight: 600 }}>{highlightedGain}</span>
                                </div>
                                <div className={styles.resultBoxPayback}>
                                    <span className={styles.resultLabel}>Payback</span>
                                    <span className={styles.resultValue}>{highlightedPayback}</span>
                                </div>
                            </div>

                            <p className={styles.disclaimer}>
                                Estimativa conservadora baseada em sugestões aceitas.
                            </p>
                        </div>
                    </Reveal>

                    {/* Plan Pulse Card */}
                    <Reveal delay={0.2} className={styles.planCard}>
                        <div>
                            <div className={styles.planMeta}>INVESTIMENTO MENSAL</div>
                            <div className={styles.planNameColumn}>
                                <p className={styles.planSectionLabel}>Plano</p>
                                <h3 className={styles.planName}>Pulse</h3>
                            </div>

                            <p className={styles.planDescription}>
                                Aumente seu ticket médio e padronize a experiência de atendimento no salão.
                            </p>

                            <div className={styles.planPriceContainer}>
                                <p className={styles.planPriceLabel}>Preço</p>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                                    <span className={styles.planPriceValue}>R$2.990</span>
                                    <span className={styles.planPricePeriod}>/mês</span>
                                </div>
                                <p className={styles.planNote}>Custo fixo mensal. Sem comissão por pedido.</p>
                            </div>
                        </div>     <div className={styles.actions}>
                            <motion.button
                                className={styles.button}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Ver se vale a pena pra mim
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8 3.33333L12.6667 8L8 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </motion.button>
                            <a href="#" className={styles.salesLink}>Fale com nossa equipe de vendas</a>
                        </div>

                    </Reveal>
                </div>
            </div>
        </section >
    );
};

export default RoiCalculator;
