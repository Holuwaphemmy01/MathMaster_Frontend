import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ChallengeMode from './components/ChallengeMode';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/challenge" element={<ChallengeMode />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
