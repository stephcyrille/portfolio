import './App.css';
import { Header } from './component/Header';
import { Hero } from './component/Hero';
import { ExperienceStarWarComponent } from './component/experience/ExperienceStarWars';
import { Skills } from './component/skills/Skills';
import { Footer } from './component/footer/Footer';

function App() {
  return (
    <>
      <div className='bg-gradient-to-r from-indigo-200 via-purple-200 to-teal-300 max-h-auto'>
          <Header />
          <Hero />
      </div>
      
      <div>
        <Skills />
        <ExperienceStarWarComponent />
      </div>

      <Footer />
    </>
  );
}

export default App;
