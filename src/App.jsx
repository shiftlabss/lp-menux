import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intelligence from './components/Intelligence';
import DataIntelligence from './components/DataIntelligence';
import Maestro from './components/Maestro';
import Experience from './components/Experience';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intelligence />
        <DataIntelligence />
        <Maestro />
        <Experience />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

export default App;
