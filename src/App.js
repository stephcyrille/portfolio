import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './component/Header';
import { LocationProvider } from './providers/LocationProvider';
import { RouteWithAnimation } from './component/routes/RouteWithAnimation';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <LocationProvider>
          <RouteWithAnimation />
        </LocationProvider>
      </div>
    </Router>
   
  );
}

export default App;
