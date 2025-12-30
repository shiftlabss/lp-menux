import React, { useState, useEffect } from 'react';
import styles from './HowItWorks.module.css';
import Reveal from './Reveal';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00C896">
        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
);

const LoadingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
        <path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127.5Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Z" />
    </svg>
);

const InactiveIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_186_554" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
            <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_186_554)">
            <path d="M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.2625 9.32083 2.7875 8.1125C3.3125 6.90417 4.02917 5.84583 4.9375 4.9375C5.84583 4.02917 6.90833 3.3125 8.125 2.7875C9.34167 2.2625 10.6333 2 12 2C12.2833 2 12.5208 2.09583 12.7125 2.2875C12.9042 2.47917 13 2.71667 13 3C13 3.28333 12.9042 3.52083 12.7125 3.7125C12.5208 3.90417 12.2833 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.7167 20.0958 11.4792 20.2875 11.2875C20.4792 11.0958 20.7167 11 21 11C21.2833 11 21.5208 11.0958 21.7125 11.2875C21.9042 11.4792 22 11.7167 22 12C22 13.3667 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.9708 18.1542 19.0625 19.0625C18.1542 19.9708 17.0958 20.6875 15.8875 21.2125C14.6792 21.7375 13.3833 22 12 22Z" fill="#BEBEBE" />
        </g>
        <mask id="mask1_186_554" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="25">
            <rect y="24.0024" width="24" height="24" transform="rotate(-90 0 24.0024)" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask1_186_554)">
            <path d="M22 12.0024C22 13.3691 21.7375 14.6608 21.2125 15.8774C20.6875 17.0941 19.9708 18.1566 19.0625 19.0649C18.1542 19.9733 17.0917 20.6899 15.875 21.2149C14.6583 21.7399 13.3667 22.0024 12 22.0024C10.6167 22.0024 9.32083 21.7399 8.1125 21.2149C6.90417 20.6899 5.84583 19.9733 4.9375 19.0649C4.02917 18.1566 3.3125 17.0941 2.7875 15.8774C2.2625 14.6608 2 13.3691 2 12.0024C2 11.7191 2.09583 11.4816 2.2875 11.2899C2.47917 11.0983 2.71667 11.0024 3 11.0024C3.28333 11.0024 3.52083 11.0983 3.7125 11.2899C3.90417 11.4816 4 11.7191 4 12.0024C4 14.2191 4.77917 16.1066 6.3375 17.6649C7.89583 19.2233 9.78333 20.0024 12 20.0024C14.2167 20.0024 16.1042 19.2233 17.6625 17.6649C19.2208 16.1066 20 14.2191 20 12.0024C20 9.78577 19.2208 7.89827 17.6625 6.33994C16.1042 4.78161 14.2167 4.00244 12 4.00244C11.7167 4.00244 11.4792 3.90661 11.2875 3.71494C11.0958 3.52327 11 3.28577 11 3.00244C11 2.71911 11.0958 2.48161 11.2875 2.28994C11.4792 2.09827 11.7167 2.00244 12 2.00244C13.3667 2.00244 14.6583 2.26494 15.875 2.78994C17.0917 3.31494 18.1542 4.03161 19.0625 4.93994C19.9708 5.84827 20.6875 6.90661 21.2125 8.11494C21.7375 9.32327 22 10.6191 22 12.0024Z" fill="#BEBEBE" />
        </g>
    </svg>
);

const HowItWorks = () => {
    // 0: All inactive
    // 1: Step 1 loading
    // 2: Step 1 done, Step 2 loading
    // 3: Step 2 done, Step 3 loading
    // 4: Step 3 done (All completed)
    const [progressState, setProgressState] = useState(0);

    useEffect(() => {
        // Simple sequential timer logic
        const times = [0, 2000, 4000, 6000]; // Delays for each state chang

        // Start animation loop
        const runAnimation = () => {
            setProgressState(1); // Start Step 1 Loading
            setTimeout(() => setProgressState(2), 2000); // Step 1 Done, Step 2 Loading
            setTimeout(() => setProgressState(3), 4000); // Step 2 Done, Step 3 Loading
            setTimeout(() => setProgressState(4), 6000); // Step 3 Done

            // Loop restart after some time?
            setTimeout(() => {
                setProgressState(0);
                setTimeout(runAnimation, 100);
            }, 9000);
        };

        // Initial start
        const timer = setTimeout(runAnimation, 500);

        return () => clearTimeout(timer);
    }, []);

    const steps = [
        {
            title: "Cliente escaneia o QR Code",
            description: "O cardápio abre com o Maestro, que explica pratos e responde dúvidas comuns como porção, ingredientes e restrições."
        },
        {
            title: "Cliente escolhe com ajuda do Maestro",
            description: "Ele orienta a decisão e sugere entradas, bebidas e sobremesas no momento certo, com naturalidade e contexto."
        },
        {
            title: "Garçom confirma e segue o fluxo normal",
            description: "O cliente chama o garçom para validar. O pedido chega mais claro, com menos correção e menos retrabalho."
        }
    ];

    const getIconClass = (index) => {
        // Logic:
        // Index 0 (Step 1):
        //   progressState 0: Inactive
        //   progressState 1: Active (Loading)
        //   progressState >= 2: Completed

        // General: 
        //   If progressState == index + 1: Active
        //   If progressState > index + 1: Completed
        //   Else: Inactive

        const stepNum = index + 1;

        if (progressState > stepNum) return 'completed';
        if (progressState === stepNum) return 'active';
        return 'inactive';
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Left Column */}
                <div className={styles.content}>
                    <Reveal>
                        <h2 className={styles.title}>
                            Funciona no seu<br />
                            restaurante em 3 passos
                        </h2>
                        <p className={styles.subtitle}>
                            Você não precisa mudar sua operação para começar. O Menux funciona no seu QR Code e se encaixa no fluxo do salão com leveza.
                        </p>
                    </Reveal>

                    <div className={styles.stepsList}>
                        {steps.map((step, index) => {
                            const status = getIconClass(index);
                            const isLast = index === steps.length - 1;
                            return (
                                <Reveal key={index} delay={index * 0.2}>
                                    <div className={`${styles.stepItem} ${styles[status]} ${isLast ? styles.last : ''}`}>
                                        <div className={styles.iconWrapper}>
                                            {status === 'active' && <div className={styles.iconActive}><LoadingIcon /></div>}
                                            {status === 'completed' && <CheckIcon />}
                                            {status === 'inactive' && <InactiveIcon />}
                                        </div>
                                        <div className={styles.stepContent}>
                                            <h3 className={styles.stepTitle}>{step.title}</h3>
                                            <p className={styles.stepDescription}>{step.description}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>

                    {/* Actions */}
                    <Reveal delay={0.6}>
                        <div className={styles.ctaWrapper}>
                            <div className={styles.actions}>
                                <button className={styles.primaryButton}>Solicitar demonstração</button>
                                <button className={styles.secondaryButton}>Ver exemplo no celular</button>
                            </div>
                            <span className={styles.microcopy}>
                                Sem treinamento complexo. Começa com o seu cardápio atual.
                            </span>
                        </div>
                    </Reveal>
                </div>

                {/* Right Column */}
                <Reveal delay={0.4}>
                    <div className={styles.imageWrapper}>
                        {/* Placeholder gray box as requested */}
                    </div>
                </Reveal>

            </div>
        </section>
    );
};

export default HowItWorks;
