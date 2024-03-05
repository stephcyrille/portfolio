import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './component/Header';
import { HomePage } from './pages/home/HomePage'; 


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
