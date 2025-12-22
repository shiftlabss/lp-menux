import React from 'react';
import styles from './Footer.module.css';

// Social Icons as simple SVGs
const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const FacebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.logo}>
                        <img src="/logo-menux.svg" alt="Menux" className={styles.logoImage} />
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnHeader}>LANDING PAGE</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>Produtos</a></li>
                            <li><a href="#" className={styles.link}>Diferenciais</a></li>
                            <li><a href="#" className={styles.link}>Planos</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnHeader}>PÁGINAS</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}>Produtos</a></li>
                            <li><a href="#" className={styles.link}>Diferenciais</a></li>
                            <li><a href="#" className={styles.link}>Planos</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4 className={styles.columnHeader}>REDES SOCIAIS</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#" className={styles.link}><InstagramIcon /> Instagram</a></li>
                            <li><a href="#" className={styles.link}><FacebookIcon /> Facebook</a></li>
                            <li><a href="#" className={styles.link}><LinkedinIcon /> Linkedin</a></li>
                        </ul>
                    </div>

                    <div className={styles.newsletter}>
                        <h4 className={styles.newsletterTitle}>Nossa Newsletter</h4>
                        <p className={styles.newsletterText}>
                            Digite seu email e inscreva-se, fique por
                            dentro das novidades do menuxIA.
                        </p>
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Digite seu email"
                                className={styles.input}
                            />
                            <button type="submit" className={styles.button}>Assinar</button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p className={styles.copyright}>© 2025 menuxIA. Todos os direitos reservados.</p>
                    <div className={styles.policyLinks}>
                        <a href="#" className={styles.policyLink}>Politica de Privacidade</a>
                        <a href="#" className={styles.policyLink}>Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
