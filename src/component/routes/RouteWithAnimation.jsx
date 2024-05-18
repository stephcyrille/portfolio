import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/home/HomePage'; 

export const RouteWithAnimation = (props) => {
    const location = useLocation();

    return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<HomePage />} />
    </Routes>
    );
  }