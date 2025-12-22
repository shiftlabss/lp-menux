import React, { useState } from 'react';
import styles from './FAQ.module.css';

const ChevronIcon = ({ className }) => (
    <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={styles.item}>
            <button
                className={styles.questionButton}
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className={styles.questionText}>{question}</span>
                <ChevronIcon className={`${styles.chevron} ${isOpen ? styles.open : ''}`} />
            </button>
            <div className={`${styles.answerContainer} ${isOpen ? styles.open : ''}`}>
                <div className={styles.answerText}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0); // First item open by default like in image? Or maybe none? Image implies first is open. Let's keep it 0.

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqData = [
        {
            question: "Can Menux handle usage-based billing data?",
            answer: (
                <>
                    <p style={{ marginBottom: '16px' }}>
                        Yes. Menux ingests detailed usage data, whether from your product, data warehouse, or
                        billing system, and maps it directly to contract terms to generate invoices.
                    </p>
                    <p>
                        Want to see examples? Visit our <span className={styles.link}>Billing Models</span> page for a deeper look at how Menux
                        automates complex usage scenarios.
                    </p>
                </>
            )
        },
        {
            question: "What ERPs does Menux work with?",
            answer: "Menux integrates seamlessly with major ERP systems including NetSuite, QuickBooks, Xero, and Sage Intacct, ensuring your financial data remains synchronized across your entire stack."
        },
        {
            question: "Is Menux compliant with audit and security standards?",
            answer: "Absolutely. Menux is SOC 2 Type II compliant and adheres to GDPR and CCPA regulations. We prioritize data security and maintain rigorous audit logs for all financial transactions."
        },
        {
            question: "How long does implementation take?",
            answer: "Implementation time varies by complexity, but most customers are live within 2-4 weeks. Our dedicated onboarding team guides you through data migration, configuration, and team training."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2 className={styles.title}>Pricing for every stage of growth</h2>
                    <p className={styles.subtitle}>
                        Menux makes it easy for finance leaders to forecast and manage costs,
                        with straightforward SaaS pricing based on your business needs
                    </p>
                </header>

                <div className={styles.accordion}>
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
