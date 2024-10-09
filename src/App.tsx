import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SocialLinks from './components/SocialLinks';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Header />
      <SocialLinks />
      <Portfolio/>
      <Footer />
    </div>
  );
}

export default App;
