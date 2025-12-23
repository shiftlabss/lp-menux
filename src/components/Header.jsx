import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          <p>
            Aproveite descontos e seja um dos nossos primeiros parceiros.
            <a href="#" className={styles.topBarLink}> Falar com equipe de vendas →</a>
          </p>
        </div>
      </div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/logo-menux.svg" alt="menux" className={styles.logoImage} />
          </div>

          <button
            className={styles.pancakeButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          <div className={`${styles.navContent} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navLinks}>
              <li><a href="#produtos" onClick={() => setIsMenuOpen(false)}>Produtos</a></li>
              <li><a href="#diferenciais" onClick={() => setIsMenuOpen(false)}>Diferenciais</a></li>
              <li><a href="#planos" onClick={() => setIsMenuOpen(false)}>Planos</a></li>
            </ul>
            <div className={styles.navActions}>
              <a href="#" className={styles.salesLink}>Equipe de Vendas</a>
              <button className={styles.demoButton}>Solicitar demonstração</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
