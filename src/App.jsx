import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import TextHumanizer from './components/TextHumanizer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="page-content">
      {/* <Outlet />  */}
        <TextHumanizer />
      </main>
      <Footer />
    </div>
  );
}

export default App;