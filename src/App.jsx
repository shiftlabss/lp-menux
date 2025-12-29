import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intelligence from './components/Intelligence';
import DataIntelligence from './components/DataIntelligence';
import HowItWorks from './components/HowItWorks';
import Maestro from './components/Maestro';
import Experience from './components/Experience';
import RoiCalculator from './components/RoiCalculator';
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
        <HowItWorks />
        <Maestro />
        <Experience />
        <RoiCalculator />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}

export default App;
