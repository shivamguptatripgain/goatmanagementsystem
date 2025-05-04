import './App.css';
import EnterDetails from './components/EnterDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import VillageDetails from './components/VillageDetails';
import Navbar from './components/Navbar'; // ✅ import Navbar

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enter-details" element={<EnterDetails />} />
        <Route path="/village/:id" element={<VillageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
