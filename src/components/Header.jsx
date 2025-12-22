import React from 'react';
import styles from './Header.module.css';

const Header = () => {
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
          <ul className={styles.navLinks}>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#diferenciais">Diferenciais</a></li>
            <li><a href="#planos">Planos</a></li>
          </ul>
          <div className={styles.navActions}>
            <a href="#" className={styles.salesLink}>Equipe de Vendas</a>
            <button className={styles.demoButton}>Solicitar demonstração</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
