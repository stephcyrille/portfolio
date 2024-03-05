import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './component/Header';
import { HomePage } from './pages/home/HomePage'; 
import { PredictorPage } from './pages/f1-predictor/PredictorPage'; 


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/projects/f1-predictor" element={<PredictorPage />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
