import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home/HomePage'; 
import { PredictorFirstPage } from '../../pages/f1-predictor/firstPage/PredictorFirstPage';

export const RouteWithAnimation = (props) => {
    const location = useLocation();

    return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/f1-predictor" element={<PredictorFirstPage />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    );
  }