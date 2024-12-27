import React, { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Documentaries from './pages/Documentaries';
import Donate from './pages/Donate';
import Services from './pages/Services';
import StateProducts from './pages/StateProducts';
import ArtisanDetails from './pages/ArtisanDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <br />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/documentaries" element={<Documentaries />} />
              <Route path="/support/donate" element={<Donate />} />
              <Route path="/services" element={<Services />} />
              <Route path="/state/:state" element={<StateProducts />} />
              <Route path="/artisan/:id" element={<ArtisanDetails />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;