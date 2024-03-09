import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home/HomePage'; 
import { PredictorFirstPage } from '../../pages/f1-predictor/firstPage/PredictorFirstPage';
import { PredictorSecondPage } from '../../pages/f1-predictor/secondPage/PredictorSecondPage';

export const RouteWithAnimation = (props) => {
    const location = useLocation();

    return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/f1-predictor/" >
        {/* Add sub-routes inside this Route component */}
        <Route path="select-driver/" element={<PredictorFirstPage />} /> 
        <Route path="select-constructor/" element={<PredictorSecondPage />} />
      </Route>
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    );
  }