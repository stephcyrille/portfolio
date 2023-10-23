import './App.css';
import { Header } from './component/Header';
import { Hero } from './component/Hero';

function App() {
  return (
    <div className='bg-gradient-to-r from-indigo-200 via-purple-200 to-teal-300 h-screen'>
      <Header />
      <Hero />
    </div>
  );
}

export default App;
